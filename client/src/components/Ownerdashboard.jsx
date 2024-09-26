import React, { useState } from "react";
import Ownersidebar from "./Ownersidebar";
import Dashboard from "./Dashboard"; // Create this component
import CarForm from "./CarForm"; // Your CarForm component
import OwnerBookingDetails from "./OwnerBookingDetails"; // Create this component
import CarOwnerCars from "./carOwnerCars";
import Deletecarowner from "./Deletecarowner";
import AdminReport from "./AdminReport";

const Ownerdashboard = () => {
  const [currentView, setCurrentView] = useState("dashboard"); // Default view

  const renderCurrentView = () => {
    switch (currentView) {
      case "dashboard":
        return <AdminReport />;
      case "addcar":
        return <CarForm />;
      case "OwnerBookingDetails":
        return <OwnerBookingDetails />;
      case "CarOwnerCars":
        return <CarOwnerCars />;
      case "Deletecarowner":
        return <Deletecarowner />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex">
      <Ownersidebar setCurrentView={setCurrentView} /> {/* Pass the setter function */}
      <div className="flex-grow p-4 ml-[40%]">
        {renderCurrentView()} {/* Render the current view based on state */}
      </div>
    </div>
  );
};

export default Ownerdashboard;
