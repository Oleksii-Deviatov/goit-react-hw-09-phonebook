import { connect } from 'react-redux';
import { TextField, Box } from '@material-ui/core';
import { getFilter } from '../../redux/contacts/contacts-selectors';
import * as actions from '../../redux/contacts/contacts-actions';

function Filter({ onChange, value }) {
  function inputFilterHendler({ target: { value } }) {
    onChange(value);
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

const mapStateToProps = state => {
  return {
    value: getFilter(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChange: value => dispatch(actions.changeFilter(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
