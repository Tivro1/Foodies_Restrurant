import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const Regsistration = () => {

     const { createUser, updateData} = useContext(AuthContext);
      const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => 
      {
         createUser(data.email, data.password,data.name)
         .then(res=>{
            updateData({ displayName: data.name}).then(info=>

            {
                const senduserInfo = {
                     email:res.user.email || "No Name Available",
                     name:res.user.displayName

                }
                console.log(res.user.email);
                console.log(res);
                axios.post('https://serverforfoodies.vercel.app/users',senduserInfo)
                .then(res =>
                {
                    Swal.fire({
                        title: "User Added to Database",
                        icon: "success",
                        draggable: true
                      });
                }
                )
            }
            )
         })
         navigate("/")
         console.log(data.email);
         
      }
    
    
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold text-center mb-4">Register</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Name Field */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1" htmlFor="name">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        {...register("name" , { required: true })}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                        placeholder="Enter your name"
                    />
                     {errors.name && <span className='text-red-700 font-semibold'>This field is required</span>}
                </div>

                {/* Email Field */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        {...register("email" , { required: true })}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                        placeholder="Enter your email"
                    />
                     {errors.email && <span className='text-red-700 font-semibold'>This field is required</span>}
                </div>

                {/* Password Field */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1" htmlFor="password">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        {...register("password" , { required: true ,maxLength: 32 , minLength:6 ,

                            pattern:/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/


                         })}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                        placeholder="Enter your password"
                    />
                     {/* {errors.password && <span className='text-red-700 font-semibold'>This field is required </span>} */}
                     {errors.password?.type ==='pattern' && <span className='text-red-700 font-semibold'>Password must be at least 6 characters, include uppercase, lowercase, number, and special character  </span>}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
                >
                    Register
                </button>
            </form>
        </div>
    </div>
    );
};

export default Regsistration;