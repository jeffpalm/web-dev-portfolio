import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
        width: '100%',
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'center',
        zIndex: theme.zIndex.modal,
        '& .MuiOutlinedInput-inputMultiline': {
            padding: theme.spacing(2) - 2,
        },
    },
    inputField: {
        width: `calc(100% - ${theme.spacing(2)}px)`,
        // backgroundColor: theme.palette.background.default,
        zIndex: theme.zIndex.modal,
        transition: theme.transitions.create('border-color'),
        padding: theme.spacing(1, 0),
    },
    inputLabel: {
        zIndex: theme.zIndex.modal + 1,
    },
    errorText: {
        textAlign: 'center',
    },
    notEmpty: {
        '& input:valid + fieldset': {
            borderColor: theme.palette.success.main,
        },
        '& input:valid:focus + fieldset': {
            borderColor: theme.palette.success.main,
        },
        '& textarea:valid + fieldset': {
            borderColor: theme.palette.success.main,
        },
        '& textarea:valid:focus + fieldset': {
            borderColor: theme.palette.success.main,
        },
        '& .MuiInputLabel-root': {
            color: theme.palette.success.main,
        },
    },
}))
