import React, { useState } from 'react';
import { nanoid } from 'nanoid'
import { Report } from 'notiflix';
import FormContact from './Form/Form'
import { ContactList } from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Section from './Section/Section'

export const App = () => {

  const [contacts, setContacts] = useState([
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
]);
  const [filter, setFilter] = useState('');

  
const addContact = data => {
  const identContactName = contacts.some(
    ({ name }) =>  data.name === name
  );
  
 if (identContactName) {
    return Report.warning(
      'WARNING',
      `${data.name} is already in contacts`,
      'ok'
    );
  }

const contact = {
  ...data,
  id: nanoid(),
};
setContacts(contacts  => 
  [contact, ...contacts],
);};

const delContact = contactId => {
  setContacts(prevState => 
    prevState.filter(contact => contact.id !== contactId)
  );
};
const changeFilter = evt => {
 
  setFilter(evt.target.value);
};

const getVisibleContacts = contacts.filter(({ name }) => 
  name.toLowerCase().includes(filter.toLowerCase())
  );

    return (
    <Section >
      <h2>Phonebook</h2>
      <FormContact onAdd={addContact}/>
      <Filter value={filter} onChange={changeFilter}/>
      {getVisibleContacts.length > 0 && (
        <ContactList
        contacts={getVisibleContacts}
        onDeleteContact={delContact}
        />
      )}
          
    </Section>  );
};

