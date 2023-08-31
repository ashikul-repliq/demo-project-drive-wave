"use client";
import ProductCard from "@/components/product-card/ProductCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import React from "react";

const InventoryPage = () => {
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
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  console.log(data);

  return (
    <div>
      {/* banner  */}
      <div className="relative  z-10 ">
        <Image
          priority={true}
          height={500}
          width={1800}
          className="object-cover object-center  h-40 md:h-60 xl:h-96 "
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
        products
      </h1>

      {/* products list  */}

      {isLoading ? (
        <div className="text-center  text-3xl min-h-screen flex items-center justify-center  bg-gray-100">
          loading...
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-4  min-h-screen p-10 bg-gray-100">
          {data?.map((product) => (
            <ProductCard key={product.id} product={product}>
              {" "}
              {product.id}{" "}
            </ProductCard>
          ))}
        </div>
      )}

      {/* end of product  */}
    </div>
  );
};

export default InventoryPage;
