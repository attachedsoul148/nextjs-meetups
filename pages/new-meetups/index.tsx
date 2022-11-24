import axios from 'axios'
import { Formik, Form, Field } from 'formik'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'

const NewMeetupFormPage = () => {
  const router = useRouter()
  const initialValues = {
    title: '',
    image: '',
    address: '',
    description: '',
  }
  const onSubmit = async (values: typeof initialValues) => {
    await axios.post('/api/new-meetups', values)
    router.push('/')
  }
  return (
    <>
      <Head>
        <title>Add meetup</title>
      </Head>
      <Formik onSubmit={onSubmit} initialValues={initialValues}>
        {() => {
          return (
            <Form className="add-meetup-form">
              <div className="add-meetup-form__item">
                <label>Meetup title</label>
                <Field name="title" id="title" placeholder="Title" />
              </div>
              <div className="add-meetup-form__item">
                <label>Meetup image</label>
                <Field name="image" id="image" placeholder="Image" />
              </div>
              <div className="add-meetup-form__item">
                <label>Meetup address</label>
                <Field name="address" id="address" placeholder="Address" />
              </div>
              <div className="add-meetup-form__item">
                <label>Description</label>
                <Field
                  name="description"
                  id="description"
                  placeholder="Description"
                  as="textarea"
                />
              </div>
              <div className="add-meetup-form__button">
                <button type="submit">Add Meetup</button>
              </div>
            </Form>
          )
        }}
      </Formik>
    </>
  )
}

export default NewMeetupFormPage
