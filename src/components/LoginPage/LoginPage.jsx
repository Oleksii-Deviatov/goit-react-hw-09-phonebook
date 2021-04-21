import { useState } from 'react';
import { TextField, Button, Box } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/auth/auth-operations';
import { Container } from '@material-ui/core';

import { toast } from 'react-toastify';
import { getError } from '../../redux/auth/auth-selectors';

function LoginPage() {
  const dispatch = useDispatch();

  const loginError = useSelector(state => getError(state));

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

    dispatch(login(userData));

    toast.error(loginError);
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

export default LoginPage;
