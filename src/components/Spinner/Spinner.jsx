import Loader from 'react-loader-spinner';
import styles from './styles.module.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

function Spinner() {
  return (
    <Loader
      className={styles.spinner}
      type="Puff"
      color="#00BFFF"
      height={100}
      width={100}
    />
  );
}

export default Spinner;
