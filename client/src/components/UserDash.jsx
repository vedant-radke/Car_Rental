import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import UserProfile from "./UserProfile";
import Usersidebar from "./Usersidebar";
// import UserInfo from "./UserInfo";

const UserDash = () => {
  return (
    <div>
      
      <div>
        {/* <Sidebar/> */}
        <Usersidebar />
        <UserProfile/>
      </div>
      {/* <div>
        
      </div> */}
      
    </div>
  );
};

export default UserDash;
