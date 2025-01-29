import axios from "axios";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa6";
import useAxiosWithInterceptors from "../Components/Authentications/useAxiosWithInterceptors";
import Swal from "sweetalert2";

const AddItems = () => {
    const imageApi = import.meta.env.VITE_IMAGE_API_KEY;
    const imageHostingApi = `https://api.imgbb.com/1/upload?key=${imageApi}`;
    const axiosInstance = useAxiosWithInterceptors();
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = async(data) => 
        {
            const imageFile = {image: data.image[0]}
          const res=  await axios.post(imageHostingApi,imageFile,{
                headers:{
                    'Content-Type':'multipart/form-data'
                }
            })
           if(res.data.status === 200)
           {    const itemsData = {
            name: data.name, 
            recipe: data.recipe, 
            image: res.data.data.display_url, 
            category: data.category.toLowerCase(), 
            price: parseInt(data.price, 10),
          };
               axiosInstance.post('/menu',itemsData)
               .then(res=>
               {
                   if(res.data.acknowledged)
                   {
                    Swal.fire({
                        title: `${data.name} added`,
                        icon: "success",
                        draggable: true
                      });
                      reset();
                   }
               }
               )
           }
                
                
        };
   
    return (
        <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
            <h2 className="text-xl font-bold mb-4">Add New Item</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Item Name */}
                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="firstName">Item Name</label>
                    <input
                        id="firstName"
                        {...register("name")}
                        className="input input-bordered w-full"
                        placeholder="Enter item name"
                    />
                </div>

                {/* Category Select */}
                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="category">Category</label>
                    <select
                        id="category"
                        className="select select-bordered w-full"
                        {...register("category")}
                    >
                        <option disabled selected>Select Category</option>
                        <option value="Salad">Salad</option>
                        <option value="Pizza">Pizza</option>
                        <option value="Soup">Soup</option>
                        <option value="Deserts">Deserts</option>
                        <option value="Drinks">Drinks</option>
                    </select>
                </div>

                {/* Recipe Textarea */}
                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="recipe">Recipe</label>
                    <textarea
                        id="recipe"
                        {...register("recipe")}
                        className="textarea textarea-bordered w-full"
                        placeholder="Enter recipe details"
                    />
                </div>

                {/* Price Input */}
                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="price">Price</label>
                    <input
                        id="price"
                        type="number"
                        {...register("price")}
                        className="input input-bordered w-full"
                        placeholder="Enter price"
                    />
                </div>

                {/* Image Upload */}
                <div>
                    <label  className="block text-sm font-medium mb-1" htmlFor="image">Upload Image</label>
                    <input
                        id="image"
                        type="file"
                        {...register("image")}
                        className="file-input w-full"
                    />
                </div>

                {/* Submit Button */}
                <div className="flex justify-center mt-6">
            <button type="submit" className="flex items-center gap-2 px-4 py-2 text-white bg-green-600 hover:bg-green-500 rounded-md shadow-md transition duration-200">
                Add Items <FaUtensils className="text-lg" />
            </button>
        </div>
            </form>
        </div>
    );
};

export default AddItems;
