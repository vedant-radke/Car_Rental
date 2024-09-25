import React, { useState } from 'react';
import axios from 'axios';
import toast from "react-hot-toast"; // For showing success/error notifications
import { API_END_POINT_admin } from "../utils/constants"; 
import GetAllCars from "./GetAllCars"

const RemoveCar = () => {
  const [regNumber, setRegNumber] = useState('');

  const handleDeleteCar = async () => {
    if (!regNumber) {
      toast.error("Registration number is required");
      return;
    }

    try {
      const response = await axios.delete(`${API_END_POINT_admin}/deletecar`, {
        data: { regNumber }, // Sending regNumber in the body
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

      if (response.data.message) {
        toast.success(response.data.message); 
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Error occurred while deleting the car"
      );
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-red-100 shadow-md rounded-md space-y-6 ml-[-10%]">
      <h2 className="text-2xl font-semibold text-gray-700">Remove a Car</h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Car Registration Number:
          </label>
          <input
            type="text"
            value={regNumber}
            onChange={(e) => setRegNumber(e.target.value)}
            placeholder="Enter Car Registration Number"
            className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
            required
          />
        </div>
      </div>

      <button
        onClick={handleDeleteCar}
        className="px-4 py-2 bg-red-500 text-white font-semibold rounded hover:bg-red-600"
      >
        Delete Car
      </button>
    </div>
  );
};

export default RemoveCar;
