import { ContactItem } from '../ContactItem/ContactItem';
import { ListUl, ListDiv } from './ContactList.styled';
import {  useSelector } from 'react-redux';
// import { getContacts} from "../../redux/selectors";
import { getVisibleContacts } from "../../redux/selectors";

const ContactList = () => {
  // const contacts = useSelector(getContacts);
  const contacts = useSelector(getVisibleContacts);
  return (
    <ListDiv>
      <ListUl>
        {contacts.map(contact  => {
          return <ContactItem key={contact.id}
          contact={contact}
          /> 
         
        })}
      </ListUl>
    </ListDiv>
  );
};
export default ContactList;

