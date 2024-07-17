import {
  NavBarStyled,
  UlStyled,
  LinkStyled,
  CartSectionStyled,
  IStyledBars,
  IStyledCart,
} from "./navbarStyles";

function NavBar() {
  return (
    <>
      <NavBarStyled>
        <UlStyled>
          <img src="./logotechremove.png " alt="" />
          <LinkStyled to="/">Home</LinkStyled>
          <LinkStyled to="about">About</LinkStyled>
          <LinkStyled to="shop">Products</LinkStyled>
          <LinkStyled to="contact">Contact</LinkStyled>
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
