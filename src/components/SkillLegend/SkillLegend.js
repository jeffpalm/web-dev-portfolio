import React from 'react'
// STYLE/ANIMATION
import useStyles from './SkillLegendStyle'
import variants from './SkillLegendAnimation'
// THIRD PARTY
// import StarIcon from '@material-ui/icons/Star'
import { Icon } from '@iconify/react'
import palmTree from '@iconify/icons-twemoji/palm-tree'
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
        <motion.div
            className={classes.root}
            variants={variants.root}
            exit='initial'
            custom={0}
        >
            {stars.map((star, i) => (
                <motion.div
                    className={classes.starContainer}
                    key={`star-legend-${i}`}
                    style={{
                        borderBottom:
                            i === stars.length - 1 ? 'none' : '1px solid grey',
                    }}
                    variants={variants.core}
                    exit='initial'
                    custom={i * 0.05}
                >
                    <motion.div>
                        {stars.map(
                            (e, j) =>
                                j > i || (
                                    // <StarIcon
                                    //     key={`star-legend-${i}-${j}`}
                                    //     color='primary'
                                    // />
                                    <Icon
                                        key={`star-legend-${i}-${j}`}
                                        icon={palmTree}
                                        height={24}
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
