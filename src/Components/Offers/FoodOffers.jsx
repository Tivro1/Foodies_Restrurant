import React from "react";

const FoodOffers = () => {
  const offers = [
    {
      name: "Grilled Chicken Platter",
      description: "Juicy grilled chicken served with a side of vegetables and garlic bread.",
      price: "$12.99",
      image: "https://images.squarespace-cdn.com/content/v1/5c61c1d24d546e66bcd25237/1627664381237-BJRWHG236NXZELRNN398/Juicy-Grilled-Chicken-Platter-web.jpg", 
    },
    {
      name: "Spaghetti Special",
      description: "Classic Italian spaghetti with a rich tomato sauce and parmesan.",
      price: "$9.99",
      image: "https://www.thechunkychef.com/wp-content/uploads/2019/09/One-Pot-Spaghetti-feat-440x375.jpg",
    },
    {
      name: "Tandoori Delight",
      description: "Spicy tandoori chicken with mint chutney and naan bread.",
      price: "$14.99",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPvR66OCdynmxzqlnuRfGaDkbGHvmUFvKKuQ&s",
    },
  ];

  return (
    <div className="bg-gray-100 py-10 px-5">
     
      <p className="text-center text-gray-600 mb-10">
        Discover the best deals on our most delicious dishes. Available for a limited time!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {offers.map((offer, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={offer.image}
              alt={offer.name}
              className="w-full h-[200px] object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800">{offer.name}</h3>
              <p className="text-gray-600 text-sm mt-2">{offer.description}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-yellow-500 font-bold text-lg">{offer.price}</span>
                <button className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-colors">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodOffers;
