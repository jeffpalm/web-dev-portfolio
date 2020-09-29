import React from 'react'
import StarIcon from '@material-ui/icons/Star'
import useStyles from 'assets/jss/components/SkillLegend'
import { motion } from 'framer-motion'
import { MotionTypo } from '../MuiMotion/MuiMotion'

const legend = [
    'Familiar',
    'Dabbled',
    'Proficient',
    'Comfortable',
    'Highly Proficient',
]

const SkillLegend = () => {
    const classes = useStyles()
    const stars = new Array(5).fill(null)
    return (
        <motion.div className={classes.root}>
            {stars.map((star, i) => (
                <motion.div
                    className={classes.starContainer}
                    key={`star-legend-${i}`}
                >
                    <motion.div>
                        {stars.map(
                            (e, j) =>
                                j > i || (
                                    <StarIcon
                                        key={`star-legend-${i}-${j}`}
                                        color='primary'
                                    />
                                )
                        )}
                    </motion.div>
                    <MotionTypo variant='body1' color='textPrimary'>
                        {legend[i]}
                    </MotionTypo>
                </motion.div>
            ))}
        </motion.div>
    )
}

export default SkillLegend
