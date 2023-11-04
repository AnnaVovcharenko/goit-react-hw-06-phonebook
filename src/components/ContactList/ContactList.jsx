
import {ContactItem} from '../ContactItem/ContactItem';
import {ListUl, ListDiv} from './ContactList.styled'
export const ContactList = ({contacts, onDeleteContact}) => {
         
        return (
          <ListDiv> 
            <ListUl>
                {contacts.map(contact => {
                    return(
                        <ContactItem
                        key={contact.id}
                        contact={contact}
                        onDeleteContact={onDeleteContact}
                        />
                    );
                })}
            </ListUl>
            </ListDiv> 
        )
    
};