import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contactsOps";
import { selectFilterValue } from "./filterSlice";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = [...action.payload];
      })
      .addCase(fetchContacts.rejected, (state) => {
        state.loading = false;
        state.error = "";
      })
      .addCase(addContact.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = [...state.items, action.payload];
      })
      .addCase(addContact.rejected, (state) => {
        state.loading = false;
        state.error = "";
      })
      .addCase(deleteContact.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteContact.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(deleteContact.rejected, (state) => {
        state.loading = false;
        state.error = "";
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
export const selectLoading = (state) => state.loading;
export const selectError = (state) => state.error;
export const selectContactsList = (state) => {
  return state.contacts.items;
};

export const selectFilteredContacts = createSelector(
  [selectContactsList, selectFilterValue],
  (list, filterValue) => {
    return filterValue !== ""
      ? list.filter((contact) =>
          contact.name.toLowerCase().includes(filterValue)
        )
      : list;
  }
);
