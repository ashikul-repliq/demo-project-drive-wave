"use client";
import CarEditForm from "@/components/car-edit-form/CarEditForm";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";

import React from "react";
import { toast } from "react-hot-toast";

const EditPage = ({ params }) => {
  const router = useRouter();

  // fetch function

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        `https://64f038f18a8b66ecf7794bb9.mockapi.io/products/${params.id}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      return []; // Return an empty array in case of an error
    }
  };

  // use tanstake query to get all products
  const { data, isLoading } = useQuery({
    queryKey: ["single-product", params.id],
    queryFn: fetchProducts,
  });

  //handle edit form submit
  const handleFormSubmit = (values) => {
    axios
      .put(
        `https://64f038f18a8b66ecf7794bb9.mockapi.io/products/${params.id}`,
        values
      )
      .then((response) => {
        console.log("Car updated successfully:", response.data);
        toast.success("Car updated successfully");
        router.push("/inventory");
      })
      .catch((error) => {
        console.error("Error adding car:", error);
      });
  };

  return (
    <div className=" bg-gray-300 min-h-screen ">
      {isLoading ? (
        <div className="text-center  text-3xl min-h-screen   bg-gray-100">
          <div className="flex justify-center items-center min-h-screen">
            <div className="loader ease-linear rounded-full border-t-4 border-b-4 border-teal-500 h-16 w-16 animate-spin"></div>
          </div>
        </div>
      ) : (
        <div className="mx-auto container px-4 py-20">
          <CarEditForm onSubmit={handleFormSubmit} data={data}></CarEditForm>
        </div>
      )}
    </div>
  );
};

export default EditPage;
