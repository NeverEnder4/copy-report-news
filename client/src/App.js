import React, { Component } from 'react';
import Header from './components/Header/Header';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import deepPurple from '@material-ui/core/colors/deepPurple';
import red from '@material-ui/core/colors/red';
import grey from '@material-ui/core/colors/grey';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: deepPurple['A400'],
    },
    secondary: { main: grey[300] },
    error: { main: red['A400'] },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

class App extends Component {
  componentDidMount() {}
  render() {
    return (
      <div className="App">
        <CssBaseline>
          <MuiThemeProvider theme={theme}>
            <Header />
          </MuiThemeProvider>
        </CssBaseline>
      </div>
    );
  }
}

export default App;
