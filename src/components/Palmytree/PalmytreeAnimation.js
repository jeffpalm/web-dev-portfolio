const variants = {
    initial: {
        strokeDasharray: '1000%',
        strokeDashoffset: '1000%',
    },
    animate: {
        strokeDashoffset: 0,
        transition: {
            duration: 1,
            ease: 'linear'
        },
    },
}

export default variants
