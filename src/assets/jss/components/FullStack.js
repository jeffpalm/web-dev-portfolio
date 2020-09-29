import {makeStyles} from "@material-ui/core/styles";

export default makeStyles(theme => ({
    top: {
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.dark,
        zIndex: theme.zIndex.tooltip,
        borderTopLeftRadius: theme.shape.borderRadius,
        borderTopRightRadius: theme.shape.borderRadius,
    },
    middle: {
        backgroundColor: theme.palette.secondary.main,
        borderColor: theme.palette.secondary.dark,
        zIndex: theme.zIndex.tooltip + 1,
    },
    bottom: {
        backgroundColor: theme.palette.warning.main,
        borderColor: theme.palette.warning.dark,
        zIndex: theme.zIndex.tooltip + 2,
        borderBottomLeftRadius: theme.shape.borderRadius,
        borderBottomRightRadius: theme.shape.borderRadius,
    },
    vertFullStackText: {
        position: 'absolute',
        transform: 'rotate(-90deg)',
        width: 600,
    },
}))