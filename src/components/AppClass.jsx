 import { Component } from 'react';
import { nanoid } from 'nanoid';
import  { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };






  componentDidMount() {
    const localData = localStorage.getItem('contacts');
    if (localData) {
      this.setState({
        contacts: JSON.parse(localData),
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = (name, number) => {
    const duplicate = this.state.contacts.find(
      contact => contact.name === name
    );
    if (duplicate) {
      alert('A customer already exists ');
      return;
    }
    this.setState({
      contacts: [...this.state.contacts, { id: nanoid(), name, number }],
    });
  };

  changeFilter = e => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  deleteContact = id => {
    const filterId = this.state.contacts.filter(contact => contact.id !== id);
    this.setState({
      contacts: [...filterId],
    });
  };

  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#010101',
        }}
      >
        <h2>Phonebook</h2>
        <Form onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter onChange={this.changeFilter} value={this.state.filter} />
        <ContactList
          onClick={this.deleteContact}
          contacts={this.state.contacts}
          filter={this.state.filter}
        />
      </div>
    );
  }
}

