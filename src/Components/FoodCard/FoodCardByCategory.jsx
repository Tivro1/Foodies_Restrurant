import React, { useContext, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
import useCart from '../../Hooks/useCart';

const FoodCardByCategory = ({ item }) => {


  // Number of items per page
  const itemsPerPage = 6;

  // State for current page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate indices for pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Slice the items for the current page
  const currentItems = item?.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate the total number of pages
  const totalPages = Math.ceil(item?.length / itemsPerPage);

  const {user}=useContext(AuthContext);
  const navigate = useNavigate();
  const [,refetch]= useCart();
//  Handel Cart function
  
            const handelCart = (food)=>
            {
             
             
               if(!user)
               {
                Swal.fire({
                  title: "You are not Login",
                  text: "Please Loging befor Order",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Login"
                }).then((result) => {
                  if (result.isConfirmed) {
                    navigate("/login")
                  }
                });
               }
               else
               {
                    const cartData = {
                       email:user.email,
                       name:food.name,
                       recipe:food.recipe,
                       image:food.image,
                       price:food.price,
                       category:food.category

                    }
                   
                    axios.post('http://localhost:5000/cart',cartData)
                    .then(res => 
                    {
                      Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${food.name}`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                      refetch();
                    }
                    )
               }
              
            }
 
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {currentItems?.map(item => (
          <div key={item._id} className="border rounded-lg shadow-lg p-4">
            <img 
              src={item.image} 
              alt={item.name} 
              className="w-full h-48 object-cover rounded-[0px_180px_180px_180px]" 
            />
            <h2 className="text-lg font-bold mt-4">{item.name}</h2>
            <p className="text-gray-600 mt-2">{item.recipe}</p>
            <p className="text-blue-500 font-semibold mt-4">${item.price.toFixed(2)}</p>
            <button
            
             onClick={()=> handelCart(item)}
            
            className='p-2 mt-2 border-b-[1px] border-[#BB8506] bg-gray-100 hover:bg-[#1F2937] hover:text-white rounded-md'>
              Add to cart
            </button>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center space-x-2 mt-4">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 border bg-gray-200 rounded-md hover:bg-gray-300"
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={`p-2 border rounded-md ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-2 border bg-gray-200 rounded-md hover:bg-gray-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default FoodCardByCategory;
