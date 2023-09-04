"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import React from "react";
import {
  AiFillCar,
  AiFillHeart,
  AiOutlineCar,
  AiOutlineClockCircle,
  AiOutlineEye,
  AiOutlineSetting,
} from "react-icons/ai";
import { BiCard, BiColorFill, BiCylinder, BiTime } from "react-icons/bi";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { GiRoad } from "react-icons/gi";
import { SiAirplayaudio, SiUnrealengine } from "react-icons/si";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import GetCurrentUser from "@/utils/getCurrentUser";

const SingleProductPage = ({ params }) => {
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
    queryKey: ["single-product"],
    queryFn: fetchProducts,
  });

  // console.log(data);
  const {
    Img,
    Condition,
    Name,
    Views,
    ListedOn,
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
    Reviews,
  } = data || {};

  //  get loggin user info 
  const { data:user, refetch } = GetCurrentUser();
  // console.log(user)

  // add to favourite function

    //  const addToFavourite = async () => {
    // try {
    //   const response = await axios.post("https://64f038f18a8b66ecf7794bb9.mockapi.io/favourite" , {
    //     ...data, 

    // }

  return (
    <>
      {/* // single product  */}
      <div className=" bg-gray-300 min-h-screen     ">
        {isLoading ? (
          <div className="text-center  text-3xl min-h-screen   bg-gray-100">
            loading...
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
            <div className="col-span-2">
              <div className=" bg-white p-6 rounded-lg shadow-lg col-span-2 mx-5 mt-20 md:ml-20 mb-5 flex  flex-col items-start">
                {Condition === "Brand New" ? (
                  <h1 className="text-white bg-green-600 rounded-lg py-2 px-4 mb-2 inline">
                    {" "}
                    New
                  </h1>
                ) : (
                  <h1 className="text-white bg-red-600 rounded-lg py-2 px-4 mb-2 inline">
                    Used
                  </h1>
                )}
                <div className="flex  ">
                  <h1 className="pb-2 font-bold text-xl md:text-3xl  text-black ">
                    {Name}{" "}
                  </h1>

                  <button className="text-white bg-purple-600 rounded-lg py-2 px-4 mb-2 ml-8 xl:ml-96 flex items-center gap-2">
                    Fav <AiFillHeart></AiFillHeart>
                  </button>
                </div>

                <div className="flex items-center mb-4">
                  <AiOutlineClockCircle fill="red"></AiOutlineClockCircle>
                  <span className="text-gray-400 mx-2 ">
                    ListedOn: {ListedOn}
                  </span>
                  <AiOutlineEye fill="red"></AiOutlineEye>
                  <span className="text-gray-400 ml-2">Views: {Views}</span>
                </div>
                <Image
                  priority={true}
                  height={300}
                  width={1800}
                  className=" object-cover object-center  h-full w-full rounded-lg "
                  src={Img}
                  alt="car"
                />
              </div>

              {/* key information */}

              <div className="bg-white p-6 rounded-lg shadow-lg col-span-2  mx-5  md:ml-20 mb-10 flex  flex-col items-start">
                <h1 className="pb-3 font-bold text-xl md:text-2xl  text-black ">
                  Key Information
                </h1>
                <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  <div className="flex   gap-3">
                    <AiOutlineCar
                      className="text-2xl"
                      fill="red"
                    ></AiOutlineCar>
                    <div>
                      <h1 className="text-gray-400 text-xl ">Condition</h1>
                      <h1 className="text-black font-bold ">{Condition}</h1>
                    </div>
                  </div>
                  <div className="flex   gap-3">
                    <GiRoad className="text-2xl" fill="red"></GiRoad>
                    <div>
                      <h1 className="text-gray-400 text-xl ">Mileage</h1>
                      <h1 className="text-black font-bold ">{Mileage}</h1>
                    </div>
                  </div>
                  <div className="flex   gap-3">
                    <AiOutlineSetting
                      className="text-2xl"
                      fill="red"
                    ></AiOutlineSetting>
                    <div>
                      <h1 className="text-gray-400 text-xl ">Transmission</h1>
                      <h1 className="text-black font-bold ">{Transmission}</h1>
                    </div>
                  </div>
                  <div className="flex   gap-3">
                    <BiTime className="text-2xl" fill="red"></BiTime>
                    <div>
                      <h1 className="text-gray-400 text-xl ">Year</h1>
                      <h1 className="text-black font-bold ">{Year}</h1>
                    </div>
                  </div>
                  <div className="flex   gap-3">
                    <BsFillFuelPumpFill
                      className="text-2xl"
                      fill="red"
                    ></BsFillFuelPumpFill>
                    <div>
                      <h1 className="text-gray-400 text-xl ">FuelType</h1>
                      <h1 className="text-black font-bold ">{FuelType}</h1>
                    </div>
                  </div>
                  <div className="flex   gap-3">
                    <BiColorFill className="text-2xl" fill="red"></BiColorFill>
                    <div>
                      <h1 className="text-gray-400 text-xl ">Color</h1>
                      <h1 className="text-black font-bold ">{Color}</h1>
                    </div>
                  </div>
                  <div className="flex   gap-3">
                    <BiCard className="text-2xl" fill="red"></BiCard>
                    <div>
                      <h1 className="text-gray-400 text-xl ">Doors</h1>
                      <h1 className="text-black font-bold ">{Doors}</h1>
                    </div>
                  </div>
                  <div className="flex   gap-3">
                    <BiCylinder className="text-2xl" fill="red"></BiCylinder>
                    <div>
                      <h1 className="text-gray-400 text-xl ">Cylinders</h1>
                      <h1 className="text-black font-bold ">{Cylinders}</h1>
                    </div>
                  </div>
                  <div className="flex   gap-3">
                    <SiUnrealengine
                      className="text-2xl"
                      fill="red"
                    ></SiUnrealengine>
                    <div>
                      <h1 className="text-gray-400 text-xl ">EngineSize</h1>
                      <h1 className="text-black font-bold ">{EngineSize}</h1>
                    </div>
                  </div>
                  <div className="flex   gap-3">
                    <SiAirplayaudio
                      className="text-2xl"
                      fill="red"
                    ></SiAirplayaudio>
                    <div>
                      <h1 className="text-gray-400 text-xl ">VIN</h1>
                      <h1 className="text-black font-bold ">{VIN}</h1>
                    </div>
                  </div>
                </div>
              </div>
              {/* end of key information */}
              {/* discription */}
              <div className="bg-white p-6 rounded-lg shadow-lg col-span-2  mx-5  md:ml-20 mb-10 flex  flex-col items-start">
                <h1 className="pb-3 font-bold text-xl md:text-2xl  text-black ">
                  Discription
                </h1>

                <p className="text-gray-400">{Details} </p>

                <h1 className="py-3 font-bold text-xl md:text-2xl  text-black ">
                  {" "}
                  Car Features
                </h1>

                <ul>
                  {CarFeatures.map((feature, index) => (
                    <li key={index}>
                      <div className="flex items-center gap-2">
                        <IoCheckmarkDoneCircleOutline className="text-red-700"></IoCheckmarkDoneCircleOutline>
                        <span className="text-gray-400"> {feature}</span>
                      </div>
                    </li>
                  ))}
                </ul>
                <h1 className="py-3 font-bold text-xl md:text-2xl  text-black ">
                  {" "}
                  Vehicle History
                </h1>

                <ul>
                  {VehicleHistory.map((feature, index) => (
                    <li key={index}>
                      <div className="flex items-center gap-2">
                        <IoCheckmarkDoneCircleOutline className="text-red-700"></IoCheckmarkDoneCircleOutline>
                        <span className="text-gray-400"> {feature}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              {/* end of discription */}
            </div>

            {/* reviews */}

            <div className="bg-white p-6 rounded-lg shadow-lg   mx-5 md:mt-20 md:mr-10 mb-10 flex  flex-col items-start  md:h-[45%]">
              <h1 className="pb-3 font-bold text-xl md:text-2xl  text-black ">
                Reviews({Reviews?.length})
              </h1>
              <div className="grid grid-cols-1  gap-4">
                {Reviews?.map((review, index) => (
                  <div key={index} className="">
                    <h1 className="text-black text-xl font-bold">
                      {review?.Name}
                    </h1>
                    <div className="flex items-center mb-4">
                      <AiOutlineClockCircle fill="red"></AiOutlineClockCircle>
                      <span className="text-red-600 mx-2 ">
                        {" "}
                        {review?.Date}
                      </span>
                    </div>
                    <p className="text-gray-400">{review?.Comment}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* end of reviews */}
          </div>
        )}
      </div>
    </>
  );
};

export default SingleProductPage;
