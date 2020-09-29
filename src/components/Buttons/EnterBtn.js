import React from 'react'
import { motion } from 'framer-motion'
import { ScrollLink } from 'react-scroll'
// import useStyles from 'assets/jss/components/EnterBtn'
import { SCROLL_SPEED } from '../../assets/constants'
import useHslCycle from '../../hooks/useHslCycle'
import { makeStyles } from '@material-ui/core/styles'

const MotionButton = ScrollLink(motion.button)

const variants = {
    initial: {
        opacity: 0,
        translateY: -300,
    },
    enter: {
        opacity: 1,
        translateY: 0,
        transition: {
            delay: 1,
        },
    },
}

const EnterBtn = ({ to }) => {
    const colorOne = useHslCycle(1, 0, 'forward')
    const colorTwo = useHslCycle(1, 0, 'backward')
    const useStyles = makeStyles(theme => ({
        enterBtn: {
            height: 50,
            width: 150,
            background: 'none',
            fontFamily: theme.typography.fontFamily,
            fontSize: 24,
            borderRadius: theme.shape.borderRadius,
            color: colorTwo,
            marginRight: 25,
            marginTop: 20,
            border: `1px solid ${colorOne}`,
            '&:hover': {
                cursor: 'pointer',
                background: `linear-gradient(90deg, ${colorOne},${colorTwo})`,
                color: 'black',
                border: 'none',
            },
            '&:focus': {
                outline: 'none',
            },
        },
    }))
    const classes = useStyles()

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
