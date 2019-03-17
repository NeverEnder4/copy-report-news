import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import pink from '@material-ui/core/colors/pink';

const styles = {
  avatar: {
    margin: 10,
  },
  pinkAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: pink['A400'],
  },
};

function LetterAvatars(props) {
  const { classes } = props;
  return <Avatar className={classes.pinkAvatar}>TP</Avatar>;
}

LetterAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LetterAvatars);
