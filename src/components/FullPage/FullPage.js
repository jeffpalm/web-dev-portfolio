import React, { useEffect, useRef } from 'react'
// STYLE/ANIMATION
import useStyles from './FullPageStyle'
import variants from './FullPageAnimation'
// HOOKS
import { MotionBox } from '../MuiMotion/MuiMotion'
import useCls from 'hooks/useCls'
import { Element } from 'react-scroll'
import { useAnimation, AnimatePresence } from 'framer-motion'
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
                    variants={variants}
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
