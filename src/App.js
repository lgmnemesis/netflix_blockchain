import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import * as ROUTES from './constants/router';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { Home, Browse, Signin, Signup } from './pages';
import { useAuthListener } from './hooks';


function App() {
  const { user } = useAuthListener();

  return (
    <Router>
      <IsUserRedirect 
        user={user}
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.HOME}
        exact>
        <Home/>
      </IsUserRedirect>
      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.SIGN_IN}
        exact>
        <Signin/>
      </IsUserRedirect>
      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.SIGN_UP}
        exact>
        <Signup/>
      </IsUserRedirect>
      <ProtectedRoute
        user={user}
        path={ROUTES.BROWSE}
        redirect={ROUTES.SIGN_UP}
        exact>
        <Browse/>
      </ProtectedRoute>
    </Router>
  );
}

export default App;
