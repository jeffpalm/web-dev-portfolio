import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.secondary.main
    },
    column: {
        height: '100%',
        width: '50%'
    },
    columnContainer: {
        width: '100%',
        height: '100%'
    }
}))