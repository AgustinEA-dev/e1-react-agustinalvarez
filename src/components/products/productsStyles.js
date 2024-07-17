import styled from "styled-components";

export const ProductsSectionStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-image: url("./abstract-bg1.jpg");
  background-attachment: fixed;
  background-position: bottom;
  padding: 0 40px 40px 40px;
`;

export const ProductsH2Styled = styled.h2`
  font-family: "Electrolize", sans-serif;
  font-size: 70px;
  color: white;
  text-align: center;
  padding: 60px;
  
  @media (max-width: 471px) {
    padding: 20px;
  }
  @media (max-width: 387px) {
    font-size: 35px;
  }
  @media (max-width: 286px) {
    font-size: 27px;
  }
  @media (max-width: 227px) {
    font-size: 18px;
  }
  @media (max-width: 201px) {
    padding: 10px;
  }
  @media (max-width: 187px) {
    font-size: 18px;
  }
  @media (max-width:149px){
    font-size: 12px;
  }
`;

export const ProductsContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  border-radius: 20px;
  background-color: #ffffff;
  padding: 40px;
`;