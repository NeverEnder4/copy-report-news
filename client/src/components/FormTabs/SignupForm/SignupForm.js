import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '../../Button/Button';

import './SignupForm.scss';

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
      width: '31%',
      margin: '5px 5px',
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

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password1: '',
      password2: '',
      errors: {},
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password1: this.state.password1,
      password2: this.state.password2,
    };

    axios
      .post('/register', newUser)
      .then(response => {
        const user = response.data;
        // clear fields
        this.setState({ name: '', email: '', password1: '', password2: '' });
        // switch to login tab
        this.props.switchTab(1);
        this.props.generateSnackbar(`${user.email} registered`);
      })
      .catch(errors => {
        if (errors.response) this.setState({ errors: errors.response.data });
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
          id="signup-last-name-input"
          label="Name"
          className={classes.textField}
          type="text"
          name="name"
          autoComplete="name"
          margin="normal"
          variant="outlined"
          onChange={this.handleChange}
          helperText={errors.name}
          error={errors.name ? true : false}
          value={this.state.name}
        />

        <TextField
          id="signup-email-input"
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
          value={this.state.email}
        />
        <TextField
          id="signup-password1-input"
          label="Password"
          className={classes.textField}
          type="password"
          name="password1"
          autoComplete="current-password"
          margin="normal"
          variant="outlined"
          onChange={this.handleChange}
          helperText={errors.password}
          error={errors.password ? true : false}
          value={this.state.password1}
        />
        <TextField
          id="signup-password2-input"
          label="Confirm Password"
          className={classes.textField}
          type="password"
          name="password2"
          autoComplete="current-password"
          margin="normal"
          variant="outlined"
          onChange={this.handleChange}
          helperText={errors.passwordMatch}
          error={errors.passwordMatch ? true : false}
          value={this.state.password2}
        />
        <div className="signup-form__button-container">
          <Button
            text="Register"
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

SignupForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouter(SignupForm));
