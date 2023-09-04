'use client'

import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const fetchFavProducts = async () => {
    try {
      const response = await axios.get(
        `https://64f038f18a8b66ecf7794bb9.mockapi.io/favourite`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      return []; // Return an empty array in case of an error
    }
  };



const GetFavData  = () => {
    return useQuery({
        queryKey:["favData"],
        queryFn: fetchFavProducts,
    })
}

export default GetFavData ;