import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(theme => ({
    root: {
        // backgroundColor: theme.palette.secondary.dark,
    },
    mainContainer: {
        maxWidth: 600,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    about: {
        marginTop: theme.spacing(2),
    },
    tagLine: {
        fontStyle: 'italic',
    },
    aboutImg: {
        width: '100%',
        maxWidth: 400,
        height: 'auto',
    },
}))
