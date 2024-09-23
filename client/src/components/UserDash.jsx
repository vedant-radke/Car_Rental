import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import UserProfile from "./UserProfile";
// import UserInfo from "./UserInfo";

const UserDash = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <div>
        <Sidebar/>
        <UserProfile/>
      </div>
      {/* <div>
        
      </div> */}
      
    </div>
  );
};

export default UserDash;
