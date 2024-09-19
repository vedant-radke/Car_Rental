import React from "react";
import Navbar from "./Navbar";

const HomeForm = () => {
  return (
    <>
      <Navbar />
      {/* <div
      className="relative w-full h-screen bg-[url('https://data.1freewallpapers.com/download/range-rover-sv-serenity-lwb-2022-4k-5k-cars.jpg')] bg-cover bg-center flex items-center"
    > */}
      <div className="relative w-full h-screen bg-[url('https://images.unsplash.com/photo-1598084991519-c90900bc9df0?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center flex items-center">
        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <h1 className="text-white  text-4xl md:text-5xl font-bold relative ml-[10%] mb-[25%]">
          <span className="block">Your Ideal Car,</span>
          <span className="block mt-4">Just a Click Away !</span>
          {/* <span className="block w-1/2 h-1 bg-red-500 mx-auto mt-4"></span> */}
        </h1>

        {/* Form */}
        <div className="relative z-10 border-2 border-white-200 p-8 rounded-lg shadow-lg max-w-md w-full mt-11 ml-[25%] bg-transparent text-white">
          <h2 className="text-2xl font-bold text-center mb-6">
            Car Rental Form
          </h2>
          <form>
            {/* Pickup Address */}
            <div className="mb-4">
              <label
                className="block  font-bold mb-2"
                htmlFor="pickup-address"
              >
                Pickup Address
              </label>
              <input
                className="w-full p-1.5 border bg-slate-300 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
                type="text"
                id="pickup-address"
                placeholder="Enter pickup address"
              />
            </div>

            {/* Drop-off Address */}
            <div className="mb-4">
              <label
                className="block  font-bold mb-2"
                htmlFor="dropoff-address"
              >
                Drop-off Address
              </label>
              <input
                className="w-full p-1.5 border bg-slate-300  border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
                type="text"
                id="dropoff-address"
                placeholder="Enter drop-off address"
              />
            </div>

            {/* Date and Time */}
            <div className="mb-4">
              <label
                className="block font-bold mb-2"
                htmlFor="pickup-date-time"
              >
                Pickup Date & Time
              </label>
              <input
                className="w-full p-1.5 border bg-slate-300 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-500"
                type="datetime-local"
                id="pickup-date-time"
              />
            </div>

            {/* Drop-off Date and Time */}
            <div className="mb-4">
              <label
                className="block  font-bold mb-2"
                htmlFor="dropoff-date-time"
              >
                Drop-off Date & Time
              </label>
              <input
                className="w-full p-1.5 border bg-slate-300 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-500"
                type="datetime-local"
                id="dropoff-date-time"
              />
            </div>

            {/* Submit Button */}
            <button
              className="w-full bg-blue-500 text-white p-1.5 rounded hover:bg-blue-600 transition duration-300 mt-5"
              type="submit"
            >
              Book Now
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default HomeForm;
