import bookImg from './book.png';
import styles from './styles.module.css';
import { Typography, Container } from '@material-ui/core';

function StartPage() {
  return (
    <Container className={styles.container} maxWidth="xs">
      <Typography align="center" variant="h6">
        Please Login or Register
      </Typography>

      <img className={styles.image} src={bookImg} alt="book immage" />
    </Container>
  );
}

export default StartPage;
