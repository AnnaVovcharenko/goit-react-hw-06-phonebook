import React  from 'react';
import {ItemEl, ContactData, ContactName, ContactNumber, ContactDelete } from './ContactItem.styled'

export const ContactItem =({contact, onDeleteContact}) => {
 
    return (
      <ItemEl>
        <ContactData>
          <ContactName>{contact.name}</ContactName>
          <ContactNumber>{contact.number}</ContactNumber>
        </ContactData>
        <ContactDelete 
        type="button" 
        name="delete"
        onClick={() => onDeleteContact(contact.id)}>
          &times;
        </ContactDelete>
      </ItemEl>
    );
  
}
