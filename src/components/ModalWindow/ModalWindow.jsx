import { Box, Modal, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import { connect } from 'react-redux';
import { getAllContacts } from '../../redux/contacts/contacts-selectors';
import { toast } from 'react-toastify';
import * as operations from '../../redux/contacts/contacts-operations';

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  },

  btn: {
    width: '100%',
    marginTop: 10,
  },
}));

const ModalWindow = ({
  contacts,
  id,
  name,
  number,
  changeContact,
  fetchContacts,
  onClose,
  ...modalProps
}) => {
  const classes = useStyles();
  const [inputName, setInputName] = useState(name);
  const [inputNumber, setInputNumber] = useState(number);

  function inputNameHandler({ target: { value } }) {
    setInputName(value);
  }

  function inputNumberHendler({ target: { value } }) {
    setInputNumber(value);
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

      case inputName === name:
        onClose();
        return;

      case checkExistContact():
        toast.error(`${inputName} already exist`);
        return;

      default:
        changeContact({ id: id, name: inputName, number: inputNumber });
        fetchContacts();
        toast.info(`saved`);
        onClose();
        break;
    }
  }

  return (
    <Modal {...modalProps} onClose={onClose}>
      <div className={classes.paper}>
        <form onSubmit={submitHendler} autoComplete="off">
          <Box display="flex" flexWrap="wrap" flexDirection="column">
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
          </Box>
          <Button
            className={classes.btn}
            variant="outlined"
            type="submit"
            color="primary"
          >
            save
          </Button>
        </form>
      </div>
    </Modal>
  );
};

const mapStateToProps = state => {
  return {
    contacts: getAllContacts(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeContact: data => dispatch(operations.changeContact(data)),
    fetchContacts: () => dispatch(operations.fetchContacts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalWindow);
