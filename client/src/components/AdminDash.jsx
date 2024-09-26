import AdminSidebar from './AdminSidebar';
import { useState } from 'react';


import GetAllCars from './GetAllCars';
import CarFormAdmin from './carFormAdmin';
import RemoveCar from './RemoveCar';
import ChangeRole from './ChangeRole';
import GetUserList from './GetUserList';
import GetUser from './GetUser';
import DeleteUser from './DeleteUser';

const AdminDash = () => {
  const [clickedOption, setClickedOption] = useState("dashboard");

  const renderContent = () => {
    switch (clickedOption) {
      case "dashboard":
        return <div className='ml-[-50%]'> <h1 className="text-4xl font-bold text-center text-gray-800">
        Welcome to Admin Dashboard
      </h1> </div>
      case 'View All Cars':
        return <GetAllCars/>;
      case 'addcar':
        return <CarFormAdmin/>
      case 'removeCar':
        return <RemoveCar/>
      case 'changeRole':
        return <ChangeRole/>
      case 'getAllUsers':
        return <GetUserList/>
      case 'getUser':
        return <GetUser/>
      case 'deleteUser':
        return <DeleteUser/>
      
      default:
        return <div>Please select an option from the sidebar</div>;
    }
  };

  return (
    <div className="flex">
      <AdminSidebar setClickedOption={setClickedOption} /> 
      <div className="flex-grow p-4 ml-[40%]">
        {renderContent()} 
      </div>
    </div>
  );
};

export default AdminDash;