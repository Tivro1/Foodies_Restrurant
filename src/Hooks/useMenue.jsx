import { useEffect, useState } from "react";
import useAxiosWithInterceptors from "../Components/Authentications/useAxiosWithInterceptors";
import { useQuery } from "@tanstack/react-query";


const useMenue = () => {
    const axiosInstance = useAxiosWithInterceptors();

  
    const { refetch, data: menue = [] } = useQuery({
        queryKey: ["menue"],
        queryFn: async () => {
          const res = await axiosInstance.get(`/menu`);
          return res.data;
        },
      });
    
      return [menue, refetch];


};

export default useMenue;







