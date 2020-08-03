import { useState, useEffect } from 'react'

const useSnapToFullPage = (ref, y, wH) => {
  
  const [prevY, setPrevY] = useState()
  const [output, setOutput] = useState({})
  const [pages, setPages] = useState([])
  const [curPage, setCurPage] = useState()
  
  useEffect(() => {
    const { scrollY: curY } = window
    const sH = ref.current ? ref.current.scrollHeight : 0
    const pageCount = Math.ceil(sH / wH)
    const toSetPages = []

    for (let i = 0; i < pageCount; i++){
      if(i === 0) {
        toSetPages.push(0)
      } else {
        toSetPages.push(toSetPages[i-1] + wH)
      }
    }
    setPages(toSetPages)
    setCurPage(Math.ceil(isFinite(sH / curY) ? sH/curY : 0))

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wH, ref])
  
 

	return output
}

export default useSnapToFullPage
