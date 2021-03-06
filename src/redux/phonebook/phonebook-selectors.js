import { createSelector } from "@reduxjs/toolkit";
const getLoading = (state) => state.contacts.loading;

const getFilter = (state) => state.contacts.filter;

const getAllContacts = (state) => state.contacts.items;


const getVisibleContacts = createSelector(
  [getAllContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  }
);

// eslint-disable-next-line
export default {
  getLoading,
  getFilter,
  getVisibleContacts,
  getAllContacts,
};
//----------------------------------------------------------
// const getVisibleContacts = (state) => {
//   const allContacts = getAllContacts(state);
//   const filter = getFilter(state);
//   const normalizedFilter = filter.toLocaleLowerCase();

//   return allContacts.filter(({ name }) =>
//     name.toLowerCase().includes(normalizedFilter)
//   );
// };
