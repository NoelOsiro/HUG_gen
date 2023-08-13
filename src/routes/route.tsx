import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import Topbar from "../Components/TopBar/Topbar";

export default function Root() {
    return (
      <>
        <Topbar/>
        <Navbar/>
        
        <Outlet/>
      <a href="#" className="back-to-top"><i className="fa fa-chevron-up"></i></a>
      {/* <div id="loader" className="show">
        <div className="loader"></div>
      </div> */}
      <Footer/>
      </>
    );
  }