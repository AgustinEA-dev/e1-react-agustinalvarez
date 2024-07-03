import styled from "styled-components";

const NavBarStyled = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 220px) {
    flex-direction: column;
    justify-content: center;
    gap: 20px;
  }
`;

const LogoStyled = styled.span`
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

const UlStyled = styled.ul`
  display: flex;
  gap: 60px;
  /* padding-right: 35px; */
  margin: 0;
  color: white;
  @media (max-width: 950px) {
    display: none;
  }
`;

const LiStyled = styled.li`
  list-style: none;
`;

const Astyled = styled.a`
  font-size: 18px;
  font-family: "Rubik Mono One", monospace;
  text-decoration: none;
  color: white;
`;

const CartSectionStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IStyledCart = styled.i`
  font-size: 20px;
  color: white;
  padding-right: 20px;
`;

const IStyledBars = styled.i`
  font-size: 20px;
  color: white;
  padding-right: 20px;
  display: none;
  @media (max-width: 950px) {
    display: block;
  }
  @media (max-width: 220px) {
    padding: 0;
  }
`;

function NavBar() {
  return (
    <>
      <NavBarStyled>
        <LogoStyled>
          Cell
          <br />
          Tech
        </LogoStyled>
        <UlStyled>
          <LiStyled>
            <Astyled href="">Home</Astyled>
          </LiStyled>
          <LiStyled>
            <Astyled href="">About</Astyled>
          </LiStyled>
          <LiStyled>
            <Astyled href="">Contact</Astyled>
          </LiStyled>
        </UlStyled>
        <CartSectionStyled>
          <IStyledCart>
            <i className="fa-solid fa-cart-shopping"></i>
          </IStyledCart>
          <IStyledBars>
            <i className="fa-solid fa-bars"></i>
          </IStyledBars>
        </CartSectionStyled>
      </NavBarStyled>
    </>
  );
}

export default NavBar;
