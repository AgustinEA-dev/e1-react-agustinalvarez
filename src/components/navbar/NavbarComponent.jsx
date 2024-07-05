import {
  NavBarStyled,
  LogoStyled,
  UlStyled,
  LiStyled,
  Astyled,
  CartSectionStyled,
  IStyledBars,
  IStyledCart,
} from "./navbarStyles";

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
