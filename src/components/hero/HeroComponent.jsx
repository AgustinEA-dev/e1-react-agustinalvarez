import styled from "styled-components";

const HeroStyled = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 400px;
  background-color: #324185;
`;

const HeroTextStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3F51A4;
  color: white;
  width: 50%;
  padding: 30px;
  height: 400px;
  @media (max-width: 725px){
   width: 100%;
  };
`;

const Text = styled.h1`
  font-family: "Rubik Mono One", monospace;
  font-size: 15px;
  font-weight: 400;
  text-align: center;
  @media (max-width:169px){
    font-size: 10px;
  }
`;

const HeroImgStyled = styled.div`
  background-image: url("./hero-image.webp");
  background-size: cover;
  width: 50%;
  height: 400px;
  @media (max-width: 925px){
    background-position-x: 45%;
  };
  @media (max-width: 725px){
   display: none;
  };
`;

function Hero() {
  return (
    <>
      <HeroStyled>
        <HeroTextStyled>
          <Text>
            "Looking for the latest and greatest in electronics? Look no
            further than our cutting-edge cell phone company!
          </Text>
        </HeroTextStyled>
        <HeroImgStyled />
      </HeroStyled>
    </>
  );
}

export default Hero;
