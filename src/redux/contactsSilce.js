import { createSlice,  } from '@reduxjs/toolkit';
// const contactsPhone = [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

const contactsPhone = {
    items: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsPhone,
    reducers: {
        // addContact(state, actions) {           
        //     state.push({                
        //         name: actions.payload.contact.name,
        //         number: actions.payload.contact.number,
        //     });
        // },
        // delContact: (state, action) => {
        //     const index = state.findIndex(
        //         contact => contact.id !== action.payload);
        //       state.splice(index, 1); 
        //   },

        addContact: (state, action) => {
            state.items = [...state.items, action.payload];
          },
          deleteContact: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload); // видаляємо елемент з масиву по id
          },


    },})
    export const { addContact, delContact } = contactsSlice.actions;
    export const contactReducer = contactsSlice.reducer;
