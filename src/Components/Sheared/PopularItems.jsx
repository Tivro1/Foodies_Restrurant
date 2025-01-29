const PopularItems = ({ item }) => {
    const { name, image, price, recipe } = item || '';
  
    return (
      <div className="grid grid-cols-3 gap-6 hover:border-t-2 hover:border-b-0 bg-black bg-opacity-90  overflow-hidden items-center border-b-2  p-4 rounded-lg shadow-md">
        {/* Image Section */}
        <img
          className="w-[120px] h-[120px] object-cover rounded-[0px_200px_200px_200px]"
          src={image}
          alt={name || "Not found"}
        />
  
        {/* Content Section */}
        <div className="col-span-2 space-y-2">
          <h3 className="text-lg font-semibold text-white">
            {name} <span className="text-white">-------</span>
          </h3>
          <p className="text-sm text-white">{recipe}</p>
        </div>
  
        {/* Price Section */}
        <p className="text-right text-lg font-bold text-white">${price}</p>
      </div>
    );
  };
  
  export default PopularItems;
  