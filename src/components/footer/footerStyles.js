import styled from "styled-components";

export const FooterStyled = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 300px;
  background-color: black;
  @media (max-width: 471px) {
    flex-direction: column;
    justify-content: center;
    gap: 20px;
  }
`;

export const FooterH3Styled = styled.h3`
  color: white;
  font-family: "Raleway", sans-serif;
  font-size: 14px;
  padding: 50px;
  text-align: center;
  @media (max-width: 471px) {
    padding: 0;
  }
`;

export const FooterIconsDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
  font-size: 30px;
  @media (max-width: 471px) {
    flex-direction: column;
  }
`;