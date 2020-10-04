import React from 'react'
import ReactDOM from 'react-dom'
import App from 'views/App'
import { ThemeProvider } from '@material-ui/core/styles'
import { HashRouter, BrowserRouter } from 'react-router-dom'
import theme from './assets/jss/theme'
import './assets/css/reset.css'

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
