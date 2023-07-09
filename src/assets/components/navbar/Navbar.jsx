import React, { useState } from "react";
import "./navbar.css";
import logo from "../../../assets/images/logo.svg";



export default function Navbar() {

  const [showmenu, SetShowmenu] = useState("fa-solid fa-bars")
  const menu = document.getElementsByClassName('navmenu_container')

  const togglehandler = () => {
    if (showmenu === "fa-solid fa-bars" ) {
      SetShowmenu("fa-solid fa-xmark")
      menu[0].classList.remove('showmenu')
    } else {
      SetShowmenu("fa-solid fa-bars")
      menu[0].classList.add('showmenu')

    }
  }




 

  return (
    <>
      <nav className="navbar">

        <div className="nav-brand">
          <img src={logo} alt="" />
        </div> 

        <div className="navmenu_container showmenu scale-up-center ">
          <ul className="navmenu">
            <li className="nav-link"><a href="#home">Home</a></li>
            <li className="nav-link"><a href="#wgpt">What is GPT?</a></li>
            <li className="nav-link"><a href="#features">Case Studies</a></li>
            <li className="nav-link"><a href="#posibilities">Open AI</a></li>
            <li className="nav-link"><a href="#blog">Library</a></li>
          </ul>

          <div className="sign_container">
            <button className="signin">Sign in</button>
            <button className="signup">Sign up</button>
          </div>
        </div>
        <div className="toggle_container">
          <button onClick={togglehandler}><i className={showmenu}></i></button>
        </div>

      </nav>
    </>
  )
}
