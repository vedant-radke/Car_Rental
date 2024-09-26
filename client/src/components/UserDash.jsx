import React, { useState } from "react";
import UserProfile from "./UserProfile";
import Usersidebar from "./Usersidebar";
import UserBookingDetails from "./UserBookingDetails";
import DeactiveUserAccount from "./DeactiveUserAccount";

const UserDash = () => {
  const [currentView, setCurrentView] = useState("dashboard"); // Default view

  const renderCurrentView = () => {
    switch (currentView) {
      case "dashboard":
        return <UserProfile />;
      case "UserBookingDetails":
        return <UserBookingDetails />;     
      case "Deleteaccount":
        return <DeactiveUserAccount />;     
      default:
        return <UserProfile />;
    }
  };

  return (
    <div className="flex">
      <Usersidebar setCurrentView={setCurrentView} /> {/* Pass the setter function */}
      <div className="flex-grow p-4">
        {renderCurrentView()} {/* Render the current view based on state */}
      </div>
    </div>
  );
};

export default UserDash;
