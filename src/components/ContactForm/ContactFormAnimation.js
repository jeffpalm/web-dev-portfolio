const variants = {
    textField: {
        initial: {
            clipPath: 'polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)',
            y: -16,
            opacity: 0,
        },
        enter: {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            y: 0,
            opacity: 1,
            transition: {
                // delay: 0.2,
                duration: 0.5,
                ease: 'easeIn',
            },
        },
    },
    contactForm: {
        initial: {
            scale: 0.5,
            opacity: 0,
            transition: {
                duration: 0.5,
            },
        },
        enter: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.5,
            },
        },
    },
    field: {
        initial: {
            opacity: 1,
            transition: {
                delay: 0.5,
                duration: 0.5,
            },
        },
        enter: {
            opacity: 1,
            transition: {
                delay: 0,
                duration: 0.1,
            },
        },
    },
    submitBtn: {
        initial: {
            y: -50,
            opacity: 0,
        },
        enter: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                delay: 0.6,
            },
        },
    },
}

export default variants
