import {useState} from 'react'

// Cycle through range of integers in increments of 1
const useRangeCycle = (min, max, start) => {
  const [cur, setCur] = useState(start)
  
  const next = () => {
    const newCur = cur + 1 > max ? min : cur + 1
    setCur(newCur)
    return newCur
  }

  const prev = () => {
    let newCur = cur - 1 < min ? max : cur - 1
    setCur(newCur)
    return newCur
  }

  const jumpTo = (newCur) => {
    if (newCur < min || newCur > max) throw new Error('Attempting to jump to cur outside of range')

    setCur(newCur)
    return newCur
  }
  
  return {cur, next, prev, jumpTo}
}

export default useRangeCycle