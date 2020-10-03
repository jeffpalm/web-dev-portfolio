import React, { useState } from 'react'
// STYLE/ANIMATION
import useStyles from 'views/ContactPage/ContactPageStyle'
// COMPONENTS
import FullPage from 'components/FullPage/FullPage'
import { MotionTypo } from 'components/MuiMotion/MuiMotion'
import ContactForm from 'components/ContactForm/ContactForm'
// HOOKS
import useWindowSize from 'hooks/useWindowSize'
// THIRD PARTY
import { AnimatePresence, motion, useAnimation } from 'framer-motion'

const ContactPage = () => {
    const classes = useStyles()

    const wS = useWindowSize()

    const topControls = useAnimation()
    const msgControls = useAnimation()
    const envelopeContainerControls = useAnimation()
    const btnControls = useAnimation()
    const envelopeControls = useAnimation()
    const palmtreeControls = useAnimation()
    const masterEnvelopeCtrls = useAnimation()
    const headerControls = useAnimation()

    const hotlineControls = useAnimation()
    const hotlineHookCtrls = useAnimation()

    const [animating, setAnimating] = useState(false)
    const [success, setSuccess] = useState(false)

    const sendAnimation = async () => {
        // Collapsing top fields and submit button into message field
        setAnimating(true)

        await headerControls.start({
            y: [0, -300],
            opacity: [1, 0],
        })

        await topControls.start(i => ({
            y: 80 * i,
            transition: {
                delay: 0.1 * i,
            },
        }))

        await btnControls.start({
            y: -200,
        })

        // Revealing and 'stuffing' envelope
        await Promise.all([
            msgControls.start({
                scale: 0.81,
                originY: 0,
            }),
            topControls.start({
                scale: 0.81,
                originY: 0,
            }),
            envelopeContainerControls.start({
                opacity: 1,
                translateY: [300, 200, -100],
            }),
        ])

        // Sealing envelope flap
        await envelopeControls.start(custom => {
            if (custom === 'flap') {
                return {
                    opacity: [1, 1, 1],
                    originY: [1, 1, 1],
                    rotateX: [0, 0, 180],
                }
            } else if (custom === 'back-flap') {
                return {
                    opacity: [0, 0, 0],
                }
            } else {
                return {}
            }
        })

        // Animating Palmtree seal
        await palmtreeControls.start({
            opacity: 1,
            scale: 8,
            originX: 0,
            originY: 0,
            x: 73,
            y: 0,
            transition: {
                duration: 0.5,
                ease: 'easeIn',
            },
        })

        await Promise.all([
            topControls.start({ opacity: 0 }),
            btnControls.start({ opacity: 0 }),
            msgControls.start({ opacity: 0 }),
        ])

        await Promise.all([
            hotlineControls.start({
                opacity: [1, 1, 1],
                y: [wS.height * -1, 0, -50],
            }),
            hotlineHookCtrls.start({
                pathLength: [0, 0, 1],
            }),
        ])

        await Promise.all([
            masterEnvelopeCtrls.start({
                y: [-100, -200, -5000],
                rotateZ: [0, -30, -30],
                originX: [1, 1, 1],
                originY: [0.25, 0.25, 0.25],
                transition: {
                    duration: 1,
                },
            }),
            hotlineControls.start({
                y: [-50, -200, -5000],
                transition: {
                    duration: 1,
                },
            }),
        ])

        setSuccess(true)
    }

    // TODO: Finish writing resetForm()

    // const resetForm = async () => {
    //     setSuccess(false)
    //     setAnimating(false)
    //     await Promise.all([
    //         headerControls.start('initial'),
    //         topControls.start('initial'),
    //         btnControls.start('initial'),
    //         msgControls.start('initial'),
    //         envelopeContainerControls.start('initial'),
    //         envelopeControls.start('initial'),
    //         hotlineControls.start('initial'),
    //         hotlineHookCtrls.start('initial'),
    //         masterEnvelopeCtrls.start('initial'),
    //     ])
    // }

    const successVariants = {
        initial: {
            opacity: 0,
        },
        enter: {
            opacity: 1,
            transition: {
                ease: 'linear',
                duration: 0.5,
            },
        },
    }

    return (
        <FullPage name='contact'>
            <motion.div className={classes.header} animate={headerControls}>
                <MotionTypo variant='h2' color='textPrimary' align='center'>
                    The Palmy Hotline
                </MotionTypo>
                <MotionTypo
                    variant='subtitle1'
                    color='textPrimary'
                    align='center'
                >
                    Whether you're interested in reaching out for a job
                    opportunity, project collaboration, or you just want to
                    connect, shoot me a message below
                </MotionTypo>
                <MotionTypo
                    variant='subtitle2'
                    color='textSecondary'
                    align='center'
                >
                    All messages are responded to directly within 1 business day
                </MotionTypo>
            </motion.div>
            {animating && (
                <>
                    <motion.svg
                        className={classes.hotline}
                        xmlns='http://www.w3.org/2000/svg'
                        width={wS.width}
                        height={wS.height}
                        animate={hotlineControls}
                        initial={{
                            y: wS.height * -1,
                            opacity: 0,
                        }}
                    >
                        <motion.path
                            d={`M${wS.width / 2 + 150} 0 
                            V${wS.height / 2}
                            l -30 -40
                            `}
                            stroke='#FFF'
                            strokeWidth={5}
                            fillOpacity={0}
                        />
                    </motion.svg>
                    <motion.svg
                        className={classes.hotlineHook}
                        xmlns='http://www.w3.org/2000/svg'
                        width={wS.width}
                        height={wS.height}
                        animate={hotlineControls}
                        initial={{
                            y: wS.height * -1,
                            opacity: 0,
                        }}
                    >
                        <motion.path
                            animate={hotlineHookCtrls}
                            initial={{
                                pathLength: 0,
                            }}
                            d={`M${wS.width / 2 + 150} ${wS.height / 2} 
                            l -30 -40
                            `}
                            stroke='#FFF'
                            strokeWidth={5}
                        />
                    </motion.svg>
                </>
            )}
            <ContactForm
                topControls={topControls}
                msgControls={msgControls}
                envelopeContainerControls={envelopeContainerControls}
                btnControls={btnControls}
                envelopeControls={envelopeControls}
                palmtreeControls={palmtreeControls}
                masterEnvelopeCtrls={masterEnvelopeCtrls}
                sendAnimation={sendAnimation}
            />
            {success && (
                <AnimatePresence>
                    <motion.div
                        className={classes.successScreen}
                        variants={successVariants}
                        initial='initial'
                        animate='enter'
                        exit='initial'
                    >
                        <MotionTypo
                            variant='h2'
                            color='textPrimary'
                            align='center'
                        >
                            Successful Hotline Transmission
                        </MotionTypo>
                        {/*<MotionButton onClick={resetForm}>*/}
                        {/*    Send Another*/}
                        {/*</MotionButton>*/}
                    </motion.div>
                </AnimatePresence>
            )}
        </FullPage>
    )
}

export default ContactPage
