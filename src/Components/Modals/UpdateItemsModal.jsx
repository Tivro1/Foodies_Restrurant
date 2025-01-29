import React, { useState } from 'react';
import { set, useForm } from "react-hook-form";
import useAxiosWithInterceptors from '../Authentications/useAxiosWithInterceptors';
import axios from 'axios';
import Swal from 'sweetalert2';

import useMenue from '../../Hooks/useMenue';


const UpdateItemsModal = ({ visiable, menuData , index }) => {
    const [,refetch]=useMenue();
    const imageApi = import.meta.env.VITE_IMAGE_API_KEY;
    const imageHostingApi = `https://api.imgbb.com/1/upload?key=${imageApi}`;
    const axiosInstance = useAxiosWithInterceptors();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
     console.log(index);
    const onSubmit = async (data) => {

        console.log(menuData.image);
        console.log(data.image.length);
        const imageFile = { image: data.image[0] }
        console.log(imageFile);
        console.log(data);

        if(data.image.length>0)
        {
            const res = await axios.post(imageHostingApi, imageFile, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            const itemsData = {
                index:index,
                name: data.name,
                recipe: data.recipe,
                image: res?.data?.data.display_url,
                category: data.category.toLowerCase(),
                price: parseInt(data.price, 10),
            };
            axiosInstance.patch(`/update/${menuData._id}`, itemsData)
                .then(res => {
                    if (res.data.acknowledged) {
                        Swal.fire({
                            title: `${data.name} Updated`,
                            icon: "success",
                            draggable: true
                        });
                        visiable(false)
                        refetch();
                    }
                }
                )
        }else{
            const itemsData = {
                index:index,
                name: data.name,
                recipe: data.recipe,
                image: menuData.image,
                category: data.category.toLowerCase(),
                price: parseInt(data.price, 10),
            };
            axiosInstance.patch(`/update/${menuData._id}`, itemsData)
                .then(res => {
                    if (res.data.acknowledged) {
                        Swal.fire({
                            title: `${data.name} Updated`,
                            icon: "success",
                            draggable: true
                        });
                        visiable(false)
                       refetch();
                    }
                }
                )
        }
       
     
           
        
    };

    //   Cencel Button
    const handelCencel = () => {
        visiable(false)
    }

    return (
        <>

            <div className='max-w-md mx-auto p-4 border rounded shadow-md bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 w-full'>
                <h1 className="text-2xl font-bold mb-4">Add Recipe</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Name Field */}
                    <div>
                        <label className="block mb-1 font-medium">Name</label>
                        <input
                            type="text"
                          
                            defaultValue={menuData?.name}
                            {...register("name")}
                            className="w-full border p-2 rounded"
                            placeholder="Enter recipe name"
                        />
                        {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
                    </div>

                    {/* Image Field */}
                    <div>
                        <label className="block mb-1 font-medium">Upload Image</label>

                        <input
                            {...register("image",)}
                           
                            type="file" className="file-input file-input-bordered file-input-accent w-full max-w-xs" />
                    </div>

                    {/* Category Field */}
                    <div>
                        <label className="block mb-1 font-medium">Category</label>
                        <select
                            id="category"
                            className="select select-bordered w-full"
                            {...register("category")}
                            defaultValue={menuData?.category || ""} // Set default value here
                        >
                            <option value={menuData?.category} disabled selected>Select Category</option> {/* Default placeholder */}
                            <option value="Salad">Salad</option>
                            <option value="Pizza">Pizza</option>
                            <option value="Soup">Soup</option>
                            <option value="Deserts">Deserts</option>
                            <option value="Drinks">Drinks</option>
                        </select>
                        {errors.category && (
                            <span className="text-red-500 text-sm">{errors.category.message}</span>
                        )}
                    </div>


                    {/* Recipe Field */}
                    <div>
                        <label className="block mb-1 font-medium">Recipe</label>
                        <textarea
                            {...register("recipe")}
                            className="w-full border p-2 rounded"
                           
                            defaultValue={menuData?.recipe}
                            placeholder="Enter recipe details"
                        ></textarea>
                        {errors.recipe && <span className="text-red-500 text-sm">{errors.recipe.message}</span>}
                    </div>

                    {/* Price Field */}
                    <div>
                        <label className="block mb-1 font-medium">Price</label>
                        <input
                            type="number"
                            step="0.01"
                          
                            defaultValue={menuData?.price}
                            {...register("price")}
                            className="w-full border p-2 rounded"
                            placeholder="Enter price"
                        />
                        {errors.price && <span className="text-red-500 text-sm">{errors.price.message}</span>}
                    </div>

                    {/* Submit Button */}
                    <div className='flex flex-row justify-between'>
                        <button
                            type="submit"
                            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500"
                        >
                            Submit
                        </button>
                        <button
                            onClick={() => handelCencel()}
                            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500">
                            Cencel
                        </button>
                    </div>
                </form>
            </div>


        </>
    );
};

export default UpdateItemsModal;




