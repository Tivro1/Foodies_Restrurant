import React from 'react';
import useUser from '../Hooks/useUser';
import { FaUser } from 'react-icons/fa';
import Swal from 'sweetalert2';
import axios from 'axios';
import { FaDeleteLeft } from 'react-icons/fa6';

const Users = () => {
    // Example user data (staff in a restaurant)
   const [users,refetch]= useUser();
  

 const handelUpdate = (user)=>
 {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes Do It!"
      }).then((result) => {
        if (result.isConfirmed) {
    
        axios.patch(`https://serverforfoodies.vercel.app/users/${user._id}` )
        .then(res=>
        {
            Swal.fire({
                    title: `${user.name} is Admin Now`,
                    text: "Updated Successfully",
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
        
            axios.delete(`https://serverforfoodies.vercel.app/users/${id._id}` )
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

    return (
        <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Restaurant Staff</h2>
            <table className="min-w-full table-auto">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="py-3 px-4 border-b text-left text-gray-600">ID</th>
                        <th className="py-3 px-4 border-b text-left text-gray-600">Name</th>
                        <th className="py-3 px-4 border-b text-left text-gray-600">Role</th>
                        <th className="py-3 px-4 border-b text-left text-gray-600">Email</th>
                        <th className="py-3 px-4 border-b text-left text-gray-600">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {users?.map((user,index) => (
                        <tr key={user.id} className="border-b hover:bg-gray-50">
                            <td className="py-3 px-4">{index +1}</td>
                            <td className="py-3 px-4">{user.name}</td>
                            <td className="py-3 px-4">{
                                
                                user.role === 'admin'? 'Admin' :<button onClick={()=> handelUpdate(user)}><FaUser></FaUser></button>
                                
                                }</td>
                            <td className="py-3 px-4">{user.email}</td>
                            <td className="py-3 px-4">
                                <span
                                   onClick={()=>handelDelet(user)}
                                >
                                    <FaDeleteLeft></FaDeleteLeft>
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Users;
