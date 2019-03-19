import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import Search from './pages/Search/Search';
import Landing from './pages/Landing/Landing';
import Users from './pages/Users/Users';
import PrivateRoute from './routing/PrivateRoute/PrivateRoute';
import axios from 'axios';

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
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      isAuth: false,
    };
  }

  authorizeUser = () => {
    this.setState({ isAuth: true });
  };

  setUser = user => {
    this.setState({ user });
  };

  logOut = () => {
    this.setState({ isAuth: false, user: null });
    delete axios.defaults.headers.common['Authorization'];
  };

  render() {
    const { isAuth } = this.state;
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <CssBaseline>
            <Route exact path="/" component={Landing} />
            <Route
              path="/users"
              component={() => (
                <Users
                  setUser={this.setUser}
                  authorizeUser={this.authorizeUser}
                />
              )}
            />
            <PrivateRoute
              exact
              path="/search"
              logOut={this.logOut}
              isAuth={isAuth}
              component={Search}
            />
          </CssBaseline>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
