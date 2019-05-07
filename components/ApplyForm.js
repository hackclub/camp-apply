import React from 'react'
import Router from 'next/router'
import 'isomorphic-fetch'
import { Formik } from 'formik'
import { Field, Submit } from '@hackclub/design-system'
import { Featline, Hint } from './Content'
import * as yup from 'yup'

const SelectOne = ({ text = 'one' }) => (
  <option value="" disabled children={'Select ' + text} />
)

const formContent = ({
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting
}) => {
  const field = name => ({
    name,
    value: values[name] === null ? '' : values[name],
    onChange: handleChange,
    onBlur: handleBlur,
    error: touched[name] && errors[name]
  })
  return (
    <form onSubmit={handleSubmit}>
      <Featline mt={4}>About you</Featline>
      <Field {...field('Name')} label="Full name" placeholder="Rose Hacks" />
      <Field
        {...field('Birthday')}
        label="Birthday"
        placeholder="2001-03-01"
        type="date"
      />
      <Hint>YYYY-MM-DD format</Hint>
      <Field {...field('School Stage')} label="School stage" type="select">
        <SelectOne />
        <option>Rising Middle Schooler</option>
        <option>Rising Freshman</option>
        <option>Rising Sophomore</option>
        <option>Rising Junior</option>
        <option>Rising Senior</option>
        <option>Graduated!</option>
      </Field>
      <Field {...field('Email')} label="Email" />
      <Field {...field('Gender')} label="Gender" type="select">
        <SelectOne />
        <option>Female</option>
        <option>Male</option>
        <option>Non-Binary</option>
        <option>Other</option>
      </Field>
      <Field
        {...field('Coding Experience')}
        label="Coding experience"
        type="select"
      >
        <SelectOne text="experience level" />
        <option>None</option>
        <option>Just a little</option>
        <option>I know 2+ languages</option>
      </Field>
      <Field
        {...field('Electronics Experience')}
        label="Electronics experience"
        type="select"
      >
        <SelectOne text="experience level" />
        <option>None</option>
        <option>Just a little</option>
        <option>I can read a circuit diagram</option>
      </Field>
      <Field
        {...field('Coolest Project')}
        label="What’s the coolest project you’ve made/worked on?"
        type="textarea"
      />
      <Hint>A few sentences is fine.</Hint>
      <Featline mt={4}>Which session?</Featline>
      <Field
        {...field('Sessions (preference 1)')}
        label="First choice"
        type="select"
      >
        <SelectOne text="a session" />
        <option>Session 1 (July 1)</option>
        <option>Session 2 (July 15)</option>
        <option>Session 3 (July 29)</option>
      </Field>
      <Field
        {...field('Sessions (preference 2)')}
        label="Second choice"
        type="select"
      >
        <SelectOne text="a session" />
        <option>Can’t attend other times</option>
        <option>Session 1 (July 1)</option>
        <option>Session 2 (July 15)</option>
        <option>Session 3 (July 29)</option>
      </Field>
      <Field
        {...field('Sessions (preference 3)')}
        label="Third choice"
        type="select"
      >
        <SelectOne text="a session" />
        <option>Can’t attend other times</option>
        <option>Session 1 (July 1)</option>
        <option>Session 2 (July 15)</option>
        <option>Session 3 (July 29)</option>
      </Field>
      <Submit
        width={1}
        mt={4}
        disabled={isSubmitting}
        value="Apply to Hack Camp"
      />
    </form>
  )
}

const defaultValues = {
  Name: '',
  Birthday: '',
  'School Stage': '',
  Email: '',
  Gender: '',
  'Coding Experience': '',
  'Electronics Experience': '',
  'Coolest Project': '',
  'Sessions (preference 1)': '',
  'Sessions (preference 2)': '',
  'Sessions (preference 3)': ''
}

const schema = yup.object().shape({
  Name: yup.string().required('required'),
  Birthday: yup
    .string()
    .required('required')
    .matches(
      /^(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9])$/,
      'please format YYYY-MM-DD'
    ),
  'School Stage': yup.string().required('required'),
  Email: yup
    .string()
    .email()
    .required('required'),
  Gender: yup.string().required('required'),
  'Coding Experience': yup.string().required('required'),
  'Electronics Experience': yup.string().required('required'),
  'Coolest Project': yup.string().required('required'),
  'Sessions (preference 1)': yup.string().required('required'),
  'Sessions (preference 2)': yup.string().required('required'),
  'Sessions (preference 3)': yup.string().required('required')
})

const submit = values => {
  const sessions = [
    values['Sessions (preference 1)'],
    values['Sessions (preference 2)'],
    values['Sessions (preference 3)']
  ]
  const Sessions = Array.from(new Set(sessions)).filter(
    v => v !== 'Can’t attend other times'
  )

  delete values['Sessions (preference 1)']
  delete values['Sessions (preference 2)']
  delete values['Sessions (preference 3)']

  const body = JSON.stringify({
    base: 'appGddDR5Jlh8J0r7',
    table: 'Applications',
    record: { ...values, Sessions }
  })

  const endpoint = 'https://hooks.zapier.com/hooks/catch/507705/7n18ca'
  fetch(endpoint, { method: 'POST', body }).then(res => {
    console.log(res)
    Router.push('/applied')
  })
}

export default () => (
  <Formik
    render={formContent}
    initialValues={defaultValues}
    // validationSchema={schema}
    onSubmit={submit}
  />
)
