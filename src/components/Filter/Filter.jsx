import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/contacts/contacts-selectors';
import { changeFilter } from '../../redux/contacts/contacts-actions';
import { TextField, Box } from '@material-ui/core';

function Filter() {
  const value = useSelector(state => getFilter(state));
  const dispatch = useDispatch();

  function inputFilterHendler({ target: { value } }) {
    dispatch(changeFilter(value));
  }

  return (
    <form autoComplete="off">
      <Box display="flex" flexDirection="column">
        <TextField
          label="find contact by name"
          value={value}
          onChange={inputFilterHendler}
          margin="dense"
        />
      </Box>
    </form>
  );
}

export default Filter;
