import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavBarStyled = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: url("./keyboard.jpg");
  position: fixed;
  @media (max-width: 220px) {
    flex-direction: column;
    justify-content: center;
    gap: 20px;
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
  font-size: 22px;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  color: #ffff;
  padding: 10px;
  &:hover{
    transform: translateY(-5px);
    transition: all 0.5s;
  }

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
  font-size: 23px;
  color: #ffff;
  padding-right: 20px;
  display: none;
  @media (max-width: 950px) {
    display: block;
  }
  @media (max-width: 220px) {
    padding: 0;
  }
`;

export const SecondaryMenuStyled = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
width: 100%;
min-height: 100px;
background-color: red;
margin-top: 150px;
z-index: 1;
`;



