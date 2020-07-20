import React from "react";
import logo from "../../assets/images/ashyqduken-logo.png";
import { Link } from "react-router-dom";
import { Home, Reorder, LocalMall, ShoppingBasket } from "@material-ui/icons";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="header-logo">
        <img src={logo} alt="" />
      </div>
      <div className="header-navbar">
        <ul>
          <li>
            <Home style={{ color: "white", marginRight: "3px" }} />
            <Link to="/">basty bet</Link>
          </li>
          <li>
            <Reorder style={{ color: "white", marginRight: "3px" }} />
            <Link to="/categories">kategorııalar</Link>
          </li>
          <li>
            <LocalMall style={{ color: "white", marginRight: "3px" }} />
            <Link to="/">barlyq taýar</Link>
          </li>
          <li>
            <ShoppingBasket style={{ color: "white", marginRight: "3px" }} />
            <Link to="/">sebet</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
