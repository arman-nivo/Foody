import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets"; 


const Navbar = () => {
    const [menu, setmenu] = useState("home")
  return (
    <div className="navber ">
      <img src={assets.logo} alt="" className="" />

      <ul className="navbermau">
        <li onClick={() =>setmenu("home")}  className={menu === "home"?"active":""}>Home</li>
        <li  onClick={() =>setmenu("menu")} className={menu === "menu"?"active":""}>menu</li>
        <li  onClick={() =>setmenu("contactUs")} className={menu === "contactUs"?"active":""}>Contact Us</li>
        <li  onClick={() =>setmenu("Review")} className={menu === "Review"?"active":""}>review</li>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="naver-serchicon">
            <img src={assets.basket_icon} alt="" />
            <div className="dot"></div>
        </div>
        <button className="nav-signin">sign in  </button>
      </div>
    </div>
  )
}

export default Navbar
