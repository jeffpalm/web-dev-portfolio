import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(theme => ({
    header: {
        width: '50%',
        minWidth: 300,
    },
    hotline: {
        position: 'fixed',
        top: 0,
        left: 0,
    },
    hotlineHook: {
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: theme.zIndex.modal + 5,
    },
    successScreen: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        backgroundColor: theme.palette.success.main,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
}))
