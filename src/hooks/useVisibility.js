import {useState, useEffect} from 'react'

const useVisibility = ref => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const determineVisibility = () => {
      const elementY = ref.current.offsetTop,
        edges = {
          btm: window.innerHeight + window.scrollY,
          top: window.scrollY
        }

      // console.log('window: ', window)
      // console.log('innerHeight: ', window.innerHeight)
      // console.log('scrollY: ', window.scrollY)
      // console.log('Scroll up to: ', window.scrollY - (window.scrollY % window.innerHeight))
      // console.log('Scroll down to: ', window.innerHeight - (window.scrollY % window.innerHeight))

      
      if (elementY < edges.btm && elementY >= edges.top) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }

    window.addEventListener('scroll', determineVisibility)
    
    return () => {
      window.removeEventListener('scroll', determineVisibility)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return visible
}

export default useVisibility