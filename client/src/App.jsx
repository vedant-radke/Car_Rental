import "./App.css";
import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import HomeForm from "./components/HomeForm";
import UserDash from "./components/UserDash";
import { Login } from "./components/Login";
import DisplayCars from "./components/DisplayCars";
import UserProfile from "./components/UserProfile";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/userSlice"; // Adjust path as needed

import CarForm from "./components/CarForm";
import Ownerdashboard from "./components/Ownerdashboard";
import OwnerBookingDetails from "./components/OwnerBookingDetails";
import CarOwnerCars from "./components/carOwnerCars";
import Deletecarowner from "./components/Deletecarowner";

function App() {
  const dispatch = useDispatch();

  // when page refresh, it will token in localStorage
  useEffect(() => {
    const userString = localStorage.getItem("user");
    if (userString) {
      const user = JSON.parse(userString); 
      const token = user.token; 
      const tokenExpiry = user.tokenExpiry; 
      const currentTime = Date.now() / 1000;

      if (token && tokenExpiry > currentTime) {
        dispatch(setUser(user)); 
      } else {
        localStorage.removeItem("user"); // Remove user if token has expired
      }
    }
  }, [dispatch]);

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <HomeForm />,
    },
    {
      path: "/userdash",
      element: <UserDash />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/cards",
      element: <DisplayCars />,
    },
    {
      path: "/userprofile",
      element: <UserProfile />,
    },
    {
      path: "/CarForm",
      element: <CarForm />,
    },
    {
      path: "/Ownerdashboard",
      element: <Ownerdashboard />,
    },
    {
      path: "/OwnerBookingDetails",
      element: <OwnerBookingDetails />,
    },
    {
      path: "/CarOwnerCars",
      element: <CarOwnerCars />,
    },
    {
      path: "/Deletecarowner",
      element: <Deletecarowner />,
    },
  ]);

  return (
    <>
      <RouterProvider router={appRouter} />
      <Toaster />
    </>
    
  );
}

export default App;
