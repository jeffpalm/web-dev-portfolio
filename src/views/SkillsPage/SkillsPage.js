import React, { useEffect, useState } from 'react'
// STYLE/ANIMATION
import useStyles from './SkillsPageStyle'
import variants from './SkillsPageAnimation'
// ASSETS
import skills from 'assets/data/skills'
// COMPONENTS
import FullPage from 'components/FullPage/FullPage'
import { MotionGrid, MotionTypo } from 'components/MuiMotion/MuiMotion'
import SkillStars from 'components/SkillStars/SkillStars'
import SkillLegend from 'components/SkillLegend/SkillLegend'
import tableIcons from 'components/SkillsTableIcons/SkillsTableIcons'
// THIRD PARTY
import { motion } from 'framer-motion'
import axios from 'axios'
import MaterialTable from 'material-table'
import { useTheme } from '@material-ui/core/styles'

const categories = skills.reduce(
    (acc, cur) => (acc.includes(cur.category) ? acc : [...acc, cur.category]),
    []
)

const SkillsPage = () => {
    const classes = useStyles()
    const theme = useTheme()

    const [gitHubStats, setGitHubStats] = useState({ lang: {}, pkgs: [] })

    useEffect(() => {
        const source = axios.CancelToken.source()

        const pullGitHubStats = async () => {
            try {
                await axios
                    .get('/api/githubstats', { cancelToken: source.token })
                    .then(res => {
                        setGitHubStats(res.data)
                    })
            } catch (err) {
                if (axios.isCancel(err)) {
                    console.log('cancelled')
                } else {
                    throw err
                }
            }
        }
        pullGitHubStats()

        return () => {
            source.cancel()
        }
    }, [])

    // useEffect(() => {
    //     controls.start('enter')
    // }, [controls])

    const columnStyle = { background: 'none' }

    return (
        <FullPage name='skills' id='skills-page'>
            <MotionGrid container>
                <MotionGrid
                    item
                    container
                    direction='column'
                    alignItems='center'
                    xs
                >
                    <SkillLegend />

                    {categories.map(category => (
                        <React.Fragment key={category}>
                            <MotionTypo
                                variant='h4'
                                color='textPrimary'
                                align='center'
                            >
                                {category}
                            </MotionTypo>
                            {skills
                                .filter(s => s.category === category)
                                .sort((a, b) => b.level - a.level)
                                .map((skill, i) => (
                                    <motion.div
                                        className={classes.skillCard}
                                        key={skill.title}
                                        variants={variants.core}
                                        custom={i * 0.05}
                                        exit='initial'
                                    >
                                        <div className={classes.skillContainer}>
                                            <MotionTypo
                                                variant='h6'
                                                align='right'
                                                color='textPrimary'
                                            >
                                                {skill.title}
                                            </MotionTypo>
                                            <SkillStars
                                                starCount={skill.level}
                                                name={skill.title}
                                            />
                                        </div>
                                        {skill.gitHubName &&
                                            gitHubStats.lang[
                                                skill.gitHubName
                                            ] && (
                                                <motion.div
                                                    className={
                                                        classes.gitHubBar
                                                    }
                                                >
                                                    <MotionTypo
                                                        variant='body1'
                                                        color='textSecondary'
                                                        display='inline'
                                                    >
                                                        GitHub Additions:{' '}
                                                        {
                                                            gitHubStats.lang[
                                                                skill.gitHubName
                                                            ]
                                                        }
                                                    </MotionTypo>
                                                </motion.div>
                                            )}
                                    </motion.div>
                                ))}
                        </React.Fragment>
                    ))}
                </MotionGrid>
                <MotionGrid
                    className={classes.tableContainer}
                    item
                    container
                    direction='column'
                    variants={variants.core}
                    custom={0.5}
                    exit='initial'
                    sm
                    // xs={12}
                    // sm={6}
                >
                    {gitHubStats.pkgs.length !== 0 && (
                        <MaterialTable
                            className={classes.table}
                            icons={tableIcons}
                            columns={[
                                {
                                    title: 'NPM Package',
                                    field: 'name',
                                    cellStyle: columnStyle,
                                },
                                {
                                    title: 'Total GitHub Repo Count',
                                    field: 'count',
                                    filtering: false,
                                    cellStyle: columnStyle,
                                },
                            ]}
                            data={gitHubStats.pkgs.sort(
                                (a, b) => b.count - a.count
                            )}
                            options={{
                                search: false,
                                showTitle: false,
                                draggable: false,
                                padding: 'dense',
                                rowStyle: {
                                    fontFamily: theme.typography.fontFamily,
                                },
                                headerStyle: {
                                    background: 'none',
                                    borderTopLeftRadius:
                                        theme.shape.borderRadius,
                                    borderTopRightRadius:
                                        theme.shape.borderRadius,
                                },
                                pageSize: 25,
                                paginationType: 'stepped',
                                pageSizeOptions: [],
                                toolbar: false,
                                filtering: true,
                            }}
                            detailPanel={rowData => (
                                <>
                                    <MotionTypo variant='h6' align='center'>
                                        Recently Updated Examples
                                    </MotionTypo>
                                    <ul className={classes.repoList}>
                                        {rowData.repos
                                            .sort(
                                                (a, b) => a.updated - b.updated
                                            )
                                            .map((repo, i) =>
                                                i > 5 ? null : (
                                                    <li
                                                        key={`${rowData.name}-${repo.name}`}
                                                    >
                                                        <a
                                                            className={
                                                                classes.repoLink
                                                            }
                                                            href={repo.url}
                                                            target='_blank'
                                                            rel='noopener noreferrer'
                                                        >
                                                            {repo.name}
                                                        </a>
                                                    </li>
                                                )
                                            )}
                                    </ul>
                                </>
                            )}
                            onRowClick={(e, r, togglePanel) => togglePanel()}
                            style={{
                                borderRadius: theme.shape.borderRadius,
                                background: 'none',
                                borderColor: theme.palette.background.paper,
                                borderWidth: 1,
                                borderStyle: 'solid',
                            }}
                        />
                    )}
                </MotionGrid>
            </MotionGrid>
        </FullPage>
    )
}

export default SkillsPage
