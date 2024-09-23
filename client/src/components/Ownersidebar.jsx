import React from "react";
import mainLogo from "../assets/mainLogo.png";
import { useNavigate } from "react-router";


const Ownersidebar = ({ setCurrentView }) => {
    const navigate = useNavigate();

    const handleLogoClick = () => {
      navigate("/");
    };

  return (
    <div className="flex fixed top-0 left-0 z-9">
      <div className="flex flex-col p-4 bg-gray-900 text-white w-60 min-h-screen">
        <img
          onClick={handleLogoClick}
          alt="Your Company"
          src={mainLogo}
          className="h-10"
        />
        <hr className="border-gray-700 mb-4" />
        <ul className="flex flex-col space-y-2">
          <li>
            <button
              onClick={() => setCurrentView("dashboard")}
              className="flex items-center p-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <svg
                className="h-5 w-5 text-gray-300 mr-2"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Home Icon */}
                <path d="M3 9v12h18V9H3zm3 0h12v12H6V9z" />
              </svg>
              <span className="text-base">Dashboard</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => setCurrentView("bookings")}
              className="flex items-center p-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <svg
                className="h-5 w-5 text-gray-300 mr-2"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Bookings Icon */}
                <path d="M3 3h18v18H3V3zm4 4h10v10H7V7z" />
              </svg>
              <span className="text-base">Bookings</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => setCurrentView("addcar")}
              className="flex items-center p-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <svg
                className="h-5 w-5 text-gray-300 mr-2"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Add Car Icon */}
                <path d="M3 3h18v18H3V3zm4 4h10v10H7V7z" />
              </svg>
              <span className="text-base">Add Cars</span>
            </button>
          </li>
          <li>
            <button className="flex items-center p-2 rounded-lg hover:bg-gray-700 transition-colors">
              <svg
                className="h-5 w-5 text-gray-300 mr-2"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Settings Icon */}
                <path d="M3 3h18v18H3V3zm4 4h10v10H7V7z" />
              </svg>
              <span className="text-base">Settings</span>
            </button>
          </li>
        </ul>
        <hr className="border-gray-700 my-4" />
        <div className="mt-auto">
          <button
            className="flex items-center p-2 rounded-lg hover:bg-gray-700 transition-colors"
          >
            <img src="" alt="Profile" className="h-8 w-8 rounded-full mr-2" />
            <span className="text-base">Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ownersidebar;
