import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {
  getIsAuthenticated,
  getUsername,
} from '../../redux/auth/auth-selectors';
import { logout } from '../../redux/auth/auth-operations';
import styles from './styles.module.css';

function NavigationBar() {
  const isAuthenticated = useSelector(state => getIsAuthenticated(state));
  const userName = useSelector(state => getUsername(state));

  const dispatch = useDispatch();

  function logou(params) {}
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          {!isAuthenticated && (
            <Button
              component={Link}
              to="/"
              color="inherit"
              className={styles.barTitle}
            >
              Phonebook
            </Button>
          )}

          {!isAuthenticated && (
            <Button component={Link} to="/login" color="inherit">
              login
            </Button>
          )}

          {!isAuthenticated && (
            <Button component={Link} to="/register" color="inherit">
              Register
            </Button>
          )}

          {isAuthenticated && (
            <Typography variant="h6" className={styles.greetings}>
              Welcome {userName} !
            </Typography>
          )}

          {isAuthenticated && (
            <Button onClick={() => dispatch(logout())} color="inherit">
              logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}

export default NavigationBar;
