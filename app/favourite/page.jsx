"use client"

import FavouriteCard from '@/components/favourite-card/FavouriteCard';
import GetCurrentUser from '@/utils/getCurrentUser';
import GetFavData from '@/utils/getFavData';
import React from 'react';

const page = () => {
     // get favdata from mock api
  const  {data:favData, refetch , isLoading } = GetFavData()
  console.log(favData)
 //  get loggin user info 
 const { data:user } = GetCurrentUser();
 
  // filter fav data by user id
    const filterFavData = favData?.filter((item) => item.email === user?.email);
    console.log(filterFavData)
    return (
        <div>
           
            {/* // favorite list */}

            <h1 className=" p-3 text-center text-black font-bold md:text-5xl text-2xl bg-gray-100 ">  Favourite list  </h1>
             

            {isLoading ? (
        <div className="text-center  text-3xl min-h-screen flex items-center justify-center  bg-gray-100">
          loading...
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-4  min-h-screen p-10 bg-gray-100">
          {filterFavData.length? filterFavData?.map((product) => (
    <FavouriteCard key={product.id} refetch={refetch} product={product}>
              {" "}
              {product.id}{" "}
            </FavouriteCard>
          )) : <h1 className="text-3xl font-bold text-gray-400">No favourite item</h1>}
        </div>
      )}

            



        </div>
    );
};

export default page;