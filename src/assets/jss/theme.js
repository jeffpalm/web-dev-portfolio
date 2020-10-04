import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

let theme = createMuiTheme({
    spacing: 8,
    palette: {
        primary: {
            main: '#02F2B2',
        },
        secondary: {
            main: '#9BB1FF',
        },
        background: {
            default: '#222',
            paper: '#59656F',
            alt: '#333',
        },
        type: 'dark',
    },
    typography: {
        fontFamily: '"Poppins", sans-serif',
        h1: {
            fontFamily: '"Fira Code", monospace',
        },
        h2: {
            fontFamily: '"Fira Code", monospace',
        },
        h3: {
            fontFamily: '"Fira Code", monospace',
        },
        h4: {
            fontFamily: '"Poppins", sans-serif',
        },
        h5: {
            fontFamily: '"Poppins", sans-serif',
        },
        h6: {
            fontFamily: '"Poppins", sans-serif',
        },
        subtitle1: {
            fontFamily: '"Poppins", sans-serif',
        },
        subtitle2: {
            fontFamily: '"Poppins", sans-serif',
        },
        body1: {
            fontSize: 14,
            fontFamily: '"Poppins", sans-serif',
        },
        body2: {
            fontFamily: '"Poppins", sans-serif',
        },
    },
})

theme = responsiveFontSizes(theme)

export default theme
