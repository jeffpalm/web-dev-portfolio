import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(theme => ({
    root: {
        transition: 'background-color 200ms linear',
        position: 'relative',
    },
    hueCycle: {
        position: 'fixed',
        top: `calc(100vh - 64px - ${theme.spacing(1)})`,
        right: theme.spacing(1),
        height: 64,
        width: 64,
        borderRadius: '50%',
        backgroundColor: theme.palette.background.paper + '80',
        zIndex: theme.zIndex.appBar + 1,
    },
}))
