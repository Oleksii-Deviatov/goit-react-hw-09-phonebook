import {
  Card,
  CardContent,
  IconButton,
  Box,
  CardActionArea,
} from '@material-ui/core';
import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone';
import EditIcon from '@material-ui/icons/Edit';
import ListItem from '@material-ui/core/ListItem';
import { delContact } from '../../redux/contacts/contacts-operations';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import EditContact from '../EditContact';
import { toast } from 'react-toastify';
import styles from './styles.module.css';

function Contact({ id, name, number }) {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const handleOpen = e => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleDelet(id) {
    dispatch(delContact(id));
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
        <EditContact
          open={open}
          onClose={handleClose}
          name={name}
          number={number}
          contactId={id}
        />
      )}
    </ListItem>
  );
}

export default Contact;
