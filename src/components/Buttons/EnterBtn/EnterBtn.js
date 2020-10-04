import React from 'react'
import { motion } from 'framer-motion'
import { ScrollLink } from 'react-scroll'
import { SCROLL_SPEED } from '../../../assets/data/constants'
import useHslCycle from '../../../hooks/useHslCycle'
import useStyles from './EnterBtnStyle'
import variants from './EnterBtnAnimation'

const MotionButton = ScrollLink(motion.button)

const EnterBtn = ({ to }) => {
    const colorOne = useHslCycle(1, 0, 'forward')
    const colorTwo = useHslCycle(1, 0, 'backward')

    const classes = useStyles(colorOne, colorTwo)()

    return (
        <MotionButton
            className={classes.enterBtn}
            to={to}
            smooth
            spy
            duration={SCROLL_SPEED}
            variants={variants}
            initial='initial'
            enter='enter'
            exit='initial'
            whileHover={{
                scale: 1.1,
            }}
        >
            Enter
        </MotionButton>
    )
}

export default EnterBtn
