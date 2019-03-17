import React, { Component } from 'react';
import Header from './components/Header/Header';
import ArticleList from './components/ArticleList/ArticleList';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import deepPurple from '@material-ui/core/colors/deepPurple';
import red from '@material-ui/core/colors/red';
import grey from '@material-ui/core/colors/grey';
import { debounce } from 'lodash';
import axios from 'axios';

import './App.scss';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: deepPurple['A400'],
      contrastText: '#ffffff',
    },
    secondary: { main: grey[300] },
    error: { main: red['A400'] },
    background: {
      paper: '#fafafa',
      default: '#e0e0e0',
    },
    typography: {
      useNextVariants: true,
      h1: {
        color: '#aeaeae',
      },
      h2: {
        color: '#aeaeae',
      },
      body1: {
        color: '#aeaeae',
      },
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      totalResults: 0,
      searchInput: 'space',
      searchAll: true,
    };
  }
  componentDidMount() {
    this.queryNewsArticles();
  }

  handleSearchInputChange = event => {
    this.setState({ searchInput: event.target.value });
    const debouncedQueryNewsArticles = debounce(this.queryNewsArticles, 200);
    debouncedQueryNewsArticles();
  };

  queryNewsArticles = () => {
    const { searchInput, searchAll } = this.state;
    axios
      .get(`/news/${searchAll}/${searchInput}`)
      .then(response => {
        const { articles, totalResults } = response.data;
        this.setState({ articles, totalResults });
      })
      .catch(console.log);
  };

  handleSearchTypeChange = event => {
    const checked = event.target.checked;
    this.setState({ searchAll: checked }, () => this.queryNewsArticles());
  };
  render() {
    const { articles, searchAll, totalResults, searchInput } = this.state;
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <CssBaseline>
            <Header
              handleSearchInputChange={this.handleSearchInputChange}
              handleSearchTypeChange={this.handleSearchTypeChange}
              searchAll={searchAll}
              searchInput={searchInput}
            />

            <main className="search-results">
              <div className="search-results__text-content">
                <h1 className="search-results__headline">
                  You searched "{searchInput}"
                </h1>
                <span className="search-results__headline">
                  We found {totalResults} results!{' '}
                </span>
              </div>
              <div className="search-results__list">
                <ArticleList articles={articles} />
              </div>
            </main>
          </CssBaseline>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
