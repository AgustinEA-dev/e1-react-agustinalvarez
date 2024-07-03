import "./GlobalStyles.css";

import Header from "./components/navbar/HeaderComponent.jsx";
import NavBar from "./components/navbar/NavbarComponent.jsx";
import Hero from "./components/hero/HeroComponent.jsx";
import Products from "./components/products/ProductsComponent.jsx";
import Footer from "./components/footer/FooterComponent.jsx";

function App() {
  return (
    <>
      <Header>
        <NavBar />
      </Header>
      <Hero />
      <Products />
      <Footer />
    </>
  );
}

export default App;
