import css from './ContactList.module.css'

export const ContactList = ({ onClick, contacts, filter }) => {
  const filterName = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <ul children={css.list}>
      {filterName.map(contact => (
        <li className={css.item} key={contact.id}>
          <p>
            {contact.name}: {contact.number}
          </p>
          <button className={css.button} type="button" onClick={() => onClick(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
