const variants = {
    label: {
        initial: {
            opacity: 0,
        },
        enter: {
            opacity: 1,
            transition: {
                delay: 0.5,
                duration: 0.5,
            },
        },
    },
    errorMsg: {
        initial: {
            y: -50,
            opacity: 0,
            transition: {
                duration: 0.5,
            },
        },
        enter: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
            },
        },
    },
}

export default variants
