import { useState } from 'react';
import { TextField, Button, Box } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/auth/auth-operations';
import { Container } from '@material-ui/core';
import { toast } from 'react-toastify';
import { getError } from '../../redux/auth/auth-selectors';
import { useEffect } from 'react';
import { clearAuthError } from '../../redux/auth/auth-actions';

function LoginPage() {
  const dispatch = useDispatch();
  const loginError = useSelector(state => getError(state));

  const [inputEmail, setInputEmain] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  useEffect(() => {
    loginError && toast.error('incorrect email or password');
    return () => {
      dispatch(clearAuthError());
    };
  }, [loginError]);

  function inputNumberHendler({ target: { value } }) {
    setInputEmain(value);
  }

  function inputPasswordHendler({ target: { value } }) {
    setInputPassword(value);
  }

  function submitHendler(e) {
    e.preventDefault();

    const userData = {
      email: inputEmail,
      password: inputPassword,
    };

    dispatch(login(userData));
  }

  return (
    <Container maxWidth="xs">
      <form onSubmit={submitHendler} autoComplete="off">
        <Box display="flex" flexDirection="column">
          <TextField
            label="E-Mail"
            value={inputEmail}
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
