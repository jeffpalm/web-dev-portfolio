import React, {useState, useEffect} from 'react'
import { motion } from 'framer-motion'
import { ScrollLink } from 'react-scroll'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import theme from '../../assets/jss/theme'
import { SCROLL_SPEED } from '../../assets/constants'
import useStyles from 'assets/jss/components/DownArrow'

const MotionLink = ScrollLink(motion.a)

const DownArrow = ({
    to,
    bgColorOne = theme.palette.primary.main,
    bgColorTwo = theme.palette.secondary.main,
}) => {
    const classes = useStyles()

    return (
        <MotionLink
            style={{
                backgroundColor: bgColorOne
            }}
            className={classes.downArrow}
            initial={{
                y: 200,
                opacity: 0,
            }}
            animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                rotate: 0,
                borderRadius: '20%',
                backgroundColor: bgColorOne,
                transition: {
                    delay: 4,
                },
            }}
            transition={{
                duration: 0.25,
                ease: 'easeInOut',
                // times: [0, 0.2, 0.5, 0.8, 1],
                // loop: Infinity,
                // repeatDelay: 2,
            }}
            whileHover={{
                scale: [1, 1.2, 1.2, 1],
                rotate: [0, 0, 360, 360],
                borderRadius: ['20%', '20%', '50%', '50%'],
                backgroundColor: [
                    bgColorOne,
                    bgColorOne,
                    bgColorTwo,
                    bgColorTwo,
                ],
            }}
            to={to}
            smooth
            spy
            duration={SCROLL_SPEED}
        >
            <ArrowDownwardIcon fontSize='large' />
        </MotionLink>
    )
}

export default DownArrow
