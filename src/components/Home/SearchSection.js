import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Context } from "../../context/store";

const Container = styled.div`
  background-color: black;
  padding: 40px;
  border-radius: 25px 25px 0 0;
  max-width: 1000px;
  color: white;
`;

const SearchSection = () => {
  const [shouldShow, setShouldShow] = useState(false);
  const [state] = useContext(Context);

  const breedArray = Object.values(state).map((breed) => breed.name);

  const handleChange = (e) => {
    const value = e.target.value;
    const valueLength = value.length;

    if (valueLength > 0) {
      const filteredBreeds = breedArray.filter(
        (breedName) =>
          breedName.substring(0, valueLength).toLowerCase() ===
          value.toLowerCase()
      );
      setShouldShow(true);
      console.log("filteredBreeds: ", filteredBreeds);
    } else {
      setShouldShow(false);
    }
  };

  return (
    <Container>
      <h1>CatWiki</h1>
      <p>Get to know more about your cat breed</p>
      <input onChange={(e) => handleChange(e)} />
      {shouldShow && <div>Hi</div>}
    </Container>
  );
};

export default SearchSection;
