"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import ProductCard from "../product-card/ProductCard";
import Link from "next/link";

const PopularProduct = () => {
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
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  // filter products by popularity
  const popularProducts = data?.filter((product) => product.Type === "Popular");

  return (
    <>
      {/* popular product  */}

      <h1 className=" pt-8 text-center text-black font-bold md:text-5xl text-2xl bg-gray-100 ">
        Popular Cars
      </h1>

      {/* products list  */}

      {isLoading ? (
        <div className="text-center  text-3xl min-h-screen flex items-center justify-center  bg-gray-100">
          <div className="flex justify-center items-center min-h-screen">
  <div className="loader ease-linear rounded-full border-t-4 border-b-4 border-teal-500 h-16 w-16 animate-spin"></div>
</div>

        </div>
      ) : (  <div className="bg-gray-100    ">
        
        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-4  p-5 container mx-auto  ">
          {popularProducts?.map((product) => (
            <ProductCard key={product.id} product={product}>
              {" "}
              {product.id}{" "}
            </ProductCard>
          ))}
        </div>
        </div>
        
      )}

      {/* end of product  */}

      {isLoading ? (
        ""
      ) : (
        <>
          <button className=" flex item-center justify-center text-center  w-full bg-gray-100 pb-8">
            <Link
              href="/inventory"
              className=" py-3   px-6 font-medium tracking-wide text-white transition duration-200 rounded-full shadow-md bg-gray-900 hover:bg-gray-700 "
            >
              View all
            </Link>
          </button>
        </>
      )}
    </>
  );
};

export default PopularProduct;
