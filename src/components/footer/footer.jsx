import React from "react";
import "./footer.css";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mainContainer" id="Footer">
      <div className="contentContainer">
        <div className="footerSection contactSection">
          <h3 className="footerTitle">Contact</h3>
          <ul className="contactList">
            <li>Hemanth: 6363546350</li>
            <li>Atheek: 6361970815</li>
          </ul>
        </div>
        
        <div className="footerSection socialSection">
          <h3 className="footerTitle">Social Connection</h3>
          <ul className="socialLogo">
            <li className="github">
              <a href="https://github.com/Appex-Pesu/" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
            </li>
            <li className="linkedin">
              <a href="https://www.linkedin.com/company/appex-pesu/about/" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
            </li>
            <li className="instalogo">
              <a href="https://www.instagram.com/appex.pesu/" target="_blank" rel="noopener noreferrer">
                <BsInstagram />
              </a>
            </li>
			<li className="whatsapp">
			  <a href="https://chat.whatsapp.com/BV8uIDtAx3OEuT0DKFzNlJ" target="_blank" rel="noopener noreferrer">
				<FaWhatsapp />
			</a>
			</li>
          </ul>
        </div>
      </div>
      
      <div className="copyContainer">
        <p>
          <span>©</span> {currentYear} Appex | Technical <span></span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
