import "./Contacts.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {contactsSelectors, contactOperations} from '../../redux/phonebook'

const Contacts = ({ libraryContacts, onDelete }) => {
  return (
    <div>
      <ul className="contacts__list">
        {libraryContacts.map((el) => (
          <li className="contacts__item" key={el.id}>
            <p className="contact__name">
              {el.name}:<span className="contact__tel">{el.number}</span>
            </p>
            <button className="btn btn-delete" onClick={() => onDelete(el.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

Contacts.propTypes = {
  onDelete: PropTypes.func,
};


const mapStateToProps = (state) => ({
  libraryContacts: contactsSelectors.getVisibleContacts(state),
});

const mapDisptachToProps = (dispatch) => ({
  onDelete: (id) => dispatch(contactOperations.deleteContact(id)),
});
export default connect(mapStateToProps, mapDisptachToProps)(Contacts);

