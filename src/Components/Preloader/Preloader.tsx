import { Outlet } from "react-router-dom";


export default function Preloader() {
    return (
    <div id="loader" className="show">
        <div className="loader"></div>
      </div>
    );
  }