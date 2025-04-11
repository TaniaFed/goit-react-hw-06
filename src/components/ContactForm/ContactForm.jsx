import { useDispatch } from 'react-redux'
import { addContact } from '../../redux/contactsSlice'

import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useId } from 'react'
import css from './ContactForm.module.css'
import { formatPhoneNumber, formatName } from '../../helper'
import { nanoid } from 'nanoid'
import * as Yup from 'yup'

export default function ContactForm() {
  const dispatch = useDispatch()

  const idFieldId = useId()
  const nameFieldId = useId()
  const numberFieldId = useId()

  const initialValues = {
    name: '',
    number: '',
  }

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(30, 'Too Long!')
      .required('Required'),
    number: Yup.string()
      .matches(/^\d{3}-\d{2}-\d{2}$/, 'Format: 000-00-00')
      .required('Required'),
  })

  const handleAdd = (values, { resetForm }) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    }
    dispatch(addContact(newContact))
    resetForm()
  }
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleAdd}
      validationSchema={FeedbackSchema}
    >
      {() => (
        <Form className={css.form}>
          <label className={css.label} id={idFieldId} htmlFor={nameFieldId}>
            Name
          </label>
          <Field
            className={css.field}
            type="text"
            name="name"
            id={nameFieldId}
            onInput={(e) => {
              e.target.value = formatName(e.target.value)
            }}
          />
          <ErrorMessage className={css.error} name="name" component="span" />
          <label className={css.label} htmlFor={numberFieldId}>
            Number
          </label>
          <Field
            className={css.field}
            type="text"
            name="number"
            id={numberFieldId}
            onInput={(e) => {
              e.target.value = formatPhoneNumber(e.target.value)
            }}
          />
          <ErrorMessage className={css.error} name="number" component="span" />
          <button className={css.btn} type="submit">
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  )
}
