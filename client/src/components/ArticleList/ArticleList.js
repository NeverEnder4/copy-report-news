import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import ArticleCard from './ArticleCard/ArticleCard';
import PropTypes from 'prop-types';

const styles = () => ({});

const ArticleList = ({ articles, classes, user }) => (
  <Grid container>
    {articles.map((article, index) => (
      <Grid item key={index} xs={12} md={6} lg={3}>
        <ArticleCard user={user} article={article} />
      </Grid>
    ))}
  </Grid>
);

ArticleList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ArticleList);
