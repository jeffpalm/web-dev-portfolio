import { SCROLL_SPEED } from '../../../constants'

const variants = {
    card: {
        initial: {
            y: '50%',
            opacity: 0,
        },
        enter: {
            y: '0%',
            opacity: 1,
            transition: {
                delay: SCROLL_SPEED / 1000,
            },
        },
        exit: {
            y: '50%',
            opacity: 0,
        },
    },
}

export default variants
