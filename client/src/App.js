import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Search from './pages/Search/Search';
import Landing from './pages/Landing/Landing';
import Users from './pages/Users/Users';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgba(9, 30, 61, 1)',
      light: 'rgba(95, 123, 190, 1)',
      contrastText: '#ffffff',
    },
    secondary: { main: red['A400'] },
    error: { main: red['A400'] },
    background: {
      paper: '#fafafa',
      default: '#e0e0e0',
    },
    typography: {
      useNextVariants: true,
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <CssBaseline>
            <Router>
              <Route exact path="/" component={Landing} />
              <Route exact path="/search" component={Search} />
              <Route exact path="/users" component={Users} />
            </Router>
          </CssBaseline>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
