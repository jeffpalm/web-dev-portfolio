import { useState, useEffect } from 'react'

const useVisibility = ref => {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const determineVisibility = () => {
            const { bottom, top, height } = ref.current.getBoundingClientRect()
            // console.log('window: ', window)
            // console.log('innerHeight: ', window.innerHeight)
            // console.log(ref)
            // console.log('Scroll up to: ', window.scrollY - (window.scrollY % window.innerHeight))
            // console.log('Scroll down to: ', window.innerHeight - (window.scrollY % window.innerHeight))
            // console.log('elementY: ', elementY)

            if (top < height && bottom >= 0) {
                setVisible(true)
            } else {
                setVisible(false)
            }
        }
        determineVisibility()
        window.addEventListener('scroll', determineVisibility)

        return () => {
            window.removeEventListener('scroll', determineVisibility)
        }
    }, [ref])

    return visible
}

export default useVisibility
