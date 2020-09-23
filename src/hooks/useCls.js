import {useState, useEffect} from 'react'

const useCls = arr => {
    const [output, setOutput] = useState('')

    useEffect(() => {
        setOutput(arr.join(' '))
    }, [arr])

    return output
}

export default useCls