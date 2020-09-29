import React, { useEffect } from 'react'
import useStyles from 'assets/jss/pages/SkillsPage/root'
import variants from 'assets/animation/pages/SkillsPage/root'
import FullPage from '../../components/FullPage/FullPage'
import { MotionTypo } from '../../components/MuiMotion/MuiMotion'
import skills from './skills'
import { motion, useAnimation } from 'framer-motion'
import SkillStars from '../../components/SkillStars/SkillStars'
import SkillLegend from '../../components/SkillStars/SkillLegend'

const categories = ['Languages', 'Libraries', 'Styling']

const SkillsPage = () => {
    const classes = useStyles()
    const controls = useAnimation()

    useEffect(() => {
        controls.start('enter')
    }, [controls])

    return (
        <FullPage name='skills'>
            <SkillLegend controls={controls} />

            {categories.map(category => (
                <React.Fragment key={category}>
                    <MotionTypo variant='h4' color='textPrimary'>
                        {category}
                    </MotionTypo>
                    {skills
                        .filter(s => s.category === category)
                        .sort((a, b) => b.level - a.level)
                        .map((skill, i) => (
                            <motion.div
                                className={classes.skillCard}
                                key={skill.title}
                                variants={variants.gridListTile}
                                custom={i * 0.05}
                            >
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
                            </motion.div>
                        ))}
                </React.Fragment>
            ))}
        </FullPage>
    )
}

export default SkillsPage