import React, { createContext} from 'react';
import { ContactList } from './contactList/ContactList';
import { Filter } from './filter/Filter';
import { ContactForm } from './contactForm/ContactForm';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'store/selectors';
import { removeContact } from 'store/contacts/contactsSlice';
export const Context = createContext();

export const App = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const deleteContact = contactId => {
    localStorage.removeItem(contactId);
    dispatch(removeContact(contactId));
  };

  function getFiltered() {
    const normalized = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalized)
    );
  }  

  const filteredContacts = getFiltered();

  return (
    <>
      <Context.Provider value={deleteContact}>
        <ContactForm />
        <div className="container">
          <Filter />
          <ContactList
            contacts={filteredContacts}
            deleteContact={deleteContact}
          />
        </div>
      </Context.Provider>
    </>
  );
};

export default App;
