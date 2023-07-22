import { createSlice, nanoid } from '@reduxjs/toolkit';
import { initialState } from './initialState';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    addNewContact: {
      prepare: newContact => {
        return { payload: { ...newContact, id: nanoid() } };
      },
      reducer: (state, action) => {
        state.contacts = [action.payload, ...state.contacts];
      },
    },
    removeContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const contactsReducer = contactsSlice.reducer;

export const { addNewContact, removeContact } = contactsSlice.actions;
