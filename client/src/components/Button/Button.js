import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    [theme.breakpoints.up('md')]: {
      fontSize: '1.2rem',
    },
  },
});

const ContainedButtons = ({ classes, text, color, variant, path, type }) => {
  let component = {};
  let to = {};

  if (path) {
    component = { component: Link };
    to = { to: path };
  }
  return (
    <Button
      classes={styles.label}
      {...component}
      variant={variant}
      color={color}
      className={classes.button}
      type={type}
      {...to}
    >
      {text.toUpperCase(0)}
    </Button>
  );
};

ContainedButtons.propTypes = {
  classes: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
};

export default withStyles(styles)(ContainedButtons);
