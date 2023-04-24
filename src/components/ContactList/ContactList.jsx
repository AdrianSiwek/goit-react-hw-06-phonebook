import { useSelector } from "react-redux";
import { Contact } from "../Contact/Contact";
import { getStatusFilter, getContacts } from "../../redux/selectors";

import PropTypes from "prop-types";

import styles from './ContactList.module.css';


const ContactList = ({ contact }) => {
  const contacts = useSelector(getContacts);
    const statusFilter = useSelector(getStatusFilter);

  const getFiltersContacts = () => {
    const normalizedFilter = statusFilter.toLowerCase();

    return contacts
      .map(
        contact =>
          contact.name.toLowerCase().includes(normalizedFilter) && contact
      )
      .filter(contact => contact !== false);
  };
  
  
  return (
    <ul className={styles.list}>
        <li className={styles.contact} key={contact.id}>
          <p>{contact.name}:</p>
          <p>{contact.number}</p>
        </li>
    </ul>
  )
}

ContactList.propTypes = {
  contact: PropTypes.arrayOf
    (PropTypes.exact({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    })),
};
 
export default ContactList;