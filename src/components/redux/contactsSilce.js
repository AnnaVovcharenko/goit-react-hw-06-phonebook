import { createSlice, nanoid } from '@reduxjs/toolkit';
const contactsPhone = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsPhone,
    reducers: {
        addContact(state, actions) {
            const identContactName = state.some(
                ({ name }) => actions.payload.contact.name === name
            );

            if (identContactName) {
                alert(`${actions.payload.contact.name} is already in contacts`,
                    'ok');
                return;
            }
            state.push({
                id: nanoid(),
                name: actions.payload.contact.name,
                number: actions.payload.contact.number,
            });

        },
        delContact: (state, action) => {
            const index = state.findIndex(
                contact => contact.id !== action.payload);
              state.splice(index, 1); 
          },

    },})
    export const { addContact, delContact } = contactsSlice.actions;
    export const contactReducer = contactsSlice.reducer;
