import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import pink from '@material-ui/core/colors/pink';

const styles = {
  pinkAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: pink['A400'],
    height: 50,
    width: 50,
  },
};

const UserAvatar = ({ classes, avatar }) => {
  return avatar ? (
    <Avatar src={avatar} className={classes.pinkAvatar}>
      TP
    </Avatar>
  ) : (
    <Avatar className={classes.pinkAvatar}>TP</Avatar>
  );
};

UserAvatar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserAvatar);
