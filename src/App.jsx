import { Container } from '@material-ui/core';
import { connect } from 'react-redux';
import * as authOperations from './redux/auth/auth-operations';
import { useEffect } from 'react';
import { Redirect, Switch } from 'react-router-dom';
import { React, lazy, Suspense } from 'react';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import Spinner from './components/Spinner';

import { getStatusLoadingUser } from './redux/auth/auth-selectors';

const NavBar = lazy(() =>
  import('./components/NavigationBar' /* webpackChunkName: "NavBar" */),
);

const StartPage = lazy(() =>
  import('./components/StartPage' /* webpackChunkName: "StartPage" */),
);

const HomePage = lazy(() =>
  import('./components/Home' /* webpackChunkName: "HomePage" */),
);

const RegisterPage = lazy(() =>
  import('./components/RegisterPage' /* webpackChunkName: "RegisterPage" */),
);

const LoginPage = lazy(() =>
  import('./components/LoginPage' /* webpackChunkName: "LoginPage" */),
);

function App({ onGetCurrentUser, isLoadingUser }) {
  useEffect(() => {
    onGetCurrentUser();
  }, []);

  return (
    <>
      <Container maxWidth="xs">
        <Suspense fallback={<Spinner />}>
          {isLoadingUser || (
            <>
              <NavBar />
              <Switch>
                <PublicRoute
                  exact
                  path="/"
                  restricted
                  redirectTo="/home"
                  component={StartPage}
                />

                <PublicRoute
                  path="/register"
                  restricted
                  redirectTo="/home"
                  component={RegisterPage}
                />

                <PublicRoute
                  path="/login"
                  restricted
                  redirectTo="/home"
                  component={LoginPage}
                />

                <PrivateRoute
                  path="/home"
                  redirectTo="/login"
                  component={HomePage}
                />

                <Redirect to="/" />
              </Switch>
            </>
          )}
        </Suspense>
      </Container>
    </>
  );
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

const mapStateToProps = state => ({
  isLoadingUser: getStatusLoadingUser(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
