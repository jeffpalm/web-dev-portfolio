import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.primary.dark,
        // backgroundColor: '#000',
    },
    text: {
        width: '100%',
        padding: theme.spacing(0, 2),
        [theme.breakpoints.only('xs')]: {
            padding: 0,
            fontSize: '1.1rem',
        },
    },
    inlineText: {
        [theme.breakpoints.only('xs')]: {
            fontSize: '1.1rem',
        },
    },
    palmyContainer: {
        height: '100%',
        width: 400,
        padding: theme.spacing(1),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
}))
