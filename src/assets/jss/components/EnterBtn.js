import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(theme => ({
    enterBtn: {
        height: 50,
        width: 150,
        background: 'none',
        fontFamily: theme.typography.fontFamily,
        fontSize: 24,
        borderRadius: theme.shape.borderRadius,
        '&:hover': {
            cursor: 'pointer',
        },
    },
}))
