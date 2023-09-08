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
    starIcons.push(<AiFillStar key={i} fill="brown" />);
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
      {admin && (
        <div
          onClick={deleteProduct}
          className="absolute text-4xl text-red-600 hover:text-yellow-300 top-6 right-4 z-50"
        >
          <MdDelete></MdDelete>
        </div>
      )}
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
              <h1 className="text-white bg-yellow-600 rounded-full px-4 py-2 text-sm inline bg-opacity-80">Used</h1>
            )}
          </div>
        </div>

        <h1 className="py-2 font-bold text-xl text-black ">{Name} </h1>
        <div className="flex items-center">
          {starIcons}
          <span className="text-gray-400 ml-2"> {Rating}</span>{" "}
          <h1 className="text-gray-400 ml-1">(58.5k Review)</h1>
        </div>
        <div className="flex items-center my-2">
          <BiCableCar fill="red"></BiCableCar>
          <span className="text-gray-400 mx-2 "> {Transmission}</span>
          <GiRoad fill="red"></GiRoad>
          <span className="text-gray-400 ml-2"> {Mileage}</span>
        </div>
        <div className="flex items-center mt-2 mb-5">
          <AiFillCar fill="red"></AiFillCar>
          <span className="text-gray-400 mx-2 "> Model: {Model}</span>
          <BsFillFuelPumpFill fill="red"></BsFillFuelPumpFill>
          <span className="text-gray-400 ml-2">
            {" "}
            {Hybrid === true ? "Hybrid" : "Not Hybrid"}
          </span>
        </div>
        <hr />

        <div className="flex justify-between items-center mt-2">
          <h1 className="text-emerald-400 text-xl font-bold"> {Price}</h1>

          <Link
            href={`/inventory/${id}`}
            className="bg-black text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out"
          >
            <h1 className="flex items-center gap-2 font-bold">
              {" "}
              <AiOutlineEye></AiOutlineEye> Details
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
