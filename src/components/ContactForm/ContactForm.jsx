import { useState } from 'react';
import { TextField, Button, Box } from '@material-ui/core';
import { getAllContacts } from '../../redux/contacts/contacts-selectors';
import { addContact } from '../../redux/contacts/contacts-operations';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';

function ContactForm() {
  const contacts = useSelector(state => getAllContacts(state));
  const dispatch = useDispatch();

  const [inputName, setInputName] = useState('');
  const [inputNumber, setInputNumber] = useState('');

  function inputNameHandler({ target: { value } }) {
    setInputName(value);
  }

  function inputNumberHendler({ target: { value } }) {
    setInputNumber(value);
  }

  function clrForm() {
    setInputName('');
    setInputNumber('');
  }

  function submitHendler(e) {
    e.preventDefault();

    function checkExistContact() {
      return !!contacts.find(
        ({ name }) => name.toLowerCase() === inputName.toLowerCase(),
      );
    }

    switch (true) {
      case inputName === '':
        toast.error('Name can not be empty');
        return;

      case inputNumber === '':
        toast.error('Number can not be empty');
        return;

      case checkExistContact():
        toast.error(`${inputName} already exist`);
        return;

      default:
        const data = { name: inputName, number: inputNumber };
        dispatch(addContact(data));
        toast.info(`${inputName} saved`);
        clrForm();
        break;
    }
  }

  return (
    <form onSubmit={submitHendler} autoComplete="off">
      <Box display="flex" flexDirection="column">
        <TextField
          label="Name"
          value={inputName}
          onChange={inputNameHandler}
          margin="dense"
        />
        <TextField
          label="Number"
          value={inputNumber}
          onChange={inputNumberHendler}
          margin="dense"
        />
        <Button variant="outlined" type="submit" color="primary">
          add contact
        </Button>
      </Box>
    </form>
  );
}

export default ContactForm;
