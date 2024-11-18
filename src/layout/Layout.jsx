import { Outlet } from "react-router-dom";
import { LayoutWrapper } from "../assets/styles/LayoutStyles/layout";
import Header from "../components/Header";

function Layout() {
  return (
    <LayoutWrapper>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </LayoutWrapper>
  );
}

export default Layout;
