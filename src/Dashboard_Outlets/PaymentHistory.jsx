import React, { useContext, useEffect, useState } from 'react';
import useAxiosWithInterceptors from '../Components/Authentications/useAxiosWithInterceptors';
import { AuthContext } from '../AuthProvider/AuthProvider';

const PaymentHistory = () => {
    const axiosInstance = useAxiosWithInterceptors();
    const [history, setHistory] = useState([]);
    const {user}=useContext(AuthContext);
    useEffect(() => {
        axiosInstance.get('/payment-history')
            .then(res => {
                // setHistory(res.data);
                console.log(res.data);
                const historyData = res.data.filter(ite=> ite.email === user.email)
                console.log(historyData);
                setHistory(historyData);
            })
            .catch(err => {
                console.error('Error fetching payment history:', err);
            });
    }, []);

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <h2 className="text-2xl font-bold mb-4">Payment History</h2>
            <div className="overflow-x-auto">
                {history.length > 0 ? (
                    <table className="table-auto w-full border-collapse border border-gray-200 shadow-md bg-white">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="border border-gray-300 px-4 py-2">#</th>
                                <th className="border border-gray-300 px-4 py-2">Transaction ID</th>
                                <th className="border border-gray-300 px-4 py-2">Email</th>
                                <th className="border border-gray-300 px-4 py-2">Price (USD)</th>
                                <th className="border border-gray-300 px-4 py-2">Date</th>
                                <th className="border border-gray-300 px-4 py-2">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {history.map((item, index) => (
                                <tr key={item._id} className="text-center hover:bg-gray-50">
                                    <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                                    <td className="border border-gray-300 px-4 py-2">{item.transactionId}</td>
                                    <td className="border border-gray-300 px-4 py-2">{item.email}</td>
                                    <td className="border border-gray-300 px-4 py-2">${item.price}</td>
                                    <td className="border border-gray-300 px-4 py-2">{new Date(item.data).toLocaleDateString()}</td>
                                    <td className={`border border-gray-300 px-4 py-2 font-semibold ${
                                        item.status === 'pending..' ? 'text-yellow-600' : 'text-green-600'
                                    }`}>
                                        {item.status}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p className="text-center text-gray-500 mt-4">No payment history found.</p>
                )}
            </div>
        </div>
    );
};

export default PaymentHistory;
