import { Container } from '@material-ui/core';
import { getCurrentUser } from './redux/auth/auth-operations';
import { useEffect } from 'react';
import { Redirect, Switch } from 'react-router-dom';
import { React, lazy, Suspense } from 'react';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import Spinner from './components/Spinner';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getStatusLoadingUser } from './redux/auth/auth-selectors';
import { useSelector, useDispatch } from 'react-redux';

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

function App() {
  const isLoadingUser = useSelector(state => getStatusLoadingUser(state));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, []);

  return (
    <>
      <Container maxWidth="xs">
        <Suspense fallback={<Spinner />}>
          <NavBar />
          {isLoadingUser || (
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
          )}
        </Suspense>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          draggable
          pauseOnHover
        />
      </Container>
    </>
  );
}

export default App;
