import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.alt,
    },
    mainContainer: {
        maxWidth: 600,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    about: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2)
    },
    tagLine: {
        // fontStyle: 'italic',
        padding: theme.spacing(2),
    },
    aboutImg: {
        width: '100%',
        maxWidth: 400,
        height: 'auto',
    },
    myNameIs: {
        paddingTop: theme.spacing(2),
    },
}))
