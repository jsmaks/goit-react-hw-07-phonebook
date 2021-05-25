import { connect } from "react-redux";
import * as actions from "../../redux/phonebook/phonebook-actions";
import contactsSelectors from '../../redux/phonebook/phonebook-selectors'

const Filter = ({ value, onChange }) => {
 
  return (
    <label>
      Find contacts by name
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};
const mapStateToProps = (state) => ({
    value: contactsSelectors.getFilter(state)
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (event) =>
    dispatch(actions.changeFilter(event.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
