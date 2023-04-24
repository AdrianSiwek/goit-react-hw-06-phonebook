import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import { getContacts } from "../../redux/selectors";
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';



const ContactForm = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);


   const handleSubmit = event => {
    event.preventDefault();
    const name = event.target.elements.name.value;
       const number = event.target.elements.number.value;
       const normalizedCase = name.toLowerCase();
        let isAdded = false;

        contacts.forEach((el) => {
            if (el.name.toLowerCase() === normalizedCase) {
                alert(`${name} is already in contacts`);
                isAdded = true;
            }
        });

        if (isAdded) {
            return;
        }
            dispatch(addContact(name, number));
            contacts.reset();
    };
    

    return (
            <div>
                <form className={styles.submit} onSubmit={handleSubmit}>
                    <label className={styles.label}>
                        Name
                        <input
                            className={styles.input}
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                        />
                    </label>
                    <label className={styles.label}>
                    Number
                        <input
                            className={styles.input}
                            type="tel"
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                        />
                    </label>
                    <button
                        className={styles.btn}
                        type="submit"
                    >
                        <span>Add contact</span> 
                    </button>
                </form>
            </div>
        );
    }

 
ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;