import { HeroImgStyled, HeroTextStyled, Text, HeroStyled } from "./heroStyles";

function Hero() {
  return (
    <>
      <HeroStyled>
        <HeroTextStyled>
          <Text>
            "Looking for the latest and greatest in electronics? Look no further
            than our cutting-edge cell phone company!
          </Text>
        </HeroTextStyled>
        <HeroImgStyled />
      </HeroStyled>
    </>
  );
}

export default Hero;
