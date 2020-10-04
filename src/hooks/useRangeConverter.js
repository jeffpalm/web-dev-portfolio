import { useState, useEffect } from 'react'

const useRangeConverter = (minOutput, maxOutput, minInput, maxInput, input) => {
    const [output, setOutput] = useState(input)

    useEffect(() => {
        // Handle input being out of range
        const adjustOutput = () => {
            if (input >= maxInput) return maxOutput

            if (input <= minInput) return minOutput

            const outputRange = maxOutput - minOutput
            const inputRange = maxInput - minInput
            const inputProgress = input - minInput
            const inputPercentile = inputProgress / inputRange
            const output = outputRange * inputPercentile + minOutput

            return output
        }

        setOutput(adjustOutput())
    }, [minOutput, maxOutput, minInput, maxInput, input])

    return output
}

export default useRangeConverter
