import { useDispatch } from "react-redux";

import { deleteContact } from "redux/contactsSlice";
import PropTypes from "prop-types";

import styles from "./Contact.module.css";

export const Contact = ({ contact }) => {
    const dispatch = useDispatch();

    const handleDeleteContact = () => dispatch(deleteContact(contact.id));

    return (
        <>
            {contact.name}: <b>{contact.number}</b>
            <button
            className={styles.btn}
            type="button"
            onClick={handleDeleteContact}
          >
            <span>Delete</span>
          </button>
        </>
    );
};
Contact.propTypes = {
    contact: PropTypes.shape({
        name: PropTypes.string,
        number: PropTypes.string,
        id: PropTypes.string,
    }),
};