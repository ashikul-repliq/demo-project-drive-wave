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
  AiOutlineHeart,
  AiOutlineSetting,
} from "react-icons/ai";
import { BiCard, BiColorFill, BiCylinder, BiTime } from "react-icons/bi";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { GiRoad } from "react-icons/gi";
import { SiAirplayaudio, SiUnrealengine } from "react-icons/si";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import GetCurrentUser from "@/utils/getCurrentUser";
import GetFavData from "@/utils/getFavData";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { LiaEditSolid } from "react-icons/lia";

const SingleProductPage = ({ params }) => {
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
    Reviews,
    id,
  } = data || {};

  //  get loggin user info
  const { data: user } = GetCurrentUser();

  //admin
  const admin = user?.email === "admin@gmail.com";

  // get favdata from mock api
  const { data: favData, refetch } = GetFavData();

  // filter fav data by user email
  const filterFavData = favData?.filter((item) => item.email === user?.email);
  //check data exit in the fav list
  const dataExist = filterFavData?.find((item) => {
    return item.Name === data?.Name;
  });
  // add to favourite function

  const addToFavourite = async () => {
    try {
      if (!user?.email) {
        toast.error("please login first");

        router.push("/sign-in");
        return;
      } else {
        const dataExist = filterFavData?.find((item) => {
          return item.Name === data.Name;
        });

        // console.log(dataExist)
        if (dataExist) {
          toast.error("already added to favourite");
          return;
        } else {
          const response = await axios.post(
            "https://64f038f18a8b66ecf7794bb9.mockapi.io/favourite",
            {
              ...data,
              ...user,
            }
          );

          refetch();
          toast.success("added to favourite successfully");
        }
      }

      // console.log(addedData);
    } catch (error) {
      console.error("Error fetching products:", error);
      return []; // Return an empty array in case of an error
    }
  };

  return (
    <>
      {/* // single product  */}
      <div className=" bg-gray-300 min-h-screen     ">
        {isLoading ? (
          <div className="text-center  text-3xl min-h-screen flex items-center justify-center   bg-gray-100">
            <div className="flex justify-center items-center min-h-screen">
              <div className="loader ease-linear rounded-full border-t-4 border-b-4 border-teal-500 h-16 w-16 animate-spin"></div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
            <div className="col-span-2">
              <div className=" bg-white p-6 rounded-lg shadow-lg col-span-2 mx-5 mt-20 md:ml-20 mb-5 ">
                <div className="flex justify-between ">
                  <h1 className="pb-2 font-bold text-xl md:text-3xl  text-black ">
                    {Name}{" "}
                  </h1>
                  {admin ? (
                    <Link
                      href={`/inventory/${id}/edit`}
                      className="rounded-lg py-2 px-4 mb-2  flex items-center gap-2 md:text-xl text-white bg-slate-600"
                    >
                      {" "}
                      Edit <LiaEditSolid></LiaEditSolid>{" "}
                    </Link>
                  ) : (
                    dataExist?  (
                    <button
                      onClick={addToFavourite}
                      className={` rounded-lg py-2 px-4 mb-2  flex items-center gap-2 text-4xl ${
                        dataExist ? "text-green-600 " : "text-black "
                      } `}
                    >
                      <AiFillHeart></AiFillHeart>
                    </button>
                  )    : (
                    <button
                      onClick={addToFavourite}
                      className={` rounded-lg py-2 px-4 mb-2  flex items-center gap-2 text-4xl  text-green-600 
                     `}
                    >
                      <AiOutlineHeart></AiOutlineHeart>
                    </button> )  ) 
                    }
                </div>

                <div className="flex items-center mb-4">
                  <AiOutlineClockCircle className="text-gray-400 "></AiOutlineClockCircle>
                  <span className="text-gray-600 mx-2 ">
                    ListedOn: {ListedOn || createdAt}
                  </span>
                  <AiOutlineEye className="text-gray-400 "></AiOutlineEye>
                  <span className="text-gray-600 ml-2">
                    Views: {Views || "0"}
                  </span>
                </div>

                <div className="relative ">
                  <Image
                    priority={true}
                    height={300}
                    width={1800}
                    className=" object-cover object-center  h-full w-full rounded-lg "
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
              </div>

              {/* key information */}

              <div className="bg-white p-6 rounded-lg shadow-lg col-span-2  mx-5  md:ml-20 mb-10 flex  flex-col items-start">
                <h1 className="pb-3 font-bold text-xl md:text-2xl  text-black ">
                  Key Information
                </h1>
                <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  <div className="flex   gap-3">
                    <AiOutlineCar className="text-2xl text-gray-400"></AiOutlineCar>
                    <div>
                      <h1 className="text-gray-600 text-xl ">Condition</h1>
                      <h1 className="text-black font-bold ">{Condition}</h1>
                    </div>
                  </div>
                  <div className="flex   gap-3">
                    <GiRoad className="text-2xl text-gray-400"></GiRoad>
                    <div>
                      <h1 className="text-gray-600 text-xl ">Mileage</h1>
                      <h1 className="text-black font-bold ">{Mileage}</h1>
                    </div>
                  </div>
                  <div className="flex   gap-3">
                    <AiOutlineSetting className="text-2xl text-gray-400"></AiOutlineSetting>
                    <div>
                      <h1 className="text-gray-600 text-xl ">Transmission</h1>
                      <h1 className="text-black font-bold ">{Transmission}</h1>
                    </div>
                  </div>
                  <div className="flex   gap-3">
                    <BiTime className="text-2xl text-gray-400"></BiTime>
                    <div>
                      <h1 className="text-gray-600 text-xl ">Year</h1>
                      <h1 className="text-black font-bold ">{Year}</h1>
                    </div>
                  </div>
                  <div className="flex   gap-3">
                    <BsFillFuelPumpFill className="text-2xl text-gray-400"></BsFillFuelPumpFill>
                    <div>
                      <h1 className="text-gray-600 text-xl ">FuelType</h1>
                      <h1 className="text-black font-bold ">{FuelType}</h1>
                    </div>
                  </div>
                  <div className="flex   gap-3">
                    <BiColorFill className="text-2xl text-gray-400"></BiColorFill>
                    <div>
                      <h1 className="text-gray-600 text-xl ">Color</h1>
                      <h1 className="text-black font-bold ">{Color}</h1>
                    </div>
                  </div>
                  <div className="flex   gap-3">
                    <BiCard className="text-2xl text-gray-400"></BiCard>
                    <div>
                      <h1 className="text-gray-600 text-xl ">Doors</h1>
                      <h1 className="text-black font-bold ">{Doors}</h1>
                    </div>
                  </div>
                  <div className="flex   gap-3">
                    <BiCylinder className="text-2xl text-gray-400"></BiCylinder>
                    <div>
                      <h1 className="text-gray-600 text-xl ">Cylinders</h1>
                      <h1 className="text-black font-bold ">{Cylinders}</h1>
                    </div>
                  </div>
                  <div className="flex   gap-3">
                    <SiUnrealengine className="text-2xl text-gray-400"></SiUnrealengine>
                    <div>
                      <h1 className="text-gray-600 text-xl ">EngineSize</h1>
                      <h1 className="text-black font-bold ">{EngineSize}</h1>
                    </div>
                  </div>
                  <div className="flex   gap-3">
                    <SiAirplayaudio className="text-2xl text-gray-400"></SiAirplayaudio>
                    <div>
                      <h1 className="text-gray-600 text-xl ">VIN</h1>
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

                <p className="text-gray-600">{Details} </p>

                <h1 className="py-3 font-bold text-xl md:text-2xl  text-black ">
                  {" "}
                  Car Features
                </h1>

                <ul>
                  {CarFeatures?.map((feature, index) => (
                    <li key={index}>
                      <div className="flex items-center gap-2">
                        <IoCheckmarkDoneCircleOutline className="text-gray-400"></IoCheckmarkDoneCircleOutline>
                        <span className="text-gray-600"> {feature}</span>
                      </div>
                    </li>
                  ))}
                </ul>
                <h1 className="py-3 font-bold text-xl md:text-2xl  text-black ">
                  {" "}
                  Vehicle History
                </h1>

                <ul>
                  {VehicleHistory?.map((feature, index) => (
                    <li key={index}>
                      <div className="flex items-center gap-2">
                        <IoCheckmarkDoneCircleOutline className="text-gray-400"></IoCheckmarkDoneCircleOutline>
                        <span className="text-gray-600"> {feature}</span>
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
                Reviews({Reviews?.length || "0"})
              </h1>
              <div className="grid grid-cols-1  gap-4">
                {Reviews?.map((review, index) => (
                  <div key={index} className="">
                    <h1 className="text-black text-xl font-bold">
                      {review?.Name}
                    </h1>
                    <div className="flex items-center mb-4">
                      <AiOutlineClockCircle className="text-gray-400  "></AiOutlineClockCircle>
                      <span className="text-gray-600 mx-2 ">
                        {" "}
                        {review?.Date}
                      </span>
                    </div>
                    <p className="text-gray-600">{review?.Comment}</p>
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
