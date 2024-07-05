import { FooterH3Styled, FooterStyled, FooterIconsDiv } from "./footerStyles";

function Footer() {
  return (
    <>
      <FooterStyled>
        <FooterH3Styled>
          "© 2021 CellTech. All rights reserved. <br />
          Designed and developed by Agustín Álvarez.
        </FooterH3Styled>
        <FooterIconsDiv>
          <i className="fa-brands fa-square-instagram"></i>
          <i className="fa-brands fa-facebook"></i>
        </FooterIconsDiv>
        <FooterH3Styled>
          For any inquiries or support. <br />
          Contact us at info@CELLTech.com
        </FooterH3Styled>
      </FooterStyled>
    </>
  );
}

export default Footer;
