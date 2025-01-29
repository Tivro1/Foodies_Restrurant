import { useQuery } from "@tanstack/react-query";
import useAxiosWithInterceptors from "../Components/Authentications/useAxiosWithInterceptors";


const useUser = () => {
  const axiosInstance = useAxiosWithInterceptors();

  const { refetch, data: users = [] } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axiosInstance.get(`/users`);
      return res.data;
    },
  });

  return [users, refetch];
};

export default useUser;
