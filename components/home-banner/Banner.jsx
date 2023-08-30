import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiRightArrowAlt } from "react-icons/bi";

const Banner = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
          <div className="max-w-xl mb-6">
            <div>
             
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Welcome to Drive-Wave 
              <br className="hidden md:block" />
             Best place to buy{' '}
              <span className="inline-block text-red-700">
             Your dream  car
              </span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
            Welcome to DriveWave, your ultimate destination for all things automotive! At DriveWave, we are not just another car-selling website; we are a driving force that is dedicated to providing you with the finest selection of vehicles and a comprehensive car-related experience.
            </p>
          </div>
          <div className="flex flex-col items-center md:flex-row">
            <Link 
            href="/inventory"
            className="inline-flex  bg-red-600 items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded-full shadow-md md:w-auto md:mr-4 md:mb-0  hover:bg-black  "
            >
              <span className="mr-3 ">Start Shopping</span>
              <BiRightArrowAlt/>
              
            </Link>
           
          </div>
        </div>
        <div className="relative lg:w-1/2">
          <Image
            priority={true}
            height={500}
            width={500}
            className="object-cover w-full h-56  shadow-lg sm:h-96"
            src="https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
            alt=""
          />
         
        </div>
      </div>
    </div>
    );
};

export default Banner;