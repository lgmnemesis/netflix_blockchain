import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import * as ROUTES from '../constants/router';

export function IsUserRedirect({user, loggedInPath, children, ...rest}) {
  return (
    <Route
      {...rest}
      render={() => {
        if (!user) {
          return children;
        }

        if (user) {
          return (
            <Redirect
              to={{
                pathname: loggedInPath
              }}
            />
          )
        }

        return null;
      }}
    />
  )
}

export function ProtectedRoute({user, children, redirect, ...rest}) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (user) {
          return children;
        }

        if (!user) {
          return (
            <Redirect
              to={{
                pathname: redirect || ROUTES.HOME,
                state: {from: location }
              }}
            />
          )
        }
        return null;
      }}
    />
  )
}