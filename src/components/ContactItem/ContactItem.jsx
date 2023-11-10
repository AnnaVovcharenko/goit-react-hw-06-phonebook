import React from 'react';
import { delContact } from '../redux/contactsSilce';
import { useDispatch } from 'react-redux';
import {
  ItemEl,
  ContactData,
  ContactName,
  ContactNumber,
  ContactDelete,
} from './ContactItem.styled';



export const ContactItem = ({contact}) => {
  
  const dispatch = useDispatch();
  return (
    <ItemEl>
      <ContactData>
        <ContactName>{contact.name}</ContactName>
        <ContactNumber>{contact.number}</ContactNumber>
      </ContactData>
      <ContactDelete type="button" onClick={() => dispatch(delContact(contact.id))}>
        &times;
      </ContactDelete>
    </ItemEl>
  );
};
