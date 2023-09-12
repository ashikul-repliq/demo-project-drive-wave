import axios from "axios";
import Link from "next/link";
import React from "react";
import { toast } from "react-hot-toast";
import { AiFillDelete, AiFillStar, AiOutlineEye } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

const FavouriteCard = ({ product, refetch }) => {
  const { Img, Name, Details, Price, Rating, id } = product;
  const starIcons = [];
  for (let i = 0; i < Rating; i++) {
    starIcons.push(<AiFillStar key={i} fill="gold" />);
  }

  // delete fav function
  const deleteFav = async (id) => {
    try {
      const response = await axios.delete(
        `https://64f038f18a8b66ecf7794bb9.mockapi.io/favourite/${id}`
      );
      console.log(response);
      refetch();

      toast.success("successfully deleted");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex max-w-xl overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <div
          className="w-1/3 bg-cover "
          style={{ backgroundImage: `url('${Img}')` }}
        ></div>

        <div className="w-2/3 p-4 md:p-4">
          <h1 className="text-xl font-bold text-gray-800 dark:text-white">
            {Name}
          </h1>

          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {Details.slice(0, 80)}...
          </p>

          <div className="flex mt-2 item-center">{starIcons}</div>

          <div className="flex justify-between mt-3 items-center">
            <h1 className="text-lg font-bold text-emerald-400  md:text-xl">
              {" "}
              ${Price}{" "}
            </h1>
           
            <button
              onClick={() => deleteFav(id)}
              className="px-2 py-1 text-4xl font-bold   transition-colors duration-300 transform text-red-600   hover:text-red-700"
            >
              {/* <AiFillDelete></AiFillDelete> */}
              <MdDelete></MdDelete>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FavouriteCard;
