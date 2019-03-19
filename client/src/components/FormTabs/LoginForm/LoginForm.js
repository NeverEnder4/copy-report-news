import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '../../Button/Button';
import jwt_decode from 'jwt-decode';
import { withRouter } from 'react-router-dom';

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
    errors: {},
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const data = { email: this.state.email, password: this.state.password };

    axios
      .post('/login', data)
      .then(response => {
        this.props.authorizeUser();
        if (response.data.token)
          axios.defaults.headers.common['Authorization'] = response.data.token;
        else delete axios.defaults.headers.common['Authorization'];

        const decoded = jwt_decode(response.data.token);
        this.props.setUser(decoded.payload);
        this.props.history.push('/search', { user: decoded.payload });
      })
      .catch(err => {
        if (err.response) this.setState({ errors: err.response.data });
      });
  };

  render() {
    const { classes } = this.props;
    const { errors } = this.state;

    return (
      <form
        onSubmit={this.handleSubmit}
        className={classes.container}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="login-email-input"
          label="Email"
          className={classes.textField}
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="outlined"
          onChange={this.handleChange}
          helperText={errors.email}
          error={errors.email ? true : false}
        />
        <TextField
          id="login-password-input"
          label="Password"
          className={classes.textField}
          type="password"
          name="password"
          autoComplete="current-password"
          margin="normal"
          variant="outlined"
          onChange={this.handleChange}
          helperText={errors.password}
          error={errors.password ? true : false}
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

export default withStyles(styles)(withRouter(LoginForm));
