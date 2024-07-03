import styled from "styled-components";

const HeaderSectionStyled = styled.header`
  display: flex;
  background-color: #000000;
  width: 100%;
  height: 150px;
`;

function Header({ children }) {
  return <HeaderSectionStyled>{children}</HeaderSectionStyled>;
}

export default Header;
