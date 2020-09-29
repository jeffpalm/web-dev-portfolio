import { useState, useEffect } from 'react'

const useScroll = () => {
    const { scrollY, scrollX } = window

    const [output, setOutput] = useState({ x: scrollX, y: scrollY })

    useEffect(() => {
        const getScroll = () => {
            const { scrollY, scrollX } = window
            setOutput({ x: scrollX, y: scrollY })
        }
        window.addEventListener('scroll', getScroll)
        return () => {
            window.removeEventListener('scroll', getScroll)
        }
    }, [])

    return output
}

export default useScroll
