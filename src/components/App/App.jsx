import ContactForm from '../ContactForm/ContactForm'
import Filtr from '../StatusFilter/StatusFilter';
import ContactList from '../ContactList/ContactList';

import styles from './App.module.css';


export const App = () => {

    return (
      <div className={styles.form}>
        <h1>Phonebook</h1>
        <ContactForm/>
        <h2>Contacts</h2>
        <Filtr/>
        <ContactList
        />
      </div>
    );
  }

 
