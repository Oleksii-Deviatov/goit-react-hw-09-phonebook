import React, { useEffect, useState } from 'react';
import { TextField, Button, Box } from '@material-ui/core';
import { connect } from 'react-redux';
import * as operations from '../../redux/auth/auth-operations';
import { Container } from '@material-ui/core';

import { getError } from '../../redux/auth/auth-selectors';
import { toast } from 'react-toastify';

function LoginPage({ onLogin, error }) {
  const [inputEmain, setInputEmain] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  function inputNumberHendler({ target: { value } }) {
    setInputEmain(value);
  }

  function inputPasswordHendler({ target: { value } }) {
    setInputPassword(value);
  }

  function submitHendler(e) {
    e.preventDefault();

    const userData = {
      email: inputEmain,
      password: inputPassword,
    };

    // if (getError) {
    //   console.log('wrong');
    //   toast.error('Wrong email or password');
    //   return;
    // }

    onLogin(userData);
    if (!getError) {
      toast.info('Logged in');
    }
  }

  return (
    <Container maxWidth="xs">
      <form onSubmit={submitHendler} autoComplete="off">
        <Box display="flex" flexDirection="column">
          <TextField
            label="E-Mail"
            value={inputEmain}
            onChange={inputNumberHendler}
            margin="dense"
            required
          />
          <TextField
            label="PassWord"
            value={inputPassword}
            onChange={inputPasswordHendler}
            type="password"
            margin="dense"
            required
          />
          <Button variant="outlined" type="submit" color="primary">
            Login
          </Button>
        </Box>
      </form>
    </Container>
  );
}

const mapStateToProps = state => ({
  error: getError(state),
});

const mapDispatchToProps = {
  onLogin: operations.login,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
