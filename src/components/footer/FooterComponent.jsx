import styled from "styled-components";

const FooterStyled = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 300px;
  margin-top: 40px;
  background: linear-gradient(to right, #434343, #000000);
  @media (max-width: 471px) {
    flex-direction: column;
    justify-content: center;
    gap: 20px;
  }
`;

const FooterH3Styled = styled.h3`
  color: white;
  max-width: 350px;
  font-family: "Raleway", sans-serif;
  font-size: 14px;
  padding: 50px;
  text-align: center;
  @media (max-width: 471px) {
    padding: 0;
  }
`;

const FooterIconsDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
  font-size: 30px;
  @media (max-width: 471px) {
    flex-direction: column;
  }
`;

const FooterContactDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  max-width: 350px;
  font-family: "Raleway", sans-serif;
  font-size: 14px;
  text-align: center;
  padding: 50px;
  @media (max-width: 471px) {
    padding: 0;
  }
`;

function Footer() {
  return (
    <>
      <FooterStyled>
        <FooterH3Styled>
          "© 2021 CellTech. All rights reserved. <br />
          Designed and developed by Agustín Álvarez.
        </FooterH3Styled>
        <FooterIconsDiv>
          <i class="fa-brands fa-square-instagram"></i>
          <i class="fa-brands fa-facebook"></i>
        </FooterIconsDiv>
        <FooterH3Styled>
          Contact us at info@CELLTech.com for any inquiries or support.
        </FooterH3Styled>
      </FooterStyled>
    </>
  );
}

export default Footer;
