import { makeStyles } from '@material-ui/core/styles'

const useStyles = (colorOne, colorTwo) => {
    const output = makeStyles(theme => ({
        enterBtn: {
            height: 50,
            width: 150,
            background: 'none',
            fontFamily: theme.typography.fontFamily,
            fontSize: 24,
            borderRadius: theme.shape.borderRadius,
            marginRight: 25,
            color: colorTwo,
            border: `1px solid ${colorOne}`,
            marginTop: 20,
            '&:hover': {
                cursor: 'pointer',
                color: theme.palette.primary.main,
                background: `linear-gradient(90deg, ${colorOne},${colorTwo})`,
                border: 'none',
            },
            '&:focus': {
                outline: 'none',
            },
        },
    }))
    return output
}
export default useStyles
