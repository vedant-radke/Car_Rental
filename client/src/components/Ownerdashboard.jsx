import React, { useState } from "react";
import Ownersidebar from "./Ownersidebar";
import Dashboard from "./Dashboard"; // Create this component
import CarForm from "./CarForm"; // Your CarForm component
import Bookings from "./Bookings"; // Create this component

const Ownerdashboard = () => {
  const [currentView, setCurrentView] = useState("dashboard"); // Default view

  const renderCurrentView = () => {
    switch (currentView) {
      case "dashboard":
        return <Dashboard />;
      case "addcar":
        return <CarForm />;
      case "bookings":
        return <Bookings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex">
      <Ownersidebar setCurrentView={setCurrentView} /> {/* Pass the setter function */}
      <div className="flex-grow p-4">
        {renderCurrentView()} {/* Render the current view based on state */}
      </div>
    </div>
  );
};

export default Ownerdashboard;
