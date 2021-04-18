import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {
  getIsAuthenticated,
  getUsername,
} from '../../redux/auth/auth-selectors';
import * as operations from '../../redux/auth/auth-operations';
import styles from './styles.module.css';

function NavigationBar({ isAuthenticated, getUsername, onLogout }) {
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
              Welcome {getUsername} !
            </Typography>
          )}

          {isAuthenticated && (
            <Button onClick={onLogout} color="inherit">
              logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
  getUsername: getUsername(state),
});

const mapDispatchToProps = {
  onLogout: operations.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
