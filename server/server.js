require('dotenv').config();
const express = require('express'),
  app = express(),
  path = require('path'),
  nodemailer = require('nodemailer'),
  controller = require('./controller'),
  MongoClient = require('mongodb').MongoClient,
  { SERVER_PORT, SMTP_HOST, SMTP_USER, SMTP_PASS, MONGO_URI } = process.env,
  transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: 465,
    secure: true,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS
    }
  }),
  client = new MongoClient(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }),
  expressStaticGzip = require('express-static-gzip');

app.use(
  expressStaticGzip(`${__dirname}/../build`, {
    enableBrotli: true,
    orderPreference: ['br', 'gz'],
    setHeaders: (res) => {
      res.setHeader('Cache-Control', 'public, max-age=31536000');
    }
  })
);
app.use(express.json());

app.get('/resume', controller.resumeRedirect);

app.get('/api/githubstats', controller.getGitHubStats);
app.put('/api/githubstats', controller.updateGitHubStats);

app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;
  const msg = {
    from: SMTP_USER,
    to: 'jeff@jeffpalm.dev',
    subject: `[Contact Form] - ${subject}`,
    text: `Name: ${name} \nEmail: ${email} \nMessage: ${message}`
  };

  await transporter.sendMail(msg, (error) => {
    if (error) return res.status(500).send(error);
  });

  res.sendStatus(200);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

client.connect(() => {
  app.set('db', client.db());
  console.log('Database in place');
  app.listen(SERVER_PORT, () => {
    console.log(`Observin and servin port: ${SERVER_PORT}`);
  });
  client.db().collection('gitHubStats');
});
