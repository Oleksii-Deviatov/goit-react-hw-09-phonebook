import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';
import Spinner from '../Spinner';
import { Container, Typography } from '@material-ui/core';
import { ToastContainer } from 'react-toastify';
import { connect } from 'react-redux';
import { getLoading } from '../../redux/contacts/contacts-selectors';

function Home({ isLoading }) {
  return (
    <>
      <Container maxWidth="xs">
        {isLoading && <Spinner />}

        <Typography align="center" variant="h2">
          Phonebook
        </Typography>
        <ContactForm />

        <Typography align="center" variant="h4">
          Contacts
        </Typography>
        <Filter />

        <ContactList />
      </Container>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

const mapStateToProps = state => {
  return {
    isLoading: getLoading(state),
  };
};

export default connect(mapStateToProps)(Home);
