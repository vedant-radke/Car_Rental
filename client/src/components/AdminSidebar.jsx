import React from "react";
import mainLogo from "../assets/mainLogo.png";
import { useNavigate } from "react-router";
import { MdDashboard, MdCarRental, MdDelete, MdPerson, MdOutlineGroup } from "react-icons/md"; // Material Design Icons
import { FaUserEdit } from "react-icons/fa"; // FontAwesome Icon

const Ownersidebar = ({ setClickedOption }) => {
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
          className="h-10 cursor-pointer"
        />
        <hr className="border-gray-700 mb-4" />
        <ul className="flex flex-col space-y-2">
          <li>
            <button
              onClick={() => setClickedOption("dashboard")}
              className="flex items-center p-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <MdDashboard className="h-5 w-5 text-gray-300 mr-2" />
              <span className="text-base">Admin Dashboard</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => setClickedOption("View All Cars")}
              className="flex items-center p-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <MdCarRental className="h-5 w-5 text-gray-300 mr-2" />
              <span className="text-base">Car Inventory</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => setClickedOption("addcar")}
              className="flex items-center p-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <MdCarRental className="h-5 w-5 text-gray-300 mr-2" />
              <span className="text-base">Add New Car </span>
            </button>
          </li>
          <li>
            <button
              onClick={() => setClickedOption("removeCar")}
              className="flex items-center p-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <MdDelete className="h-5 w-5 text-gray-300 mr-2" />
              <span className="text-base">Remove Car</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => setClickedOption("changeRole")}
              className="flex items-center p-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <FaUserEdit className="h-5 w-5 text-gray-300 mr-2" />
              <span className="text-base">Manage User Role</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => setClickedOption("getAllUsers")}
              className="flex items-center p-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <MdOutlineGroup className="h-5 w-5 text-gray-300 mr-2" />
              <span className="text-base">All Users</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => setClickedOption("getUser")}
              className="flex items-center p-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <MdPerson className="h-5 w-5 text-gray-300 mr-2" />
              <span className="text-base">Find User</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => setClickedOption("deleteUser")}
              className="flex items-center p-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <MdDelete className="h-5 w-5 text-gray-300 mr-2" />
              <span className="text-base">Delete User Account</span>
            </button>
          </li>
        </ul>
        <hr className="border-gray-700 my-4" />
        <div className="mt-auto">
          <button className="flex items-center p-2 rounded-lg hover:bg-gray-700 transition-colors">
            {/* <img src="" alt="Profile" className="h-8 w-8 rounded-full mr-2" />
            <span className="text-base">Profile</span> */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ownersidebar;
