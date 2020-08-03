import { useState, useEffect, useContext } from "react";
import { Context } from "../context/store";
import doRequest from "../api/api";

const useTop = (topCount, setImgUrls) => {
  const [state] = useContext(Context);
  const catArray = Object.values(state);

  catArray.sort((a, b) => {
    return a.searchCount - b.searchCount;
  });

  const TopCats = catArray.splice(0, topCount).map((breed) => {
    return breed.id;
  });

  useEffect(() => {
    const getImgUrls = async () => {
      if (Object.keys(state).length !== 0) {
        const idArray = TopCats.map(async (id) => {
          return doRequest("images/search?breed_id=" + id);
        });

        Promise.all(idArray).then((values) => {
          const mapCall = values.map((value) => value[0].url);
          setImgUrls(mapCall);
        });
      }
    };
    getImgUrls();
  }, [state]);
};

export default useTop;
