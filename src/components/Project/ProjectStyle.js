import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(theme => ({
    projectContainer: {
        height: 'calc(100% - 48px)',
        width: `100%`,
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(2),
        // margin: theme.spacing(1),
        borderBottomLeftRadius: theme.shape.borderRadius,
        borderBottomRightRadius: theme.shape.borderRadius,
        backgroundColor: theme.palette.background.default,
    },
    cardsContainer: {
        borderRadius: theme.shape.borderRadius,
        width: '100%',
        height: '100%',
        // display: 'flex',
        backgroundColor: theme.palette.background.default,
    },
    prevBtn: {
        height: 100,
        width: 100,
        position: 'absolute',
        left: theme.spacing(1),
        top: 'calc(50vh - 50px)',
    },
    nextBtn: {
        height: 100,
        width: 100,
        position: 'absolute',
        right: theme.spacing(1),
        top: 'calc(50vh - 50px)',
    },
    icon: {
        height: '100%',
        width: '100%',
    },
    projectImg: {
        width: 100,
        height: 'auto',
    },
    fullSizeImg: {
        maxWidth: 'calc(100vw - 20px)',
        maxHeight: 'calc(100vh - 20px)',
        height: 'auto',
        width: 'auto',
        zIndex: theme.zIndex.tooltip + 1,
    },
    fullSizeImgContainer: {
        height: '100vh',
        width: '100vw',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: theme.zIndex.tooltip + 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.palette.background.paper + '99',
    },
    projectLink: {
        '&:visited': {
            color: theme.palette.text.primary,
        },
    },
    tabBar: {
        borderRadius: theme.shape.borderRadius,
    },
    closeBtn: {
        width: 100,
        position: 'fixed',
        zIndex: theme.zIndex.tooltip + 2,
        bottom: 10,
        left: 'calc(100vw/2 - 50px)',
    },
    imgGrid: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        // backgroundColor: theme.palette.background.paper,
    },
    imgTile: {
        '&:hover': {
            cursor: 'zoom-in',
        },

    },
    projectDescription: {
        marginTop: theme.spacing(1),
    },
    imgThumb: {
        width: 140,
        height: 'auto'
    }
}))
