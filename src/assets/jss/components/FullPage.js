import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(theme => ({
    root: {
        height: '100vh',
        width: '100%',
        margin: 0,
        backgroundColor: theme.palette.background.default,
        paddingTop: theme.spacing(9),
        position: 'relative',
    },
}))