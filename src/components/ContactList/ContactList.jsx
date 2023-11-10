import { ContactItem } from '../ContactItem/ContactItem';
import { ListUl, ListDiv } from './ContactList.styled';
import {  useSelector } from 'react-redux';
import { getVisibleContacts } from "../redux/selectors";

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  return (
    <ListDiv>
      <ListUl>
        {contacts.map(contact  => {
          return <ContactItem key={contact.id}>  {contact.name + ' : ' + contact.number}  </ContactItem> 
         
        })}
      </ListUl>
    </ListDiv>
  );
};
export default ContactList;
