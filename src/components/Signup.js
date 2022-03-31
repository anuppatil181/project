import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';

export const Signup = () => {
  const validate = Yup.object({
    Name: Yup.string()
      .max(30, 'Must be 30 characters or less')
      .required('Required'),
   mobile: Yup.string()
    .max(11, 'Mobile No must be at least 10 Numbers')
    .required('Mobile Number is required'),
    date:Yup.string()
    .required('Date  is required'),
    wing: Yup.string()
    .max(2, 'Must be 2 characters or less')
    .required('Wing Number is Required'),
    flat: Yup.string()
    .max(3, 'Flat Number must be at least 3 Numbers')
    .required('Flat Number is required'),
    intime: Yup.string()
   .required('In Time is required'),
    outtime: Yup.string()
    .required('Out Time  is required'),
  })
  return (
    <Formik
      initialValues={{
        Name: '',
        lastName: '',
        mobile: '',
        date: '',
        wing:'',
        flat:'',
        intime: '',
        outtime: '',
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values)
      }}
    >
      {formik => (
        <div>
          <h1 className="my-4 font-weight-bold .display-4">Security Credentials</h1>
          <Form>
            <TextField label="Full Name Of Visitor" name="Name" type="text" />
           <TextField label="Mobile Number / Adhar Card Number" name="mobile" type="number" />
            <TextField label="Date Of Visit" name="date" type="date" />
            <TextField label="Wing Number" name="wing" type="text" />
            <TextField label="Flat Number" name="flat" type="number" />
            <TextField label="In Time" name="intime" type="time" />
            <TextField label="Out Time" name="outtime" type="time" />
            <button className="btn btn-dark mt-3" type="submit">Register</button>
            <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>
          </Form>
        </div>
      )}
    </Formik>
  )
}