import React, { useEffect, useState, useContext } from "react";
import { Context } from "../context/store";
import useDataUpload from "../hooks/useDataUpload";
import { Link } from "react-router-dom";
import doRequest from "../api/api";

const Home = () => {
  const [imgUrl, setImgUrl] = useState("");
  const [state] = useContext(Context);
  const catArray = Object.values(state);

  catArray.sort((a, b) => {
    return a.searchCount - b.searchCount;
  });
  const TopCats = [
    catArray[0]?.id,
    catArray[1]?.id,
    catArray[2]?.id,
    catArray[3]?.id,
  ];
  useDataUpload();
  useEffect(() => {
    const functionName = async () => {
      if (Object.keys(state).length !== 0) {
        const catUrls = [];
        TopCats.map(async (id) => {
          const temp = await doRequest("images/search?breed_id=" + id);
          catUrls.push(temp[0].url);
        });
        setImgUrl(catUrls);
      }
    };
    functionName();
  }, [state]);

  console.log("something img url", imgUrl);

  return (
    <>
      <div>home</div>

      <Link to='/profile'>Profile</Link>
      <Link to='/topten'>TopTen</Link>
    </>
  );
};

export default Home;
