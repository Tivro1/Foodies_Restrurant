import { useContext } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { IoFastFoodOutline } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useCart from "../../Hooks/useCart";

const Navbar = () => {
  const { user, signout } = useContext(AuthContext);
   const [cart] = useCart();
   const navigate = useNavigate()
   const handelCartToDashboard = ()=>
   {
     navigate("/dashboard/cart");
   }
  const handleLogout = () => {
    signout()
      .then(() => {
        alert("Logged out successfully!");
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };

  return (
    <div className="fixed top-0 w-[1024px] flex flex-row justify-between bg-[#686f6956] pl-3 pr-3 items-center pb-5 pt-5 z-50 text-white">
      <div>
        <span className="flex flex-row items-center text-3xl font-bold">
          <IoFastFoodOutline className="text-orange-300 font-bold" /> Foodies
        </span>
      </div>

      <div className="flex flex-row gap-3 items-center">
        <div className="flex gap-3">
          <NavLink to="/">HOME</NavLink>
         
          <NavLink to="dashboard">DASHBOARD</NavLink>
          <NavLink to="/menue">OUR MENUE</NavLink>
          <NavLink to="/shop">OUR SHOP</NavLink>
        </div>
        <div className="flex items-center gap-3">
          
          <button 
          onClick={()=>handelCartToDashboard()}
          className="flex flex-row gap-2 justify-center items-center ">
          <FiShoppingCart className="text-2xl" />
            <div className="badge badge-secondary">+{cart.length}</div>
          </button>
          {!user ? (
            <>
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/reg">SignUp</NavLink>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-red-500 px-3 py-1 rounded text-white hover:bg-red-600 transition"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
