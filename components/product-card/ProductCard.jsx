import Image from "next/image";
import React from "react";
import { AiFillCar, AiFillStar, AiOutlineEye } from "react-icons/ai";
import { BiCableCar } from "react-icons/bi";
import { GiRoad } from "react-icons/gi";
import { BsFillFuelPumpFill } from "react-icons/bs";
import Link from "next/link";

import GetCurrentUser from "@/utils/getCurrentUser";
import axios from "axios";

import { toast } from "react-hot-toast";
import { MdDelete } from "react-icons/md";

const ProductCard = ({ product, refetch }) => {
  const {
    Name,
    Condition,
    Rating,
    Price,
    Transmission,
    Img,
    Mileage,
    Model,
    Hybrid,
    id,
  } = product || {};

  const starIcons = [];
  for (let i = 0; i < Rating; i++) {
    starIcons.push(<AiFillStar key={i} fill="gold" />);
  }
  const { data } = GetCurrentUser();
  //admin
  const admin = data?.email === "admin@gmail.com";

  //delete product
  const deleteProduct = async () => {
    axios
      .delete(`https://64f038f18a8b66ecf7794bb9.mockapi.io/products/${id}`)
      .then((response) => {
        console.log("Car deleted successfully:", response.data);
        toast.success("Car deleted successfully");
        refetch();
      })
      .catch((error) => {
        console.error("Error deleting car:", error);
      });

    refetch();
  };

  return (
    <div className="relative">
      {/* // product card */}

      <div className=" bg-white p-4 rounded-lg shadow-lg  h-min ">
        <div className="relative ">
          <Image
            priority={true}
            height={500}
            width={180}
            className="object-cover  aspect-[2/1]   w-full rounded-lg hover:scale-105 transition duration-300 ease-in-out "
            src={Img}
            alt="car"
          />
          <div className="absolute  top-4 left-2">
            {Condition === "Brand New" ? (
              <h1 className="text-white text-sm bg-green-600 rounded-full px-4 py-2  inline bg-opacity-80">
                {" "}
                New
              </h1>
            ) : (
              <h1 className="text-white bg-yellow-600 rounded-full px-4 py-2 text-sm inline bg-opacity-80">
                Used
              </h1>
            )}
          </div>
        </div>

        <div className="flex justify-between items-center">
          <h1 className="py-2 font-bold text-xl text-black ">{Name} </h1>

          {admin && (
            <div
              onClick={deleteProduct}
              className=" text-4xl text-red-600 hover:text-red-800  z-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          )}
        </div>
        <div className="flex items-center">
          {starIcons}
          <span className="text-gray-400 ml-2"> {Rating}</span>{" "}
          <h1 className="text-gray-400 ml-1">(58.5k Review)</h1>
        </div>
        <div className="flex items-center gap-2 my-2">
          <div className="flex items-center">
            <BiCableCar className="text-gray-400"></BiCableCar>
            <span className="text-gray-600 mx-2 "> {Transmission}</span>
          </div>
          <div className="flex items-center">
            <GiRoad className="text-gray-400"></GiRoad>
            <span className="text-gray-600 ml-2"> {Mileage}</span>
          </div>
        </div>
        <div className="flex items-center gap-3 mt-2 mb-5">
          <div className="flex items-center">
            <AiFillCar className="text-gray-400"></AiFillCar>
            <span className="text-gray-600 mx-2 "> Model: {Model}</span>
          </div>
          <div className="flex items-center">
            <BsFillFuelPumpFill className="text-gray-400"></BsFillFuelPumpFill>
            <span className="text-gray-600 ml-2">
              {" "}
              {Hybrid === true ? "Hybrid" : "Not Hybrid"}
            </span>
          </div>
        </div>
        <hr />

        <div className="flex justify-between items-center mt-2">
          <h1 className="text-emerald-400 text-xl font-bold"> ${Price}</h1>

          <Link
            href={`/inventory/${id}`}
            className=" text-white px-4 py-2 rounded-lg bg-gray-900 hover:bg-gray-700 transition duration-300 ease-in-out"
          >
            <h1 className="flex items-center gap-2 font-bold"> Details</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
