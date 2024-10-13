import { Outlet } from "react-router-dom";
import "../style.css";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    // Elementer som er med gjennom alle sidene
    <>
      <Header
        student="Ridwan Abukar"
        degree="Informasjonssystemer"
        points={500}
      />

        <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
