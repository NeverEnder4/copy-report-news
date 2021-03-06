import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import LoginForm from './LoginForm/LoginForm';
import SignupForm from './SignupForm/SignupForm';
import { withSnackbar } from 'notistack';
import Button from '@material-ui/core/Button';

import './FormTabs.scss';

const TabContainer = ({ children, dir }) => {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
};

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    backgroundColor: 'rgba(255,255,255,0.8)',
    width: '100%',
  },
});

class FormTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.tabsIndex || 0,
    };
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  generateSnackbar = message => {
    this.props.enqueueSnackbar(message, {
      variant: 'success',
      autoHideDuration: 7000,
      action: <Button size="small">{'Dismiss'}</Button>,
    });
  };

  render() {
    const { classes, theme, setUser, authorizeUser } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered={true}
          >
            <Tab label="Signup" />
            <Tab label="Login" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}>
            <h1 className="form-tabs__headline">Sign up to start searching</h1>
            <SignupForm
              switchTab={this.handleChangeIndex}
              generateSnackbar={this.generateSnackbar}
            />
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <h1 className="form-tabs__headline">Already a member? Login</h1>

            <LoginForm setUser={setUser} authorizeUser={authorizeUser} />
          </TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

FormTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(withSnackbar(FormTabs));
