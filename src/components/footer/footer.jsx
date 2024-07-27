import React from "react";
import "./footer.css";
import { FaLinkedinIn } from "react-icons/fa6";
import { BsInstagram} from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mainContainer" id="Footer">
      <div className="contentContainer">   
          <div className="contentText">
            <h3 className="footerTitle">Social Connection</h3>
            <ul className="socialLogo">
              <li>
                <a href="https://hemanthsbanur.vercel.app/" target="_blank">
                  <FaGithub />
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
      <div className="copyContainer">
        <p>
          <span>©</span> {currentYear} Appex | Technical <span></span>
        </p>
      </div>
    </footer>
  );
};

export default footer;
