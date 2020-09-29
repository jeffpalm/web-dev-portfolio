import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(theme => ({
    envelopeFront: {
        position: 'absolute',
        zIndex: theme.zIndex.modal + 1,
        left: theme.spacing(1) * -1,
    },
    envelopeBack: {
        position: 'absolute',
        left: theme.spacing(1) * -1,
    },
    palmTree: {
        position: 'absolute',
        zIndex: theme.zIndex.modal + 1,
    },
}))
