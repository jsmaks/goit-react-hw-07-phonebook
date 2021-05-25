import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import contactOperations from "../../redux/phonebook/phonebook-operations";
import contactSelectors from "../../redux/phonebook/phonebook-selectors";
import "./Form.css";
class Form extends Component {
  state = {
    name: "",
    number: "",
  };
  handleChange = (e) => {
    const { name, value } = e.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.checkOnDuplicate(this.props.libraryContacts);
    this.reset();
  };
  checkOnDuplicate = (list) => {
    const nameLowerCase = this.state.name.toLowerCase();

    list.find(({ name }) => name.toLowerCase() === nameLowerCase)
      ? alert(`${this.state.name} is alredy in contacts`)
      : this.props.addContact(this.state);
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={name}
            onChange={this.handleChange}
          />
        </label>

        <label>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={number}
            onChange={this.handleChange}
          />
        </label>

        <button className="btn" type="submit">
          Добавить
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  state: PropTypes.shape({
    name: PropTypes.string,
    number: PropTypes.number,
  }),

  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
};

const mapStateToProps = (state) => ({
  libraryContacts: contactSelectors.getAllContacts(state),
});

const mapDispatchToProps = (dispatch) => ({
  addContact: (data) => dispatch(contactOperations.addContact(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
