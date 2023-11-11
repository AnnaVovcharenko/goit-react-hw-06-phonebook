import { getContacts } from '../redux/selectors';
import { useSelector } from 'react-redux';

import FormContact from './Form/Form';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Section from './Section/Section';

export const App = () => {
  const contacts = useSelector(getContacts);
  return (
    <Section>
      <h2>Phonebook</h2>
      <FormContact/>
      <Filter/>
      {contacts?.length > 0 && <ContactList/>}
    </Section>
      );
};
