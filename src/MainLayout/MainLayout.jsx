import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navber/Navbar";

const MainLayout = () => {
  return (
    <div className="bg-[#333646]">
      <header>
        <Navbar></Navbar>
      </header>
      <div className="min-h-[calc(100vh-50px)]">
        <Outlet></Outlet>
      </div>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;
