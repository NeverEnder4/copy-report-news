import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '../../Button/Button';

import './LoginForm.scss';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '3rem',
    },
  },
  textField: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '48%',
      margin: '0 5px',
    },
    [theme.breakpoints.up('md')]: {
      width: '31%',
      margin: '5px 0',
    },
  },
  dense: {
    marginTop: 16,
  },
});

class LoginForm extends React.Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="outlined-email-input"
          label="Email"
          className={classes.textField}
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          className={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
          variant="outlined"
        />
        <div className="login-form__button-container">
          <Button
            text="Login"
            color="secondary"
            variant="contained"
            type="submit"
          />
          <Button
            text="Cancel"
            color="secondary"
            variant="contained"
            path="/"
          />
        </div>
      </form>
    );
  }
}

LoginForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginForm);
