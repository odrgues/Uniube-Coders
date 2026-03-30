import { Outlet } from "react-router-dom";
import Navbar from "../../shared/components/NavBar";
import Footer from "../../shared/components/Footer";
import { LayoutRoot, MainContent } from "./MainLayout.styles";

export function MainLayout() {
  return (
    <LayoutRoot>
      <Navbar />
      <MainContent>
        <Outlet />
      </MainContent>
      <Footer />
    </LayoutRoot>
  );
}
