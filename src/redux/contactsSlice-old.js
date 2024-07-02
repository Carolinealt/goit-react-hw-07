import { createAction, createReducer } from "@reduxjs/toolkit";

export const actionAddContact = createAction("contacts/addContact", (value) => {
  return {
    payload: { ...value, name: value.name, id: value.id, number: value.number },
  };
});

export const actionDeleteContact = createAction(
  "contacts/deleteContact",
  (value) => {
    return { payload: value };
  }
);

const initialState = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

export const contactsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actionAddContact.type, (state, action) => {
      return [...state, action.payload];
    })
    .addCase(actionDeleteContact.type, (state, action) => {
      const filteredContacts = state.filter(
        (item) => item.id !== action.payload
      );
      return [...filteredContacts];
    });
});
