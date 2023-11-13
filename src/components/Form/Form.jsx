import React from 'react';
//import PropTypes from 'prop-types'; Проверка типов с помощью PropTypes
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  MyForm,
  MyField,
  Label,
  InputContainer,
  ButtonForm,
  ErrorMsg,
} from './Form.styled';
import { addContact } from '../../redux/contactsSilce';
import { useDispatch } from 'react-redux';
import { createSlice, nanoid } from '@reduxjs/toolkit';

const formSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-Z\s]+$/, 'Only letters are allowed')
    .min(3, 'Too Short!')
    .required('This field is required, please fill that'),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, 'Must be in format: 000-00-00')
    .required('This field is required, please fill that'),
});

const FormContact = () => {
  const dispatch = useDispatch();
  const handleSubmit = (state, actions, contact) => {
    const identContactName = () =>
      // state.some(({ name }) => actions.payload.contact.name === name);
      contact.some ( ({ name }) => name.toLowerCase() === contact.name.toLowerCase())
    if (identContactName) {
      alert(`${actions.payload.contact.name} is already in contacts`, 'ok');
      return;
    }
    const finalContact = {
      id: nanoid(),
      name: state.name,
      number: state.number,
    };
    dispatch(addContact(finalContact));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={formSchema}
      // onSubmit={(contact, actions) => {
      //   dispatch(addContact({ contact }));
      //   actions.resetForm();
      // }}
      onSubmit={handleSubmit}
    >
      <MyForm>
        <InputContainer>
          <Label htmlFor="name">Name</Label>
          <MyField type="text" name="name" placeholder="" />
          <ErrorMsg name="name" component="div" />
        </InputContainer>

        <InputContainer>
          <Label htmlFor="number">Number</Label>
          <MyField type="tel" name="number" placeholder="" />
          <ErrorMsg name="number" component="div" />
        </InputContainer>

        <ButtonForm type="submit">Add contacu</ButtonForm>
      </MyForm>
    </Formik>
  );
};
export default FormContact;

// import React from 'react';
// //import PropTypes from 'prop-types'; Проверка типов с помощью PropTypes
// import { Formik } from 'formik';
// import * as Yup from 'yup';
// import {
//   MyForm,
//   MyField,
//   Label,
//   InputContainer,
//   ButtonForm,
//   ErrorMsg,
// } from './Form.styled';
// import { addContact } from '../../redux/contactsSilce';
// import { useDispatch, useSelector } from 'react-redux';
// import { nanoid } from '@reduxjs/toolkit';
// import { getContacts, getVisibleContacts } from '../../redux/selectors';
// import { toast } from 'react-toastify';

// const formSchema = Yup.object().shape({
//   name: Yup.string()
//     .matches(/^[a-zA-Z\s]+$/, 'Only letters are allowed')
//     .min(3, 'Too Short!')
//     .required('This field is required, please fill that'),
//   number: Yup.string()
//     .matches(/^\d{3}-\d{2}-\d{2}$/, 'Must be in format: 000-00-00')
//     .required('This field is required, please fill that'),
// });

// const FormContact = (actions) => {
//   const dispatch = useDispatch();
//   const contacts = useSelector(getContacts);

//   // const handleSubmit = (state, actions )=> {
//   //   // event.preventDefault();
//   //   const identContactName = state.some(
//   //     ({ name }) => actions.payload.contact.name === name
//   //   );
//   //   if (identContactName) {
//   //     return toast.warn(`${actions.payload.contact.name} is already in contacts.`);
//   //   }
//   //   dispatch(addContact({ id: nanoid(), name: " ",  number:" ", }));
//   //   actions.reset();
//   // };

//   // const handleSubmit = contact => {
//   //   // const contact = {
//   //   //   id: nanoid(),
//   //   //   name: event.currentTarget.elements.name.value,
//   //   //   number: event.currentTarget.elements.number.value,
//   //   // };
//   //   // const isExist = contacts.find(
//   //   //   ({ name }) => name.toLowerCase() === contact.name.toLowerCase() // переводимо в нижній регістр і порівнюємо
//   //   // );
//   //   // if (isExist) {
//   //   //   return toast.warn(`${contact.name} is already in contacts.`);
//   //   // }
//   //   dispatch(addContact(contact));
//   //   contact.reset();
//   // };
//   const handleSubmit = () => {

//     const contact = {
//       id: nanoid(),
//       // name: ' ',
//       // namder: ' ',
//     };
//     const identContactName = contacts.find(
//       ({ name }) => name === contact.name.toLowerCase() // переводимо в нижній регістр і порівнюємо
//     );
//     if (identContactName) {
//       return toast.warn(`${contact.name} is already in contacts.`);
//     }
//     dispatch(addContact(contact, actions));
//     actions.resetForm();;
//   };

//   return (
//     <Formik
//       initialValues={{
//         id: nanoid(),
//         name: '',
//         number: '',
//       }}
//       validationSchema={formSchema}
//        onSubmit={handleSubmit}
//       // onSubmit={(contact, actions) => {
//       //   dispatch(addContact({ contact }));
//       //   actions.resetForm();
//       // }}
//       // onSubmit={actions => {
//       //   dispatch(addContact({ id: nanoid() }));
//       //   actions.reset();
//       // }}
//     >
//       <MyForm>
//         <InputContainer>
//           <Label htmlFor={nanoid()}>Name</Label>
//           <MyField type="text" name="name" placeholder="" id={nanoid()} />
//           <ErrorMsg name="name" component="div" />
//         </InputContainer>

//         <InputContainer>
//           <Label htmlFor={nanoid()}>Number</Label>
//           <MyField type="tel" name="number" placeholder="" id={nanoid()} />
//           <ErrorMsg name="number" component="div" />
//         </InputContainer>

//         <ButtonForm type="submit">Add contacu</ButtonForm>
//       </MyForm>
//     </Formik>
//   );
// };
// export default FormContact;
