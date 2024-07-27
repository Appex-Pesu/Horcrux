import React from "react";
import "./Venue.css";
import { FaStreetView } from "react-icons/fa6";

const Venue = () => {
  return (
	  <div className="final">
    <div className="venue-section" id="Venue">
      <div className="venue-head-section">
        <h1 className="heading-tag-line">Venue</h1>
        <hr className="heading-underline" />
      </div>
      <div className="venue-container">
        <div className="venue-subheading-right">
          <iframe
            title="address"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.8324128287754!2d88.41251337500026!3d22.510470079535967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0273f14bca0c15%3A0xbd1ef59baa5eafd0!2sMeghnad%20Saha%20Institute%20Of%20Technology!5e0!3m2!1sen!2sin!4v1687704258834!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="venue-subsection">
          <div className="venue-subheading-left">
            <p className="venue-date">30-31 August, 2024</p>
            <address className="venue-date">
              PES University , Bengaluru <br />
              Karnataka, India
            </address>
            <div className="venue-location">
              <a
                href="https://maps.app.goo.gl/55EuXrLmb7cfy5az9?g_st=aw"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaStreetView/><p>See Venue in 360&deg;</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
	</div>
  );
};

export default Venue;
