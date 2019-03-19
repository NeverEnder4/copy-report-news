import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, logOut, isAuth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAuth === true ? (
          <Component logOut={logOut} {...props} />
        ) : (
          <Redirect to="/users?form=login" />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  isAuth: PropTypes.bool.isRequired,
};

export default PrivateRoute;
