import axios from 'axios';
import React from 'react';
import { AiFillStar } from 'react-icons/ai';

const FavouriteCard = ({product,refetch}) => {
    const {Img,Name,Details,Price, Rating,id} = product
    const starIcons = [];
    for (let i = 0; i < Rating; i++) {
      starIcons.push(<AiFillStar key={i} fill="brown" />);
    }

    // delete fav function
const deleteFav = async (id) => {
        try {
            const response = await axios.delete(`https://64f038f18a8b66ecf7794bb9.mockapi.io/favourite/${id}`)
            console.log(response)
            refetch()
            alert("successfully deleted")
        }  
        catch (error) {
            console.log(error)
        }
    }


    return (
        <>
           <div className="flex max-w-xl overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <div className="w-1/3 bg-cover " style={{ backgroundImage: `url('${Img}')` }}></div>
    
    

    <div className="w-2/3 p-4 md:p-4">
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">{Name}</h1>

        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{Details.slice(0,80)}...</p>

        <div className="flex mt-2 item-center">
        {starIcons}
        </div>

        <div className="flex justify-between mt-3 item-center">
<h1 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl"> {Price} </h1>
            <button onClick={()=>deleteFav(id)} className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-red-800 rounded  hover:bg-gray-700  focus:outline-none focus:bg-gray-700">Delete </button>
        </div>
    </div>
</div> 
        </>
    );
};

export default FavouriteCard;