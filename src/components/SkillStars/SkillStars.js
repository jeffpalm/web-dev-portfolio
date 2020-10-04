import React from 'react'
import StarIcon from '@material-ui/icons/Star'
import { motion } from 'framer-motion'

const SkillStars = ({ starCount, name }) => {
    const stars = [null, null, null, null, null]
    return (
        <motion.div>
            {stars.map(
                (star, i) =>
                    i + 1 <= starCount && (
                        <StarIcon key={name + i} color='primary' />
                    )
            )}
        </motion.div>
    )
}

export default SkillStars
