'use client'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const EditPage = ({params}) => {

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

  // console.log(data);
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
    Reviews, id
  } = data || {};
  console.log(data);
    return (
        <div>
            edit
        </div>
    );
};

export default EditPage;