import React from "react";
import styled from "styled-components";

const ImageRow = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ImageContainer = styled.div`
  height: 220px;
  width: 220px;
  border-radius: 15px;
  overflow: hidden;
  margin: 15px;

  /* :nth-child(4n) {
    margin-right: 0;
  } */
`;

const StyledImage = styled.img`
  height: 220px;
`;

const PhotoList = ({ imgUrls }) => {
  return (
    <ImageRow>
      {imgUrls.map((value) => {
        return (
          <ImageContainer>
            <StyledImage src={value} />
          </ImageContainer>
        );
      })}
    </ImageRow>
  );
};

export default PhotoList;
