import { SCROLL_SPEED } from '../../../constants'

const variants = {
    text: {
        initial: {
            y: '50%',
            opacity: 0,
        },
        enter: i => ({
            y: '0%',
            opacity: 1,
            transition: {
                delay: i * 0.1 + (SCROLL_SPEED / 1000),
            },
        }),
        exit: {
            y: '50%',
            opacity: 0,
        },
    },
}

export default variants
