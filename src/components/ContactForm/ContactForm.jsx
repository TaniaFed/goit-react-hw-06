import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useId } from 'react'
import css from './ContactForm.module.css'
import { formatPhoneNumber, formatName } from '../../helper'
import { nanoid } from 'nanoid'

export default function ContactForm({ onAdd, initialValues, FeedbackSchema }) {
  const idFieldId = useId()
  const nameFieldId = useId()
  const numberFieldId = useId()

  const handleAdd = (values, { resetForm }) => {
    onAdd({
      id: nanoid(),
      name: values.name,
      number: values.number,
    })
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
