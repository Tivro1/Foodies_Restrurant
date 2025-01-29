import React, { useState } from 'react';
import useMenue from '../Hooks/useMenue';
import { GrUpgrade } from 'react-icons/gr';
import { MdDelete } from 'react-icons/md';
import UpdateItemsModal from '../Components/Modals/UpdateItemsModal';
import useAxiosWithInterceptors from '../Components/Authentications/useAxiosWithInterceptors';
import Swal from 'sweetalert2';


const ManageItems = () => {
    const [menu,refetch] = useMenue();
   
      
      const getVisiable = JSON.parse(localStorage.getItem('visiable'));
     console.log(typeof(getVisiable),getVisiable);
    const [menuData , setMenuData]= useState(null);
    const [modalVisible, setModalVisible] = useState(null);
    const [indexNumber , setIndexNumber]=useState(0);
    const axiosInstance = useAxiosWithInterceptors();

    const handleDelete = (id,index) => {
console.log(index);
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

                axiosInstance.delete(`/menu-delete/${id}?index=${index}`)
        .then(res=>
        {
             console.log(res);
             Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              refetch();
        }
        )
             
            }
          });

        
    };

    const handleUpdate = (item,index) => {
        
        setModalVisible(true); 
        setMenuData(item);
        setIndexNumber(index);
    };

   console.log(menuData);

    return (
        <>
            <div className="p-4 bg-gray-100 min-h-screen relative">
                <h1 className="text-2xl font-bold mb-4">Manage Menu Items ({menu?.length || 0})</h1>
                <div className="overflow-x-auto">
                    <table className="table-auto w-full bg-white shadow-md rounded">
                        <thead>
                            <tr className="bg-gray-200 text-left">
                                <th className="px-4 py-2">Items</th>
                                <th className="px-4 py-2">Image</th>
                                <th className="px-4 py-2">Name</th>
                                <th className="px-4 py-2">Category</th>
                                <th className="px-4 py-2">Recipe</th>
                                <th className="px-4 py-2">Price</th>
                                <th className="px-4 py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {menu?.map((item, index) => (
                                <tr key={index} className="border-b relative">
                                    <td>{index + 1}</td>
                                    <td className="px-4 py-2">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-16 h-16 rounded"
                                        />
                                    </td>
                                    <td className="px-4 py-2">{item.name}</td>
                                    <td className="px-4 py-2">{item.category}</td>
                                    <td className="px-4 py-2">{item.recipe}</td>
                                    <td className="px-4 py-2">${item.price}</td>
                                    <td className="px-4 py-2">
                                        <button
                                            className="bg-red-500 text-white px-3 py-1 rounded mr-2"
                                            onClick={() => handleDelete(item._id,index)}
                                        >
                                            <MdDelete></MdDelete>
                                        </button>
                                        <button
                                            className="bg-blue-500 text-white px-3 py-1 rounded"
                                            onClick={() => handleUpdate(item,index)}
                                        >
                                            <GrUpgrade></GrUpgrade>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modal */}
            {modalVisible &&  (
                <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
                    <UpdateItemsModal index={indexNumber} visiable = {setModalVisible} menuData={menuData}></UpdateItemsModal>
                   
                </div>
            )}
        </>
    );
};

export default ManageItems;