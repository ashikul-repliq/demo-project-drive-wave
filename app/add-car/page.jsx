"use client";

import CarForm from "@/components/car-form/CarForm";
import axios from "axios";
import React from "react";
import { toast } from "react-hot-toast";

const AddCar = () => {
  const handleFormSubmit = (values) => {
    axios
      .post("https://64f038f18a8b66ecf7794bb9.mockapi.io/products", values)
      .then((response) => {
        console.log("Car added successfully:", response.data);
        toast.success("Car added successfully");
        
      })
      .catch((error) => {
        console.error("Error adding car:", error);
      });
  };
  return (
    <div className="bg-gray-300">
      <div className="mx-auto container px-4  py-20">
      <CarForm onSubmit={handleFormSubmit} />
    </div>
    </div>

    
  );
};

export default AddCar;
