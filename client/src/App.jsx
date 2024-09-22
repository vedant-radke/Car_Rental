import "./App.css";
// import Body from "./components/Body";
import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeForm from "./components/HomeForm";
import UserDash from "./components/UserDash";
import { Login } from "./components/Login";
import Sidebar from "./components/Sidebar";
import DisplayCars from "./components/DisplayCars";

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
