import React, { Component } from 'react';
import Header from './components/Header/Header';
import ArticleCard from './components/ArticleCard/ArticleCard';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import deepPurple from '@material-ui/core/colors/deepPurple';
import red from '@material-ui/core/colors/red';
import grey from '@material-ui/core/colors/grey';
import axios from 'axios';

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
  constructor(props) {
    super(props);
    this.state = {
      articles: null,
      totalResults: 0,
    };
  }
  componentDidMount() {
    axios
      .get('/news')
      .then(response => {
        const { articles, totalResults } = response.data;
        this.setState({ articles, totalResults });
      })
      .catch(console.log);
  }
  render() {
    const { articles } = this.state;
    return (
      <div className="App">
        <CssBaseline>
          <MuiThemeProvider theme={theme}>
            <Header />
            {articles &&
              articles.map(article => (
                <ArticleCard
                  key={article.id}
                  name={article.name}
                  title={article.title}
                  author={article.author}
                  description={article.description}
                  src={article.urlToImage}
                  date={article.publishedAt}
                />
              ))}
          </MuiThemeProvider>
        </CssBaseline>
      </div>
    );
  }
}

export default App;
