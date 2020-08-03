import React from "react";
import { Link } from "react-router-dom";
import useDataUpload from "../hooks/useDataUpload";

const Profile = () => {
  useDataUpload();
  
  return (
    <>
      <div>Profile page</div>
      <Link to='/'>Home</Link>
    </>
  );
};

export default Profile;
