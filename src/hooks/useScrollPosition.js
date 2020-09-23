import { useState, useEffect } from 'react'

const useScrollPosition = () => {
    const [output, setOutput] = useState({
        x: window.scrollX,
        y: window.scrollY,
    })

    useEffect(() => {
        const getScroll = () =>
            setOutput({ x: window.scrollX, y: window.scrollY })
        window.addEventListener('scroll', getScroll)
        return () => {
            window.removeEventListener('scroll', getScroll)
        }
    }, [])

    return output
}

export default useScrollPosition
