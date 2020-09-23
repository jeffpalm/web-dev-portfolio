import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(theme => ({
    projectContainer: {
        height: 350,
        width: `calc((100vw - ${theme.spacing(8)}) / 3)`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(2),
        margin: theme.spacing(1),
        borderRadius: theme.shape.borderRadius
    },
    cardsContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
    },
    prevBtn: {
        height: 100,
        width: 100,
        position: 'absolute',
        left: theme.spacing(1),
        top: 'calc(50vh - 50px)'
    },
    nextBtn: {
        height: 100,
        width: 100,
        position: 'absolute',
        right: theme.spacing(1),
        top: 'calc(50vh - 50px)'
    },
    icon: {
        height: '100%',
        width: '100%'
    },
    projectImg: {
        width: 'auto',
        height: 100
    },
    projectLink: {
        '&:visited': {
            color: theme.palette.text.primary
        }
    }
}))