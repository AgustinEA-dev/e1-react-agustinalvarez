import styled from "styled-components";

const FooterStyled = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 300px;
  margin-top: 40px;
  background: linear-gradient(
    to right,
    #434343,
    #000000
  );
`;

const FooterH3Styled = styled.h3`
  color: white;
  max-width: 350px;
  font-family: "Times New Roman", Times, serif;
  font-size: 14px;
  padding: 50px;
`;

const FooterIconsDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
  font-size: 30px;
`;

const FooterContactDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  max-width: 350px;
  font-family: "Times New Roman", Times, serif;
  font-size: 14px;
  padding: 50px;
`;

function Footer() {
  return (
    <>
      <FooterStyled>
        <FooterH3Styled>
          "© 2021 CellTech. All rights reserved. <br />
          Designed and developed by Agustín Álvarez.
        </FooterH3Styled>
        <hr />
        <FooterIconsDiv>
          <i class="fa-brands fa-square-instagram"></i>
          <i class="fa-brands fa-facebook"></i>
        </FooterIconsDiv>
        <FooterContactDiv>
          Contact us at info@CELLTech.com for any inquiries or support.
        </FooterContactDiv>
      </FooterStyled>
    </>
  );
}

export default Footer;
