const variants = {
    initial: {
        opacity: 0,
        scale: 1,
        y: '0%',
    },
    enter: {
        scale: 1,
        opacity: 1,
        y: 0,
        transition: {
            when: 'beforeChildren',
            // delay: 0.5,
            duration: 1,
            staggerChildren: 0.1,
            ease: 'linear',
        },
    },
    exit: {
        scale: 1,
        opacity: 0,
        y: '0%',
        transition: {
            duration: 0.5,
            staggerChildren: 0.1,
            ease: 'linear',
        },
    },
}

export default variants
