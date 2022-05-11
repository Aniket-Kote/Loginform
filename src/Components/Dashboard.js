import React from "react";
import { removeUserSession } from "../Common/Utils";


const Dashboard = (props) => {
const handleLogout = () => {
  removeUserSession();
    props.history.push('/login');
   
}



  return (
    <>
      <br />
      <input type="button" value="Logout" className="btn" onClick={handleLogout} />
    </>
  );
};

export default Dashboard;
