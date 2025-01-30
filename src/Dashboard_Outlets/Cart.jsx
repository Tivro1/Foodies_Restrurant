
import useCart from '../Hooks/useCart';
import { FaDeleteLeft } from 'react-icons/fa6';
import Swal from 'sweetalert2';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Cart = () => {
    const [cart] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
console.log(cart);
const [,refetch]= useCart();
// Handel Delet Cart
const handelDelet = (id)=>
{
   
     Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
    
        axios.delete(`https://serverforfoodies.vercel.app/carts/${id}` )
        .then(res=>
        {
            Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
                  refetch();
        }
        ).catch(error => {
            console.error('Error deleting user:', error);
          });

        }
      });
}

// HandelPayment



    return (
        <div className="container mx-auto px-4 py-6 ">
            {/* Summary Section */}
            <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-8 rounded-lg shadow-lg mb-6
             border-b-4 border-l-4 border-[#BB8506]">
    <h2 className="text-3xl font-extrabold mb-4">Order Summary</h2>
    <div className="flex justify-between items-center border-b border-blue-300 pb-4 mb-4">
        <p className="text-lg">Total Orders:</p>
        <span className="text-2xl font-bold">{cart.length}</span>
    </div>
    <div className="flex justify-between items-center border-b border-blue-300 pb-4 mb-6">
        <p className="text-lg">Total Price:</p>
        <span className="text-2xl font-bold">${totalPrice.toFixed(2)}</span>
    </div>
    <button className="w-full bg-yellow-400 text-blue-900 font-semibold py-3 rounded-lg hover:bg-yellow-500 transition duration-300">
    <Link to="/dashboard/payment"> Proceed to Payment</Link>
    </button>
</div>
         

            {/* Cart Items Table */}
            <div className="bg-white p-6 rounded-md shadow-md">
                <ul className="grid grid-cols-3 gap-4 font-bold text-lg mb-4">
                    <li>Item Name</li>
                    <li>Price</li>
                    <li>Action</li>
                </ul>
                <div className="divide-y divide-gray-200">
                    {cart.map((carts, index) => (
                        <div
                            key={index}
                            className="grid grid-cols-3 items-center gap-4 py-4"
                        >
                            {/* Item Image and Name */}
                            <div className="flex items-center gap-4">
                                <img
                                    src={carts.image}
                                    alt={carts.name}
                                    className="w-12 h-12 rounded-md object-cover"
                                />
                                <h2 className="text-gray-700">{carts.name}</h2>
                            </div>
                            {/* Price */}
                            <h1 className="text-gray-700">${carts.price.toFixed(2)}</h1>
                            {/* Delete Button */}
                            <button 
                             
                             onClick={()=>handelDelet(carts._id)}

                            className="bg-red-500 rounded-md flex items-center justify-center text-white px-2 py-2 w-[50px]   hover:bg-red-600">
                              <FaDeleteLeft className='text-xl'></FaDeleteLeft>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Cart;
