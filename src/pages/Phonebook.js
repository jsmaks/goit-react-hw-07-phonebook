import React, { Component } from "react";

import Form from "../components/FormContacts/Form";
import Contacts from "../components/Contacts/ContactsList";
import Filter from "../components/Filter/Filter";
import Container from "../components/Container/Container";
import contactsOperations from "../redux/phonebook/phonebook-operations";
import { connect } from "react-redux";
import contactsSelectors from "../redux/phonebook/phonebook-selectors";

class Phonebook extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }
  render() {
    return (
      <Container>
        <h1>Phonebook</h1>
        <Form />
        <h2>Contacts</h2>
        <Filter />
        {this.props.isLoadingContacts && <h1>Загружаем...</h1>}
        <Contacts />
      </Container>
    );
  }
}
const mapStateToProps = (state) => ({
  isLoadingContacts: contactsSelectors.getLoading(state),
});
const mapDispatchToProps = (dispatch) => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Phonebook);
