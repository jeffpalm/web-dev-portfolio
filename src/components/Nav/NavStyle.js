import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(theme => ({
    navContainer: {
        width: '100%',
        height: '100%',
    },
    logoContainer: {
        height: '100%',
        width: 60,
        '&:hover': {
            cursor: 'pointer',
        },
    },
    logoTitle: {
        width: '100%',
        padding: 0,
        margin: 0,
    },
    logoSubTitle: {
        width: '100%',
    },
    navLinksContainer: {
        height: '100%',
    },
    navBtn: {
        margin: theme.spacing(1),
    },
    activeNavBtn: {
        margin: theme.spacing(1),
        color: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
    },
    AppBar: {
        top: 0,
        left: 0,
        zIndex: theme.zIndex.appBar + 1,
        // backgroundColor: theme.palette.background.paper + '80',
        transition: 'height 100ms linear',
    },
    MobileLink: {
        color: theme.palette.text.primary,
        fontFamily: theme.typography.body1.fontFamily,
        padding: theme.spacing(2),
        '&:hover': {
            cursor: 'pointer',
        },
    },
    activeMobileLink: {
        color: theme.palette.primary.main,
    },
    mobileLinkContainer: {
        width: '100%',
    },
}))
