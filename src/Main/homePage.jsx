import * as React from "react";
import styled from "styled-components";
import map from "../images/Map.jpeg";

const homePage = ()  => {
    return (
      <Wrap>
        <TitleWrap>
          <Title>Adarsh mithila party</Title>
        </TitleWrap>
        <Map><img src={map} alt="map"/></Map>
      </Wrap>
    );
  };
const Wrap = styled.main`
`; 
const TitleWrap =styled.section`
    display: flex;
    justify-content: center;
    background: tan;
  `;
  const Title = styled.span`
  font-size: 64px;
  font-family: fantasy;
  margin-top: 16px;
  color: darkgreen;
  `;

  const Map = styled.span`
  display: flex;
  justify-content: center;
  background: whitesmoke;
  img {
    width: 700px;
    }
  }`;

export default homePage;

