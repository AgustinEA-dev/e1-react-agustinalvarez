import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavBarStyled = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: url("./keyboard.jpg");
  @media (max-width: 220px) {
    flex-direction: column;
    justify-content: center;
    gap: 20px;
  }
`;

export const LogoStyled = styled.span`
  font-size: 30px;
  color: #3e8eff;
  padding-left: 20px;
  font-family: "Rubik Mono One", monospace;
  @media (max-width: 550px) {
    font-size: 20px;
  }
  @media (max-width: 390px) {
    font-size: 15px;
  }
  @media (max-width: 220px) {
    padding-left: 0;
  }
`;

export const UlStyled = styled.ul`
  display: flex;
  align-items: center;
  gap: 60px;
  margin: 0;
  color: white;
`;

export const LinkStyled = styled(Link)`
  font-size: 20px;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  color: #ffff;
  
  @media (max-width: 950px) {
    display: none;
  }
`;

export const CartSectionStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width:122px;
`;

export const IStyledCart = styled.i`
  font-size: 20px;
  color: #ffff;
  padding-right: 20px;
`;

export const IStyledBars = styled.i`
  font-size: 20px;
  color: #A2AAB2;
  padding-right: 20px;
  display: none;
  @media (max-width: 950px) {
    display: block;
  }
  @media (max-width: 220px) {
    padding: 0;
  }
`;