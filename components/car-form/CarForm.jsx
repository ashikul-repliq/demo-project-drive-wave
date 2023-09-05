'use client'

import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const CarForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      Name: '',
      Img: '',
      price: '',
      Model: '',
      Rating: '',
      condition: '',
      Transmission: '',
      Mileage: '',
      FuelType: '',
      Details: '',
    },
    validationSchema: Yup.object({
      Name: Yup.string().required('Name is required'),
      Img: Yup.string().url('Must be a valid URL'),
    //   price: Yup.number().required('Price is required').positive('Price must be positive'),
      Model: Yup.string().required('Model is required'),
      Rating: Yup.number().required('Rating is required').min(0).max(5),
      condition: Yup.string().required('Condition is required'),
      Transmission: Yup.string().required('Transmission is required'),
      Mileage: Yup.string().required('Mileage is required'),
      FuelType: Yup.string().required('Fuel Type is required'),
      Details: Yup.string().required('Details are required'),
    }),
    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="w-full max-w-md mx-auto bg-white p-8 rounded-lg md:w-1/2 lg:w-1/3 shadow-lg">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Add a Car</h2>
      <div className="grid grid-cols-1 gap-6">
        <div className="mb-4">
          <label htmlFor="Name" className="block text-gray-700">Name</label>
          <input
            type="text"
            id="Name"
            name="Name"
            placeholder='Tesla Model 3'
            className="form-input w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
            {...formik.getFieldProps('Name')}
          />
          {formik.touched.Name && formik.errors.Name && (
            <div className="text-red-600 mt-2">{formik.errors.Name}</div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="Img" className="block text-gray-700">Image URL</label>
          <input
            type="text"
            id="Img"
            name="Img"
            placeholder='https://www.example.com/image.jpg'
            className="form-input w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
            {...formik.getFieldProps('Img')}
          />
          {formik.touched.Img && formik.errors.Img && (
            <div className="text-red-600 mt-2">{formik.errors.Img}</div>
          )}
        </div>

       <div className='flex  gap-4'>
<div className="mb-4">
          <label htmlFor="price" className="block text-gray-700">Price</label>
          <input
            type="text"
            id="price"
            name="price"
            placeholder='$28500'
            className="form-input w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
            {...formik.getFieldProps('price')}
          />
          {formik.touched.price && formik.errors.price && (
            <div className="text-red-600 mt-2">{formik.errors.price}</div>
          )}
        </div>

 <div className="mb-4">
          <label htmlFor="Model" className="block text-gray-700">Model</label>
          <input
            type="text"
            id="Model"
            name="Model"
            placeholder='2020'
            className="form-input w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
            {...formik.getFieldProps('Model')}
          />
          {formik.touched.Model && formik.errors.Model && (
            <div className="text-red-600 mt-2">{formik.errors.Model}</div>
          )}
        </div>

       </div>
        

  <div className='flex gap-4'>
 
 <div className="mb-4">
          <label htmlFor="Rating" className="block text-gray-700">Rating</label>
          <input
            type="text"
            id="Rating"
            name="Rating"
            placeholder='1-5'
            className="form-input w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
            {...formik.getFieldProps('Rating')}
          />
          {formik.touched.Rating && formik.errors.Rating && (
            <div className="text-red-600 mt-2">{formik.errors.Rating}</div>
          )}
        </div>

 <div className="mb-4">
          <label htmlFor="condition" className="block text-gray-700">Condition</label>
          <input
            type="text"
            id="condition"
            name="condition"
            placeholder='Used/Brand New'
            className="form-input w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
            {...formik.getFieldProps('condition')}
          />
          {formik.touched.condition && formik.errors.condition && (
            <div className="text-red-600 mt-2">{formik.errors.condition}</div>
          )}
        </div>
  </div>
       

   <div className='flex gap-4'>

    <div className="mb-4">
          <label htmlFor="Transmission" className="block text-gray-700">Transmission</label>
          <input
            type="text"
            id="Transmission"
            name="Transmission"
            placeholder='Automatic/Manual'
            className="form-input w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
            {...formik.getFieldProps('Transmission')}
          />
          {formik.touched.Transmission && formik.errors.Transmission && (
            <div className="text-red-600 mt-2">{formik.errors.Transmission}</div>
          )}
        </div>


 <div className="mb-4">
          <label htmlFor="Mileage" className="block text-gray-700">Mileage</label>
          <input
            type="text"
            id="Mileage"
            name="Mileage"
            placeholder='25,000 miles'
            className="form-input w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
            {...formik.getFieldProps('Mileage')}
          />
          {formik.touched.Mileage && formik.errors.Mileage && (
            <div className="text-red-600 mt-2">{formik.errors.Mileage}</div>
          )}
        </div>
    
    </div>    

       

       

       

        <div className="mb-4">
          <label htmlFor="FuelType" className="block text-gray-700">Fuel Type</label>
          <input
            type="text"
            id="FuelType"
            name="FuelType"
            placeholder='Petrol, Diesel,  Hybrid'
            className="form-input w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
            {...formik.getFieldProps('FuelType')}
          />
          {formik.touched.FuelType && formik.errors.FuelType && (
            <div className="text-red-600 mt-2">{formik.errors.FuelType}</div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="Details" className="block text-gray-700">Details</label>
          <textarea
            id="Details"
            name="Details"
            rows="4"
            placeholder='Details about the car'
            className="form-input w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
            {...formik.getFieldProps('Details')}
          ></textarea>
          {formik.touched.Details && formik.errors.Details && (
            <div className="text-red-600 mt-2">{formik.errors.Details}</div>
          )}
        </div>

        {/* Submit button */}
        <div className="flex justify-end">
          <button type="submit" className="btn bg-red-500 hover:bg-black text-white font-semibold py-2 px-4 rounded-lg">
            Add Car
          </button>
        </div>
      </div>
    </form>
  );
};

export default CarForm;