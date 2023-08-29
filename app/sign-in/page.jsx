'use client';

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';

const page = () => {
  const initialValues = {
   
    email: '',
    password: '',
   
  };

//   const validationSchema = Yup.object({
//     name: Yup.string().required('Name is Required'),
//     email: Yup.string().email('Invalid email format').required('Email is Required'),
//     password: Yup.string().required('Password is Required').min(6, 'Password must be at least 6 characters'),
//     confirmPassword: Yup.string()
//       .oneOf([Yup.ref('password'), null], 'Confirm password  must match Passwords ')
//       .required('confirm password is Required'),
//   });

  const handleSubmit = (values, { resetForm }) => {
    // You can handle the form submission here
    console.log(values);
    resetForm();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full md:w-1/2 lg:w-1/3">
        <h2 className="text-2xl font-bold flex items-center justify-center mb-4">Sign In</h2>
        <Formik initialValues={initialValues}  onSubmit={handleSubmit}>
          <Form>
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <Field type="email" id="email" placeholder = 'Email' name="email" className="mt-1 p-2 w-full border rounded-md" />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <Field type="password" id="password" name="password" placeholder = 'Password' className="mt-1 p-2 w-full border rounded-md" />
              <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
            </div>
            
           
               <button type="submit" className="text-white p-2 rounded-md w-full bg-red-600 hover:bg-black ">Sign In</button> 
          
            
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default page;
