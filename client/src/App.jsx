import "./App.css";
// import Body from "./components/Body";
import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import HomeForm from "./components/HomeForm";
// import Navbar from "./components/Navbar";
import UserDash from "./components/UserDash";
import { Login } from "./components/Login";
// import Sidebar from "./components/Sidebar";
import DisplayCars from "./components/DisplayCars";

import UserProfile from "./components/UserProfile";

import CarForm from "./components/CarForm";
import Ownerdashboard from "./components/Ownerdashboard";

function App() {
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
  ]);

  return (
    <>
      <RouterProvider router={appRouter} />
      {/* <Body /> */}
      <Toaster />
    </>
    
  );
}

export default App;
