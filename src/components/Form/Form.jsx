
import { useState } from 'react';
import css from './Form.module.css'


export  function Form ({ onSubmit }) {

   const [name,setName] = useState('');
   const [number,setNumber] =useState('');



 const handleChange = event => {
   const { name, value } = event.target;
   switch (name) {
     case 'name':
       setName(value);

       break;
     case 'number':
       setNumber(value);

       break;

     default:
       break;
   }
 };


const  handleSubmit = e => {
    e.preventDefault();
    onSubmit(name, number);
     resetName();
     reseNumber();
  };

  const resetName = () => {
     setName('');
   };

    const reseNumber = () => {
      setNumber('');
    };

   
    return (
      <form className={css.form} onSubmit={handleSubmit}>
        <label>
          Name
          <br />
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
            value={name}
          />
        </label>
        <label>
          <br />
          Number
          <br />
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChange}
            value={number}
          />
        </label>
        <br />
        <button type="submit">Add contact</button>
      </form>
    );
  }

