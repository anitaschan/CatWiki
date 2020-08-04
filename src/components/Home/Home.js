import React, { useState, useEffect } from "react";
import useDataUpload from "../../hooks/useDataUpload";
import { Link } from "react-router-dom";
import useTop from "../../hooks/useTop";
import DiscoverSection from "./DiscoverSection";
import SearchSection from "./SearchSection";

const Home = () => {
  const [imgUrls, setImgUrls] = useState([]);

  useDataUpload();

  useTop(4, setImgUrls);

  return (
    <>
      <SearchSection />
      {Object.keys(imgUrls).length !== 0 && (
        <DiscoverSection imgUrls={imgUrls} />
      )}

      <Link to="/profile">Profile</Link>
      <Link to="/topten">TopTen</Link>
    </>
  );
};

export default Home;
