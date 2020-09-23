import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.default,
    },
    downArrow: {
        backgroundColor: theme.palette.primary.main,
        width: 100,
        height: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: '16px',
        left: 'calc(50vw - 50px)',
        '&:hover': {
            cursor: 'pointer'
        }
    },
    text: {
        width: '100%',
        padding: theme.spacing(0,2),
        [theme.breakpoints.only('xs')]: {
            padding: 0,
            fontSize: '1.1rem'
        }
    },
    inlineText: {
        [theme.breakpoints.only('xs')]: {
            fontSize: '1.1rem'
        }
    }
}))
