import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";


const AdminRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const [isAdmin, isAdminLoading]=useAdmin();
    const location = useLocation();
    if(loading || isAdminLoading)
        {
             return <span className="loading loading-ring loading-lg"></span>
        }
    if(user && isAdmin)
    {
         return children;
    }
    return (
        <div>
             <Navigate to="/login" state={{from: location}} replace></Navigate>
        </div>
    );
};

export default AdminRoute;