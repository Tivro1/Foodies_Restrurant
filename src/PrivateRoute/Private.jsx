
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Private = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location = useLocation();
    if(loading)
        {
             return <span className="loading loading-ring loading-lg"></span>
        }
    if(user)
    {
         return children;
    }
    return (
        <div>
             <Navigate to="/login" state={{from: location}} replace></Navigate>
        </div>
    );
};
Private.propTypes = {
    children: PropTypes.node.isRequired, 
  };
export default Private;