import "./GlobalStyles.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/layoutRouter/LayoutComponent.jsx";
import Home from "./components/homePage/homeComponent.jsx";
import Products from "./components/products/ProductsComponent.jsx";
import About from "./components/about/AboutComponent.jsx";
import NoPage from "./components/noPage/noPageComponent.jsx";
import Footer from "./components/footer/FooterComponent.jsx";
import Contact from "./components/contact/ContactComponent.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="shop" element={<Products />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
