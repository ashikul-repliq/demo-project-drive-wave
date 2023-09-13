
'use client'

import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const CarEditForm = ({ onSubmit ,data }) => {
    const {
        Img,
        Condition,
        Name,
        Views,
        ListedOn,
        createdAt,
        Mileage,
        Transmission,
        Year,
        FuelType,
        Color,
        Doors,
        Cylinders,
        VIN,
        EngineSize,
        Details,
        CarFeatures,
        VehicleHistory,
        Reviews, id ,Price,Model,Rating
      } = data || {};
    

  const formik = useFormik({
    initialValues: {
      Name: Name,
      Img: Img,
      Price: Price,
      Model: Model,
      Rating: Rating,
      Condition: Condition,
      Transmission:Transmission ,
      Mileage: Mileage,
      FuelType: FuelType,
      Details:  Details,
    },
    validationSchema: Yup.object({
      Name: Yup.string().required('Name is required'),
      Img: Yup.string().url('Must be a valid URL'),
      Price: Yup.number()
      .required('Price is required')
      .positive('Price should be a positive number')
      .integer('Price should be an integer'),
      Model: Yup.string().required('Model is required'),
      Rating: Yup.number().required('Rating is required').min(0).max(5),
      Condition: Yup.string().required('Condition is required'),
      Transmission: Yup.string().required('Transmission is required'),
      Mileage: Yup.string().required('Mileage is required'),
      FuelType: Yup.string().required('Fuel Type is required'),
      Details: Yup.string().required('Details are required'),
    }),
    onSubmit: (values , { resetForm }) => {
      onSubmit(values);
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="w-full max-w-md  lg:max-w-2xl mx-auto bg-white p-8 rounded-lg md:w-1/2 lg:w-1/2 shadow-lg">
      <h2 className="text-2xl font-semibold mb-1 text-gray-800  text-center">Update Car Information</h2>
      <div className="grid grid-cols-1 gap-6">
        <div className="mb-1">
          <label htmlFor="Name" className="block text-gray-700   font-bold ">Name</label>
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

        <div className="mb-1">
          <label htmlFor="Img" className="block text-gray-700   font-bold">Image URL</label>
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
<div className="mb-1">
          <label htmlFor="Price" className="block text-gray-700   font-bold">Price</label>
          <input
            type="text"
            id="Price"
            name="Price"
            placeholder='$28500'
            className="form-input w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
            {...formik.getFieldProps('Price')}
          />
          {formik.touched.Price && formik.errors.Price && (
            <div className="text-red-600 mt-2">{formik.errors.Price}</div>
          )}
        </div>

 <div className="mb-1">
          <label htmlFor="Model" className="block text-gray-700   font-bold">Model</label>
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
 
 <div className="mb-1">
          <label htmlFor="Rating" className="block text-gray-700   font-bold">Rating</label>
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

 <div className="mb-1">
          <label htmlFor="Condition" className="block text-gray-700   font-bold">Condition</label>
          <input
            type="text"
            id="Condition"
            name="Condition"
            placeholder='Used/Brand New'
            className="form-input w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
            {...formik.getFieldProps('Condition')}
          />
          {formik.touched.Condition && formik.errors.Condition && (
            <div className="text-red-600 mt-2">{formik.errors.Condition}</div>
          )}
        </div>
  </div>
       

   <div className='flex gap-4'>

    <div className="mb-1">
          <label htmlFor="Transmission" className="block text-gray-700   font-bold">Transmission</label>
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


 <div className="mb-1">
          <label htmlFor="Mileage" className="block text-gray-700   font-bold">Mileage</label>
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

       

       

       

        <div className="mb-1">
          <label htmlFor="FuelType" className="block text-gray-700   font-bold">Fuel Type</label>
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

        <div className="mb-1">
          <label htmlFor="Details" className="block text-gray-700   font-bold">Details</label>
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
        <div className="">
          <button type="submit" className="w-full  bg-gray-900 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg">
            Update 
          </button>
        </div>
      </div>
    </form>
  );
};

export default CarEditForm;
