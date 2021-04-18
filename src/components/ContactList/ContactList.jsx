import Contact from '../Contact';
import { List } from '@material-ui/core';
import { connect } from 'react-redux';
import { getVisibleContacts } from '../../redux/contacts/contacts-selectors';
import { useEffect } from 'react';
import * as operations from '../../redux/contacts/contacts-operations';

function ContactList({ contacts, fetchContacts }) {
  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <List>
      {contacts.map(({ id, name, number }) => {
        return <Contact key={id} id={id} name={name} number={number} />;
      })}
    </List>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    fetchContacts: () => dispatch(operations.fetchContacts()),
  };
};

const mapStateToProps = state => ({
  contacts: getVisibleContacts(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
