import Image from 'next/image';
import React from 'react';

const page = () => {
    return (
        <div>
            
            {/* banner  */}
            <div className="relative  z-10 ">
        <Image
          priority={true}
          height={500}
          width={1500}
          className="object-cover object-center"
          src="https://images.unsplash.com/photo-1605816988069-b11383b50717?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1488&q=80"
          alt="car"
        />
        <div className="absolute inset-0 flex items-center justify-center ">
          <h1 className="text-white font-bold text-2xl   sm:text-4xl xl:text-7xl ">Inventory</h1>
        </div>
      </div>
        {/* end of banner  */}
        </div>
    );
};

export default page;