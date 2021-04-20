import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';
import Spinner from '../Spinner';
import { useSelector } from 'react-redux';
import { getLoading } from '../../redux/contacts/contacts-selectors';
import { Container, Typography } from '@material-ui/core';

function Home() {
  const isLoading = useSelector(state => getLoading(state));

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
    </>
  );
}

export default Home;
