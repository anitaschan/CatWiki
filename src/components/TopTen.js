import React from "react";
import useDataUpload from "../hooks/useDataUpload";

const TopTen = () => {
  useDataUpload();
  return <div>Top ten page</div>;
};

export default TopTen;
