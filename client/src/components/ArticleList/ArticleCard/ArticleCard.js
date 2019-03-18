import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import noImage from './no-image.png';

const styles = {
  card: {
    width: '98%',
    margin: '5px auto',
    animation: 'fade-in 500ms cubic-bezier(0.19, 1, 0.22, 1) forwards',
  },
  media: {
    objectFit: 'cover',
  },

  '@keyframes fade-in': {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  },
};

const ArticleCard = ({ classes, article }) => {
  if (!article.urlToImage) article.urlToImage = noImage;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={article.name}
          className={classes.media}
          height="140"
          image={article.urlToImage}
          title={article.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {article.title}
          </Typography>
          <Typography component="p">{article.description}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Save
        </Button>
        <Button size="small" color="primary">
          Read More
        </Button>
      </CardActions>
    </Card>
  );
};

ArticleCard.propTypes = {
  classes: PropTypes.object.isRequired,
  article: PropTypes.object.isRequired,
};

export default withStyles(styles)(ArticleCard);
