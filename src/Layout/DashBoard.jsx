import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";

const DashBoard = () => {
    const [isActive ]= useAdmin();
    return (
        <div className="flex flex-row min-h-screen bg-gray-50">
            {/* Sidebar */}
            <div className="w-[300px] bg-blue-700 text-white p-6">
                <strong className="block text-center text-2xl font-bold mb-6">
                    Dashboard
                </strong>
                <hr className="border-gray-400 mb-6" />
                <ul className="flex flex-col gap-4">
                    {
                        isActive&& <div>

<li>
                        <NavLink
                            to="admin"
                            className={({ isActive }) =>
                                isActive
                                    ? "flex items-center gap-2 px-4 py-2 bg-blue-500 rounded-lg text-white shadow-md"
                                    : "flex items-center gap-2 px-4 py-2 hover:bg-blue-600 rounded-lg"
                            }
                        >
                            🏠 Admin
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="additems"
                            className={({ isActive }) =>
                                isActive
                                    ? "flex items-center gap-2 px-4 py-2 bg-blue-500 rounded-lg text-white shadow-md"
                                    : "flex items-center gap-2 px-4 py-2 hover:bg-blue-600 rounded-lg"
                            }
                        >
                            🚩 Add Items
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="manage items"
                            className={({ isActive }) =>
                                isActive
                                    ? "flex items-center gap-2 px-4 py-2 bg-blue-500 rounded-lg text-white shadow-md"
                                    : "flex items-center gap-2 px-4 py-2 hover:bg-blue-600 rounded-lg"
                            }
                        >
                            🍵 Manage Items
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="users"
                            className={({ isActive }) =>
                                isActive
                                    ? "flex items-center gap-2 px-4 py-2 bg-blue-500 rounded-lg text-white shadow-md"
                                    : "flex items-center gap-2 px-4 py-2 hover:bg-blue-600 rounded-lg"
                            }
                        >
                            👤 Users
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="mangeorder"
                            className={({ isActive }) =>
                                isActive
                                    ? "flex items-center gap-2 px-4 py-2 bg-blue-500 rounded-lg text-white shadow-md"
                                    : "flex items-center gap-2 px-4 py-2 hover:bg-blue-600 rounded-lg"
                            }
                        >
                            🛍️ Orders
                        </NavLink>
                    </li>

                        </div>
                               
                    }
<div className="divider"></div>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? "flex items-center gap-2 px-4 py-2 bg-blue-500 rounded-lg text-white shadow-md"
                                    : "flex items-center gap-2 px-4 py-2 hover:bg-blue-600 rounded-lg"
                            }
                        >
                            🏠 User Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="reservation"
                            className={({ isActive }) =>
                                isActive
                                    ? "flex items-center gap-2 px-4 py-2 bg-blue-500 rounded-lg text-white shadow-md"
                                    : "flex items-center gap-2 px-4 py-2 hover:bg-blue-600 rounded-lg"
                            }
                        >
                            🚩 Reservation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="cart"
                            className={({ isActive }) =>
                                isActive
                                    ? "flex items-center gap-2 px-4 py-2 bg-blue-500 rounded-lg text-white shadow-md"
                                    : "flex items-center gap-2 px-4 py-2 hover:bg-blue-600 rounded-lg"
                            }
                        >
                            🛒 My Cart
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="review"
                            className={({ isActive }) =>
                                isActive
                                    ? "flex items-center gap-2 px-4 py-2 bg-blue-500 rounded-lg text-white shadow-md"
                                    : "flex items-center gap-2 px-4 py-2 hover:bg-blue-600 rounded-lg"
                            }
                        >
                            ⭐ Add a Review
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="payment-history"
                            className={({ isActive }) =>
                                isActive
                                    ? "flex items-center gap-2 px-4 py-2 bg-blue-500 rounded-lg text-white shadow-md"
                                    : "flex items-center gap-2 px-4 py-2 hover:bg-blue-600 rounded-lg"
                            }
                        >
                            🛍️ Payment History
                        </NavLink>
                    </li>
                </ul>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6 bg-gray-300 bg-opacity-25">
                <Outlet />
            </div>
        </div>
    );
};

export default DashBoard;
