import { Outlet } from "react-router-dom";

import Header from "../navbar/HeaderComponent";
import NavBar from "../navbar/NavbarComponent";

function Layout() {
  return (
    <>
      <Header>
        <NavBar />
      </Header>
      <Outlet />
    </>
  );
}

export default Layout;
