import { useState, useEffect } from 'react'
import './App.css'
import initialContacts from './contacts.json'
import ContactForm from './components/ContactForm/ContactForm'
import ContactList from './components/ContactList/ContactList'
import SearchBox from './components/SearchBox/SearchBox'

import * as Yup from 'yup'

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts')
    return savedContacts ? JSON.parse(savedContacts) : initialContacts
  })

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])

  const [filter, setFilter] = useState('')

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact]
    })
  }

  const initialValues = {
    id: '',
    name: '',
    number: '',
  }

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Enter full Name!')
      .max(50, 'Name too long!')
      .required('Required'),
    number: Yup.string()
      .matches(
        /^\d{3}-\d{2}-\d{2}$/,
        'Phone number must be in xxx-xx-xx format!'
      )
      .required('Required'),
  })

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId)
    })
  }

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div>
      <h1 className="title">Phonebook</h1>
      <ContactForm
        onAdd={addContact}
        initialValues={initialValues}
        FeedbackSchema={FeedbackSchema}
      />
      <SearchBox value={filter} onSearch={setFilter} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </div>
  )
}
