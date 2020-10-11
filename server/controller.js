const axios = require('axios'),
  { GITHUB_AUTH_TOKEN } = process.env,
  Sugar = require('sugar/string');
// Setting Axios Defaults for GitHub API
axios.defaults.headers.common['Accept'] = 'application/vnd.github.v3+json';
axios.defaults.headers.common['Authorization'] = `token ${GITHUB_AUTH_TOKEN}`;

const packageExclusions = [
  '@fortawesome/fontawesome-svg-core',
  '@fortawesome/free-solid-svg-icons',
  '@fortawesome/react-fontawesome',
  '@babel/runtime',
  'dom-helpers',
  'loose-envify',
  '@iconify/icons-logos',
  '@iconify/icons-twemoji',
  '@iconify/react',
  'topojson-client',
  'd3',
  '@iconify/icons-mdi-light',
  'json-server',
  'react-icons',
  'pg'
];

module.exports = {
  resumeRedirect: (req, res) => {
    res.redirect(
      'https://docs.google.com/document/d/1sbfqaDbpB-eU6_msyee5EG3dvjhqumk0ahWBhAdxKmc/edit?usp=sharing'
    );
  },
  getGitHubStats: (req, res) => {
    const db = req.app.get('db');

    db.collection('gitHubStats').findOne(
      { title: 'current' },
      (err, result) => {
        res.status(200).send(result);
      }
    );
  },
  updateGitHubStats: async (req, res) => {
    // TODO: Figure out retrieving stats for stories-with-data repo

    const dataAssembly = { lang: {}, pkgs: {} },
      db = req.app.get('db');

    const { data: repos } = await axios
      .get(
        'https://api.github.com/users/jeffpalm/repos?type=owner&per_page=100&sort=updated&direction=desc'
      )
      .catch((err) =>
        res
          .status(500)
          .send('GitHub Repo List API Call Failed. Details: ' + err)
      );

    const langStatsPromises = repos.map(
      (repo) =>
        new Promise((resolve, reject) => {
          axios
            .get(`https://api.github.com/repos/jeffpalm/${repo.name}/languages`)
            .then((res) => {
              const langData = res.data;

              for (let lang in langData) {
                dataAssembly.lang[lang]
                  ? (dataAssembly.lang[lang] += langData[lang])
                  : (dataAssembly.lang[lang] = langData[lang]);
              }
              resolve();
            })
            .catch((err) => {
              reject(
                `GitHub Repo Languages API Call failed for repo: ${repo.name}. Details: ${err}`
              );
            });
        })
    );

    const pkgStatsPromises = repos.map(
      (repo) =>
        new Promise((resolve) => {
          const repoDetails = {
            name: repo.name,
            url: repo.html_url,
            updated: repo.updated_at
          };

          axios
            .get(
              `https://raw.githubusercontent.com/jeffpalm/${repo.name}/master/package.json`
            )
            .then((res) => {
              const pkgData = res.data;

              !pkgData.dependencies && resolve();

              for (let dep in pkgData.dependencies) {
                let normalizedName = dep;

                if (dep[0] === '@') {
                  normalizedName = dep.slice(1);
                }

                normalizedName = new Sugar.String(normalizedName).titleize();

                if (dataAssembly.pkgs[normalizedName]) {
                  dataAssembly.pkgs[normalizedName]['repos'].push(repoDetails);
                  dataAssembly.pkgs[normalizedName].count++;
                } else if (!packageExclusions.includes(dep)) {
                  dataAssembly.pkgs[normalizedName] = {
                    repos: [repoDetails],
                    count: 1
                  };
                }
              }
              resolve();
            })
            .catch(() => {
              // If no package.json, just reslove promise
              resolve();
            });
        })
    );

    await Promise.all([...langStatsPromises, ...pkgStatsPromises]);

    const toUpsert = {
      title: 'current',
      lang: dataAssembly.lang,
      pkgs: []
    };

    for (let pkg in dataAssembly.pkgs) {
      toUpsert.pkgs.push({
        name: pkg,
        repos: dataAssembly.pkgs[pkg].repos.sort(
          (a, b) => a.updated - b.updated
        ),
        count: dataAssembly.pkgs[pkg].count
      });
    }

    db.collection('gitHubStats')
      .findOneAndReplace({ title: 'current' }, toUpsert, { upsert: true })
      .then(() => {
        res.sendStatus(200);
      })
      .catch((err) => {
        res
          .status(500)
          .send(
            `Error upserting document 'current' into collection gitHubStats. Details: ${err}`
          );
      });
  }
};
