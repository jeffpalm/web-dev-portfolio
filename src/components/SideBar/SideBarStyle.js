import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(theme => ({
    root: {
        position: 'fixed',
        width: 60,
        height: 240,
        left: 0,
        top: 300,
        zIndex: theme.zIndex.modal,
        backgroundColor: theme.palette.background.paper + '80',
        borderTopRightRadius: theme.shape.borderRadius,
        borderBottomRightRadius: theme.shape.borderRadius,
        display: 'flex',
        flexDirection: 'column',
    },
}))
