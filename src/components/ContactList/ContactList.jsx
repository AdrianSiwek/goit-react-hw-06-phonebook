import { useSelector } from "react-redux";
import { Contact } from "../Contact/Contact";
import { getStatusFilter, getContacts } from "../../redux/selectors";

// import PropTypes from "prop-types";

import styles from './ContactList.module.css';


// const ContactList = ({ contact }) => {
//   const contacts = useSelector(getContacts);
//     const statusFilter = useSelector(getStatusFilter);

//   const getFiltersContacts = () => {
//     const normalizedFilter = statusFilter.toLowerCase();

//     return contacts
//       .map(
//         contact =>
//           contact.name.toLowerCase().includes(normalizedFilter) && contact
//       )
//       .filter(contact => contact !== false);
//   };
  
  
//   return (
//     <ul className={styles.list}>
//         <li className={styles.contact} key={contact.id}>
//           <p>{contact.name}:</p>
//           <p>{contact.number}</p>
//         </li>
//     </ul>
//   )
// }

// ContactList.propTypes = {
//   contact: PropTypes.arrayOf
//     (PropTypes.exact({
//     name: PropTypes.string.isRequired,
//     number: PropTypes.string.isRequired,
//     id: PropTypes.string.isRequired,
//     })),
// };
 



const ContactList = () => {
    const contacts = useSelector(getContacts);
    const statusFilter = useSelector(getStatusFilter);

    const visibileContacts = contacts.filter((contact) => {
        return contact.name.toLowerCase().includes(statusFilter);
    });
    return (
        <>
            {contacts.length <= visibileContacts.length ? (
                <p>Number of contacts: {contacts.length}</p>
            ) : (
                <p>Contacts found: {visibileContacts.length}</p>
            )}
            {contacts.length === 0 ? (
                <p>No contacts yet 🙁</p>
            ) : contacts !== "" && visibileContacts.length === 0 ? (
                <>No contacts found 😞 </>
            ) : (
                <ul className={styles.list}>
                    {visibileContacts.map((contact) => (
                        <li className={styles.item} key={contact.id}>
                            {<Contact contact={contact} />}
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
};

export default ContactList;