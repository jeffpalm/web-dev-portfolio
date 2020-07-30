import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import {
	ThemeProvider,
	unstable_createMuiStrictModeTheme
} from '@material-ui/core/styles'
import { HashRouter, BrowserRouter } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'

const theme = unstable_createMuiStrictModeTheme({
	spacing: 8,
	palette: {
		primary: {
			main: '#2FB579'
		},
		secondary: {
			main: '#3454D1'
		},
		type: 'dark'
	},
	typography: {
		fontFamily: '"Poppins", sans-serif',
		h1: {
			fontFamily: '"Fira Code", monospace'
		},
		h2: {
			fontFamily: '"Fira Code", monospace'
		},
		h3: {
			fontFamily: '"Fira Code", monospace'
		},
		h4: {
			fontFamily: '"Fira Code", monospace'
		},
		h5: {
			fontFamily: '"Fira Code", monospace'
		},
		h6: {
			fontFamily: '"Fira Code", monospace'
		},
		subtitle1: {
			fontFamily: '"Poppins", sans-serif'
		},
		subtitle2: {
			fontFamily: '"Poppins", sans-serif'
		},
		body1: {
			fontSize: 14,
			fontFamily: '"Poppins", sans-serif'
		},
		body2: {
			fontFamily: '"Poppins", sans-serif'
		}
	}
})

const Router =
	process.env.NODE_ENV === 'development' ? HashRouter : BrowserRouter

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<Router>
				<App />
			</Router>
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
