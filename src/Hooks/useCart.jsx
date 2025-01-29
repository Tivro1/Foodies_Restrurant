import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const useCart = () => {

    const {user}=useContext(AuthContext);

//    TanStack Query
   const { refetch, data : cart=[]}= useQuery({

      queryKey:['cart',user?.email],
      queryFn: async ()=>
      {
         const res = await axios.get(`http://localhost:5000/carts?email=${user.email}`);
         return res.data;
      }
   })
    
     return [cart,refetch]

};

export default useCart;