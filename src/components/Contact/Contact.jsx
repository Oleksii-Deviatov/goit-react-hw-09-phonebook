import {
  Card,
  CardContent,
  IconButton,
  Box,
  CardActionArea,
} from '@material-ui/core';
import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone';
import EditIcon from '@material-ui/icons/Edit';
import { connect } from 'react-redux';
import styles from './styles.module.css';
import ListItem from '@material-ui/core/ListItem';
import * as operations from '../../redux/contacts/contacts-operations';
import { useState } from 'react';
import ModalWindow from '../ModalWindow';
import { toast } from 'react-toastify';

function Conact({ id, name, number, delContact }) {
  const [open, setOpen] = useState(false);

  const handleOpen = e => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleDelet(id) {
    delContact(id);
    toast.info(`${name} deleted`);
  }

  return (
    <ListItem disableGutters={true}>
      <Card variant="outlined" className={styles.card}>
        <CardActionArea>
          <CardContent>
            <Box display="flex" justifyContent="space-between">
              <p>
                {name}: {number}
              </p>
              <div>
                <IconButton
                  color="primary"
                  component="span"
                  onClick={handleOpen}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  color="primary"
                  component="span"
                  onClick={() => handleDelet(id)}
                >
                  <DeleteForeverTwoToneIcon />
                </IconButton>
              </div>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
      {open && (
        <ModalWindow
          open={open}
          onClose={handleClose}
          name={name}
          number={number}
          id={id}
        />
      )}
    </ListItem>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    delContact: id => dispatch(operations.delContact(id)),
  };
};

export default connect(null, mapDispatchToProps)(Conact);
