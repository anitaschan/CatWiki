import React from "react";
import styled from "styled-components";
import PhotoList from "../PhotoList";

const Container = styled.div`
  background-color: #e3e1dc;
  padding: 40px;
  border-radius: 0 0 25px 25px;
  max-width: 1000px;
`;

const Line = styled.div`
  height: 2px;
  width: 50px;
  background-color: black;
  border-radius: 50px;
  margin-top: 5px;
`;

const Section = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0;
`;
const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  width: 275px;
`;
const Link = styled.a`
  align-self: flex-end;
`;

const DiscoverSection = ({ imgUrls }) => {
  return (
    <Container>
      <div>Most Searched Breeds</div>
      <Line />
      <Section>
        <Title>66+ Breeds for you to discover</Title>
        <Link>SEE MORE</Link>
      </Section>
      <PhotoList imgUrls={imgUrls} />
    </Container>
  );
};

export default DiscoverSection;
