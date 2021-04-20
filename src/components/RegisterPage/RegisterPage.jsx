import React, { useState } from 'react';
import { TextField, Button, Box, Container } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/auth-operations';

function RegisterPage() {
  const dispatch = useDispatch();

  const [inputName, setInputName] = useState('');
  const [inputEmain, setInputEmain] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  function inputNameHandler({ target: { value } }) {
    setInputName(value);
  }

  function inputNumberHendler({ target: { value } }) {
    setInputEmain(value);
  }

  function inputPasswordHendler({ target: { value } }) {
    setInputPassword(value);
  }

  function submitHendler(e) {
    e.preventDefault();

    const userData = {
      name: inputName,
      email: inputEmain,
      password: inputPassword,
    };

    dispatch(register(userData));
  }

  return (
    <Container maxWidth="xs">
      <form onSubmit={submitHendler} autoComplete="off">
        <Box display="flex" flexDirection="column">
          <TextField
            label="Name"
            value={inputName}
            onChange={inputNameHandler}
            margin="dense"
            required
          />
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
            margin="dense"
            type="password"
            required
          />
          <Button variant="outlined" type="submit" color="primary">
            Register
          </Button>
        </Box>
      </form>
    </Container>
  );
}

export default RegisterPage;
