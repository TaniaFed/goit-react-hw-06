import { useDispatch } from 'react-redux'
import { deleteContact } from '../../redux/contactsSlice'

import css from './Contact.module.css'
import { FaPhoneAlt } from 'react-icons/fa'
import { IoPersonSharp } from 'react-icons/io5'

export default function Contact({ data: { id, name, number } }) {
  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(deleteContact(id))
  }

  return (
    <div className={css.container}>
      <div className={css.box}>
        <div className={css.nameBox}>
          <IoPersonSharp className={css.icon} />
          <p className={css.name}>{name}</p>
        </div>
        <div className={css.numberBox}>
          <FaPhoneAlt className={css.icon} />
          <p className={css.number}>{number}</p>
        </div>
      </div>
      <button className={css.btn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  )
}
