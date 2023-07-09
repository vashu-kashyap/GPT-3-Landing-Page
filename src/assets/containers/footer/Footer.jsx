import React from "react";
import "./footer.css";
import logo from '../../../assets/images/logo.svg'

export default function Footer() {
  return (
    <div className="footer_section section__padding">
      <div className="footer_heading">
        <h2 className="gradient__text">
          Do you want to step in to the <br /> future before others
        </h2>
        <button className="footer_btn"> Request Early Access</button>
      </div>
      <div className="footer_link">
        <div className="footer_link_col">
          <img src={logo} alt="gpt logo" />
          <p>Crechterwoord K12 182 DK <br /> Alknjkcb, All Rights Reserved</p>
        </div>
        <div className="footer_link_col">
          <h4>Link</h4>
          <ul>
            <li><a href="#">Overons</a></li>
            <li><a href="#">Social Media</a></li>
            <li><a href="#">Counters</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="footer_link_col">
          <h4>Company</h4>
          <ul>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="footer_link_col">
          <h4>Get in Touch</h4>
          <ul>
            <li><a href="#">Crechterwoord K12 <br /> 182 DK Alknjkcb</a></li>
            <li><a href="#">085-132567</a></li>
            <li><a href="#">info@payme.net</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
