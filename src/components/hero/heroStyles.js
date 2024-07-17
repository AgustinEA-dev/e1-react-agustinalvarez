import styled from "styled-components";

export const HeroStyled = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 400px;

`;

export const HeroTextStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("./abstract-bg2.jpg");
  background-size: cover;
  background-position: left;
  color: white;
  width: 100%;
  padding: 30px;
  height: 400px;
  @media (max-width: 725px){
   width: 100%;
  };
`;

export const Text = styled.h1`
  font-family: "Rubik Mono One", monospace;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  max-width: 800px;

  @media(max-width:231px){
    font-size: 15px;
  }

  @media (max-width:169px){
    font-size: 12px;
  }
`;

export const HeroImgStyled = styled.div`
  background-image: url("./hero-image.webp");
  background-size: cover;
  /* background-attachment: fixed; */
  width: 50%;
  height: 400px;
  @media (max-width: 925px){
    background-position-x: 45%;
  };
  @media (max-width: 725px){
   display: none;
  };
`;