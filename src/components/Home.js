import React, { useState, useEffect } from "react";
import useDataUpload from "../hooks/useDataUpload";
import { Link } from "react-router-dom";
import useTop from "../hooks/useTop";

const Home = () => {
  const [imgUrls, setImgUrls] = useState([]);

  useDataUpload();

  useTop(4, setImgUrls);

  console.log("imgUrls: ", imgUrls);

  return (
    <>
      <div>home</div>

      <Link to="/profile">Profile</Link>
      <Link to="/topten">TopTen</Link>
      <img src={imgUrls[0]} />
    </>
  );
};

export default Home;
