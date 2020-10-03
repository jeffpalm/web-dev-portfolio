import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
    Container: {
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        height: '100vh',
    },
    Video: {
        filter: 'grayscale(100%)'
    },
    Content: {
        position: 'absolute',
        top: 0,
        color: '#f1f1f1',
        backgroundColor: 'rgba(23, 41, 89, 0.8)',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0
    },
    SubContent: {
        textAlign: 'center',
        padding: theme.spacing(1),
    },
}))

export default useStyles