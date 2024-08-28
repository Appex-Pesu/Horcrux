import React from "react";
import "./Venue.css";

const Venue = () => {
  return (
	  <div className="final">
    <div className="venue-section" id="Venue">
      <div className="venue-head-section">
        <h1 className="heading-tag-line">V E N U E</h1>
        <hr className="heading-underline" />
      </div>
      <div className="venue-container">
        <div className="venue-subheading-right">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3888.5739570356964!2d77.5360407!3d12.9350817!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3e468d8d36d3%3A0x694d74f6ac640acf!2sPES%20University!5e0!3m2!1sen!2sin!4v1722067108460!5m2!1sen!2sin" width="600"
	  loading="lazy" 
	  referrerpolicy="no-referrer-when-downgrade">
	  </iframe>
        </div>
        <div className="venue-subsection">
          <div className="venue-subheading-left">
            <p className="venue-date">13 - 14 September, 2024</p>
            <address className="venue-date">
				13th Floor , BE Block, 
              PES University , Bengaluru <br />
              Karnataka, India
            </address> 
          </div>
        </div>
      </div>
    </div>
	</div>
  );
};

export default Venue;
