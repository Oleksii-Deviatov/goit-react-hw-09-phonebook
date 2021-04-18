import React, { useState } from 'react';
import { TextField, Button, Box, Container } from '@material-ui/core';
import { connect } from 'react-redux';
import * as operations from '../../redux/auth/auth-operations';

function RegisterPage({ onRegister }) {
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

    onRegister(userData);
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

// const mapStateToProps = state => ({});

const mapDispatchToProps = {
  onRegister: operations.register,
};

export default connect(null, mapDispatchToProps)(RegisterPage);
