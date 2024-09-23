import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { IoIosArrowDropdown } from "react-icons/io";
import { API_END_POINT } from "../utils/constants";
import toast from "react-hot-toast";
import { setUser } from "../redux/userSlice";
import axios from "axios";
import mainLogo from "../assets/mainLogo.png";

const Navbar = () => {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.app.user);

  const handleLogin = () => {
    if (!isLogin) {
      navigate("/login");
    }
  };

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${API_END_POINT}/logout`);
      if (res.data.success) {
        toast.success(res.data.message);
      }
      dispatch(setUser(null));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  // getting back to home page on clicking logo
  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-slate-900 p-4 w-[100vw]">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <img
          onClick={handleLogoClick}
          alt="Your Company"
          src={mainLogo}
          className="h-10"
        />

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-4 w-[70%] justify-evenly ">
          <div
            onClick={() => {
              if (!user) {
                localStorage.setItem("redirectPath", "/userdash");
                navigate("/login");
                return;
              }
              navigate("/userdash");
            }}
            className="text-white hover:text-gray-300 cursor-pointer"
          >
            Dashboard
          </div>
          <div
            onClick={() => navigate("/UserProfile")}
            className="text-gray-300 hover:text-white cursor-pointer"
          >
            Team
          </div>
          <div
            onClick={() => navigate("/projects")}
            className="text-gray-300 hover:text-white cursor-pointer"
          >
            Projects
          </div>
          <div
            onClick={() => navigate("/calendar")}
            className="text-gray-300 hover:text-white cursor-pointer"
          >
            Calendar
          </div>
        </div>

        <div className="flex items-center gap-10">
          <div className="flex gap-2">
            {user && <IoIosArrowDropdown size="24px" color="white" />}
            <span className="text-white">{user?.fullname}</span>
          </div>

          <button
            type="button"
            onClick={user ? () => logoutHandler() : () => handleLogin()}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            {user ? "Signout" : "Signin"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
