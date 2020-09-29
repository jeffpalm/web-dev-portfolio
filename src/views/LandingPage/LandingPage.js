import React, {useEffect, useState} from 'react'
import BackgroundVideo from '../../components/BackgroundVideo/BackgroundVideo'
import { MotionTypo } from '../../components/MuiMotion/MuiMotion'
import useWindowSize from '../../hooks/useWindowSize'
import useScrollPosition from "../../hooks/useScrollPosition";

const LandingPage = () => {
    const [intro, setIntro] = useState(true)
    const [timestamp, setTimestamp] = useState()
    const wS = useWindowSize()
    const scroll = useScrollPosition()
    const wrapperProps = {
        onWheel: e => {
            if (timestamp === undefined) setTimestamp(e.timeStamp)

            if (e.timeStamp - timestamp < 200) return

            if (e.deltaY > 0)
                window.scrollTo({ behavior: 'smooth', top: wS.height })

            setTimestamp(e.timeStamp)

            setTimeout(() => {
                setIntro(false)
            }, 500)
        },
    }

    useEffect(() => {
        let timeout
        if (scroll.y > 0) {
            timeout = setTimeout(() => {
                setIntro(false)
            }, 500)
        }
        return () => {
            clearTimeout(timeout)
        }
    }, [scroll.y])

    return (
        <>
            {intro ? (
                <BackgroundVideo wrapperProps={wrapperProps}>
                    <MotionTypo variant='h1' color='primary'>
                        Jeff Palmer
                    </MotionTypo>
                    <MotionTypo variant='subtitle1' color='textPrimary'>
                        Full Stack Web Developer
                    </MotionTypo>
                </BackgroundVideo>
            ) : null}
        </>
    )
}

export default LandingPage
