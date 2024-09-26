import { useState, useEffect } from "react";
import axios from "axios";
import { API_END_POINT_admin } from "../utils/constants";

const AdminReport = () => {
  const [cars, setCars] = useState([]);
  const [users, setUsers] = useState([]);
  const [revenue, setRevenue] = useState(0);

  useEffect(() => {
    const getCars = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8000/api/admin/getallcars",
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );

        setCars(res.data);

        let sum = 0;
        res.data.forEach((car) => {
          sum += car.rentalPricePerDay;
        });

        setRevenue(sum);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };

    const getUsers = async () => {
      try {
        const res = await axios.get(
          `${API_END_POINT_admin}/getallusers`,
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );

        setUsers(res.data);

        
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };

    getCars();
    getUsers();
  }, []);

  return (
    <div className=" p-6 ml-[-50%] mt-10">
      <div className="max-w-4xl mx-auto bg-gray-100 shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Admin Dashboard</h1>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-4 bg-blue-100 rounded-lg">
            <h2 className="text-lg font-semibold text-blue-800">Total Users Listed</h2>
            <p className="text-2xl font-bold text-blue-900">{users.length}</p>
          </div>
  
          <div className="p-4 bg-green-100 rounded-lg">
            <h2 className="text-lg font-semibold text-green-800">Total Cars Listed</h2>
            <p className="text-2xl font-bold text-green-900">{cars.length}</p>
          </div>
  
          <div className="p-4 bg-yellow-100 rounded-lg sm:col-span-2">
            <h2 className="text-lg font-semibold text-yellow-800">Total Revenue</h2>
            <p className="text-2xl font-bold text-yellow-900">Rs. {revenue}</p>
          </div>
        </div>
      </div>
    </div>
  );
  
};

export default AdminReport;
