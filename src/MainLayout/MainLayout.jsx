import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navber/Navbar";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

const MainLayout = () => {
  return (
    <div className="bg-[#333646] text-white">
      <header>
        <Navbar></Navbar>
      </header>
      <div className="min-h-[calc(100vh-50px)]">
        <Outlet></Outlet>
      </div>
      <footer>
        <Footer></Footer>
      </footer>
      <ScrollToTop></ScrollToTop>
    </div>
  );
};

export default MainLayout;
