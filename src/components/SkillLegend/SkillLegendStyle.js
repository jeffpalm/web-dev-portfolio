import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(theme => ({
    root: {
        width: 300,
        borderColor: theme.palette.background.paper,
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: theme.shape.borderRadius,
        padding: theme.spacing(1),
    },
    starContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 2,
        // borderBottom: '1px solid grey',
    },
}))
