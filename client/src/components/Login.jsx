import React, { useState } from "react";
import toast from "react-hot-toast";
import { API_END_POINT } from "../utils/constants.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/userSlice.js";

export const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [fullname, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleLoginMode = () => {
    setIsLogin((prevState) => !prevState);
  };

  const getInputData = async (event) => {
    event.preventDefault();

    if (isLogin) {
      const user = { email, password };
      try {
        const res = await axios.post(`${API_END_POINT}/login`, user, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });

        console.log(res);

        if (res.data.success) {
          toast.success(res.data.message);
          dispatch(setUser(res.data.user));

          // Check for redirect path
          const redirectPath = localStorage.getItem("redirectPath");
          if (redirectPath) {
            localStorage.removeItem("redirectPath"); // Clean up
            navigate(redirectPath); // Navigate to intended path
          } else {
            navigate("/"); // Default to home if no intended path
          }
        }
      } catch (error) {
        toast.error(error.response?.data?.message || "Login failed");
      }
    } else {
      const user = { fullname, email, password, role };

      try {
        const res = await axios.post(`${API_END_POINT}/register`, user, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });

        if (res.data.success) {
          toast.success(res.data.message);
          setIsLogin(true);
        }
      } catch (error) {
        console.error("Error response:", error.response);
        toast.error(error.response?.data?.message || "Registration failed");
      }
    }
    setUsername("");
    setEmail("");
    setPassword("");
    setRole("");
  };

  return (
    <div className="relative w-full h-screen bg-[url('https://images.unsplash.com/photo-1598084991519-c90900bc9df0?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center flex items-center">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="flex flex-1 justify-center items-center">
        <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg backdrop-filter backdrop-blur-sm">
          <h2 className="text-2xl font-bold text-center mb-7 text-gray-800">
            {isLogin ? "Sign in to your account" : "Create New Account"}
          </h2>
          <form onSubmit={getInputData}>
            {!isLogin && (
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="fullname"
                >
                  Fullname
                </label>
                <input
                  id="fullname"
                  type="text"
                  value={fullname}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your fullname"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            )}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            {!isLogin && (
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="role"
                >
                  Role
                </label>
                <select
                  id="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="user">User</option>
                  <option value="carOwner">Car Owner</option>
                </select>
              </div>
            )}

            <div className="flex items-center justify-between mb-4">
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md font-bold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                {isLogin ? "Sign In" : "Sign Up"}
              </button>
            </div>
            <div className="text-center flex justify-between">
              <span
                className="mr-5 cursor-pointer text-sm text-indigo-500 hover:text-indigo-700"
                onClick={toggleLoginMode}
              >
                {isLogin ? "Sign Up" : "Sign In"}
              </span>

              <a
                href="#"
                className="text-sm text-indigo-500 hover:text-indigo-700"
              >
                Forgot your password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
