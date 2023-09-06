"use client";
import ProductCard from "@/components/product-card/ProductCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";

const InventoryPage = () => {
  const [conditionFilter, setConditionFilter] = useState("All");

  // fetch function

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "https://64f038f18a8b66ecf7794bb9.mockapi.io/products"
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      return []; // Return an empty array in case of an error
    }
  };

  // use tanstake query to get all products
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  // console.log(data);
  // filter products by condition
  let filteredProducts = [];

  if (conditionFilter === "All") {
    filteredProducts = data;
  } else {
    filteredProducts = data.filter((product) => {
      return conditionFilter === product.Condition;
    });
  }

  return (
    <div className="bg-gray-100">
      {/* banner  */}
      <div className="relative  z-10 container mx-auto ">
        <Image
          priority={true}
          height={500}
          width={1800}
          className="object-cover object-center  h-40 md:h-60 xl:h-96  "
          src="https://images.unsplash.com/photo-1605816988069-b11383b50717?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1488&q=80"
          alt="car"
        />
        <div className="absolute inset-0 flex items-center justify-center ">
          <h1 className="text-white font-bold text-2xl   sm:text-4xl xl:text-7xl ">
            Inventory
          </h1>
        </div>
      </div>
      {/* end of banner  */}

      {/* product  */}

      <h1 className=" pt-3 text-center text-black font-bold md:text-5xl text-2xl bg-gray-100 ">
        Cars
      </h1>
      {/* filter by  condition  */}
      <div className="bg-gray-100">
        {" "}
        <div className="p-4 container mx-auto ">
          <label className="font-semibold block mb-2">
            Filter by Condition:
          </label>
          <div className="relative inline-block w-full">
            <select
              onChange={(e) => setConditionFilter(e.target.value)}
              value={conditionFilter}
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="All">All</option>
              <option value="Used">Used</option>
              <option value="Brand New">Brand New</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 4.293a1 1 0 011.414 0L10 5.586l1.293-1.293a1 1 0 111.414 1.414l-2 2a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>{" "}
      </div>

      {/* products list  */}

      {isLoading ? (
        <div className="text-center  text-3xl min-h-screen flex items-center justify-center  bg-gray-100">
          loading...
        </div>
      ) : (
        <div className="bg-gray-100">
           <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-4  min-h-screen p-10 container mx-auto">
          {filteredProducts?.map((product) => (
            <ProductCard key={product.id} product={product} 
            refetch={refetch}>
              {" "}
              {product.id}{" "}
            </ProductCard>
          ))}
        </div>
        </div>
       
      )}

      {/* end of product  */}
    </div>
  );
};

export default InventoryPage;
