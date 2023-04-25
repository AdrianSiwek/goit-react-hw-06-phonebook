import { useDispatch, useSelector } from "react-redux";
import { getContacts, getFilterValue} from "redux/selectors";
import { deleteContact } from "redux/contactsSlice";

import styles from './ContactList.module.css';



const ContactList = () => {
    const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
    const statusFilter = useSelector(getFilterValue);

  const getFiltersContacts = contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(statusFilter.toLowerCase()) ||
      contact.number.replace(/-|\s/g, '').includes(statusFilter.replace(/-|\s/g, ''))
    );
    
     const handleDeleteContact = data => {
        dispatch(deleteContact(data));
    };
  
  
  return (
    <ul className={styles.list}>
          {getFiltersContacts.map(({ id, name, number }) => (
        <li className={styles.contact} 
          key={id}>
        <p>{name}:</p>
        <p>{number}</p>
         <button
            className={styles.btn}
            type="button"
            onClick={() => handleDeleteContact(id)}
          >
            <span>Delete</span>
          </button>        
        </li>
      ))}
    </ul>
  )
}


export default ContactList;