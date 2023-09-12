"use client";

import FavouriteCard from "@/components/favourite-card/FavouriteCard";
import Scale from "@/components/scaleton/Scale";
import GetCurrentUser from "@/utils/getCurrentUser";
import GetFavData from "@/utils/getFavData";
import React from "react";

const page = () => {
  // get favdata from mock api
  const { data: favData, refetch, isLoading } = GetFavData();

  //  get loggin user info
  const { data: user } = GetCurrentUser();

  // filter fav data by user email
  const filterFavData = favData?.filter((item) => item.email === user?.email);
//   console.log(filterFavData);
  return (
    <div>
      {/* // favorite list */}

      <h1 className=" p-5 text-center text-black font-bold md:text-5xl text-2xl bg-gray-100 ">
        {" "}
        Favourite list{" "}
      </h1>

      {isLoading ? (
        <div className="text-center  text-3xl min-h-screen flex items-center justify-center  bg-gray-100">
          <Scale />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-4 w-full  min-h-screen p-10 bg-gray-100">
          {filterFavData.length ? (
            filterFavData?.map((product) => (
              <FavouriteCard
                key={product.id}
                refetch={refetch}
                product={product}
              >
                {" "}
                {product.id}{" "}
              </FavouriteCard>
            ))
          ) : (
            <h1 className="text-3xl font-bold text-gray-400">
              No favourite car 
            </h1>
          )}
        </div>
      )}
    </div>
  );
};

export default page;
