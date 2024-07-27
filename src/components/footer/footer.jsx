import React from "react";
import "./footer.css";
import hackathonLogo from "/images/hackathon-logo.png";
import { FaLinkedinIn } from "react-icons/fa6";
import { BsBadge8K, BsFacebook, BsHammer, BsInstagram, BsMask } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";

const footer = () => {
  // get the current year dynamically
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mainContainer" id="Footer">
      <div className="contentContainer">  
        <div className="socialContent">
          <div className="contentText">
            <h3 className="footerTitle">Social Connection</h3>
            <ul className="socialLogo">
              <li>
                <a href="https://hemanthsbanur.vercel.app/" target="_blank">
                  <BsHammer />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/appex-pesu/about/" target="_blank">
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="instalogo">
                <a href="https://www.instagram.com/appex.pesu/" target="_blank">
                  <BsInstagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/*<div className="mapContent">*/}
        {/*    <iframe title="address"*/}
        {/*        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.8324128287754!2d88.41251337500026!3d22.510470079535967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0273f14bca0c15%3A0xbd1ef59baa5eafd0!2sMeghnad%20Saha%20Institute%20Of%20Technology!5e0!3m2!1sen!2sin!4v1687704258834!5m2!1sen!2sin"*/}
        {/*        allowFullScreen="" loading="lazy"*/}
        {/*        referrerPolicy="no-referrer-when-downgrade"></iframe>*/}
        {/*</div>*/}
      </div>
      <div className="copyContainer">
        <p>
          <span>©</span> {currentYear} Appex | Developer <span>MSIT</span>
        </p>
      </div>
    </footer>
  );
};

export default footer;
