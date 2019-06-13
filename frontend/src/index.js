import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter as Router } from'react-router-dom';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './helpers/theme';
import './index.css'

ReactDOM.render(<Router>
                    <MuiThemeProvider theme={theme}>
                        <App /> 
                    </MuiThemeProvider>
                </Router>, document.getElementById('root'));