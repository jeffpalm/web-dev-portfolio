import React, { useEffect, useRef } from 'react'
import { MotionBox } from '../MuiMotion/MuiMotion'
import useStyles from 'assets/jss/components/FullPage'
import useCls from 'hooks/useCls'
// import variants from 'assets/animation/components/FullPage'
import { Element } from 'react-scroll'
import {
    useAnimation,
    AnimatePresence,
} from 'framer-motion'
import useVisibility from '../../hooks/useVisibility'

const FullPage = ({
    direction = 'column',
    justify = 'center',
    alignItems = 'center',
    children,
    boxProps,
    className,
    name,
    ...props
}) => {
    const classes = useCls([useStyles().root, className])
    const ref = useRef()
    const controls = useAnimation()
    const viz = useVisibility(ref)

    useEffect(() => {
        if (viz) {
            controls.start('enter')
        } else {
            controls.start('initial')
        }
    }, [viz, controls])

    return (
        <Element name={name}>
            <AnimatePresence>
                <MotionBox
                    key={name}
                    ref={ref}
                    className={classes}
                    display='flex'
                    flexDirection={direction}
                    justifyContent={justify}
                    alignItems={alignItems}
                    p={2}
                    m={0}
                    variants={{}}
                    initial='initial'
                    animate={controls}
                    exit='exit'
                    {...props}
                >
                    {children}
                </MotionBox>
            </AnimatePresence>
        </Element>
    )
}

export default FullPage
