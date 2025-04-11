import { useSelector } from 'react-redux'

import styles from './ContactList.module.css'
import Contact from '../Contact/Contact'

export default function ContactList() {
  const contacts = useSelector((state) => state.contacts.items)
  const filter = useSelector((state) => state.filters.name.toLowerCase())

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter)
  )

  return (
    <ul className={styles.list}>
      {filteredContacts.map((contact) => (
        <li className={styles.item} key={contact.id}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  )
}
