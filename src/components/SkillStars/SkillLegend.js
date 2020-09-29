import React from 'react'
import StarIcon from '@material-ui/icons/Star'
import useStyles from 'assets/jss/components/SkillLegend'
import { motion } from 'framer-motion'
import { MotionTypo } from '../MuiMotion/MuiMotion'
import variants from 'assets/animation/pages/SkillsPage/root'

const legend = [
    'Familiar',
    'Dabbled',
    'Proficient',
    'Comfortable',
    'Highly Proficient',
]

const SkillLegend = ({ controls }) => {
    const classes = useStyles()
    const stars = new Array(5).fill(null)
    return (
        <motion.div className={classes.root} variants={variants.gridListTile} animate={controls} custom={0}>
            {stars.map((star, i) => (
                <motion.div
                    className={classes.starContainer}
                    key={`star-legend-${i}`}
                    style={{
                        borderBottom: i === stars.length - 1 ? 'none' : '1px solid grey'
                    }}
                    variants={variants.gridListTile}
                    animate={controls}
                    custom={i * 0.05}
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
