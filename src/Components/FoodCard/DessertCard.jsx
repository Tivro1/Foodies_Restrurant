import React from 'react';
import useDessert from '../../Hooks/useDessert';

const DessertCard = () => {
    const [desserts] = useDessert();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {desserts?.map(dessert => (
                <div key={dessert._id} className="border rounded-lg shadow-lg p-4">
                    <img 
                        src={dessert.image} 
                        alt={dessert.name} 
                        className="w-full h-48 object-cover rounded-[0px_180px_180px_180px]" 
                    />
                    <h2 className="text-lg font-bold mt-4">{dessert.name}</h2>
                    <p className="text-gray-600 mt-2">{dessert.recipe}</p>
                    <p className="text-blue-500 font-semibold mt-4">${dessert.price.toFixed(2)}</p>
                    <button className='p-2 mt-2 border-b-[1px] border-[#BB8506] bg-gray-100 hover:bg-[#1F2937] hover:text-white rounded-md'>Order Now</button>
                </div>
            ))}
        </div>
    );
};

export default DessertCard;
