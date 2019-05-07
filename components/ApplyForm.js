import React from 'react'
import Router from 'next/router'
import 'isomorphic-fetch'
import { Formik } from 'formik'
import { Field, Submit } from '@hackclub/design-system'
import { Featline } from './Content'

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
      <Field {...field('Name')} label="Full name" placeholder="Zach" />
      <Field
        {...field('Birthday')}
        label="Birthday"
        placeholder="2001-04-01"
        type="date"
      />
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

const submit = async values => {
  let sessions = [
    values['Sessions (preference 1)'],
    values['Sessions (preference 2)'],
    values['Sessions (preference 3)']
  ]
  sessions = Array.from(new Set(sessions)) // uniquify
  delete sessions['Can’t attend other times']

  delete values['Sessions (preference 1)']
  delete values['Sessions (preference 2)']
  delete values['Sessions (preference 3)']

  const body = JSON.stringify({
    base: 'appGddDR5Jlh8J0r7',
    table: 'Applications',
    record: {
      ...values,
      Sessions: sessions
    }
  })
  const res = await fetch(
    `https://hooks.zapier.com/hooks/catch/507705/7n18ca`,
    { method: 'POST', body }
  )
  Router.push('/applied')
}

export default () => (
  <Formik
    render={formContent}
    initialValues={defaultValues}
    onSubmit={submit}
  />
)
