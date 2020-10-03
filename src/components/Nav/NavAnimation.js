const variants = {
    linkBtn: {
        initial: () => ({
            y: '-50%',
            opacity: 0,
            scale: 0.9,
        }),
        enter: custom => ({
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                delay: 0.5 + custom * 0.1,
            },
        }),
    },
    logo: {
        initial: {
            x: '100%',
            opacity: 0,
        },
        enter: custom => ({
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                delay: 0.5 + custom * 0.2,
            },
        }),
    },
    appBar: wS => ({
        initial: {
            originX: 0,
            originY: 64,
            scaleX: 0,
        },
        enter: {
            originX: 0,
            originY: 0,
            scaleX: 1,
            rotate: 0,
            transition: {
                duration: 0.5,
            },
        },
        mobile: {
            rotate: [0, 0, 0, 90, 90],
            x: [0, 0, 0, 0, 64],
            y: [0, -64, -64, 0, 0],
            opacity: [1, 1, 0, 0, 1],
            width: [wS.width, wS.width, wS.height],
            transition: {
                duration: 1,
            },
        },
    }),
    mobileLink: {
        initial: {
            x: '-100%',
            opacity: 0,
            scale: 0,
        },
        enter: custom => ({
            x: 0,
            opacity: 1,
            scale: 1,
            transition: {
                delay: custom * 0.1,
            },
        }),
    },
}

export default variants
