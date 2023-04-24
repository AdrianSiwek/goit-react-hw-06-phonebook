import ContactForm from '../ContactForm/ContactForm'
import Filtr from '../StatusFilter/StatusFilter';
import ContactList from '../ContactList/ContactList';

import styles from './App.module.css';


export const App = () => {

const deleteContact = contactId => {
    setContacts(prevState => 
      prevState.filter(contact => contact.id !== contactId),
    );
  };

  const changeFiltr = (event) => {
    setFilter(event.currentTarget.value)
  }

  const getFiltersContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts
      .map(
        contact =>
          contact.name.toLowerCase().includes(normalizedFilter) && contact
      )
      .filter(contact => contact !== false);
  };



    return (
      <div className={styles.form}>
        <h1>Phonebook</h1>
        <ContactForm/>
        <h2>Contacts</h2>
        <Filtr value={filter} onChange={changeFiltr} />
        <ContactList
          contacts={getFiltersContacts()}
          onDeleteContact={deleteContact}
        />
      </div>
    );
  }

 
