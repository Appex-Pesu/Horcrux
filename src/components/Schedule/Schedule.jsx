import React from "react";
import "./Schedule.css";

const Timeline = () => {
  return (
    <div>
      <div className="about-head-section">
        <h1 className="heading-tag-line">Schedule</h1>
        <hr className="heading-underline" />
      </div>
      <div className="Schedule_main" id="Schedule">
        <div className="Schedule_container">
          <ul>
            <li>
              <h3 className="Schedule_heading">Pre Events</h3>
              <p>
              3:00pm - 4:00pm: Registration<br/>
              4:00pm - 4:30pm: Opening Ceremony<br/>
              </p>
              {/* <a href="#">Read More &gt;</a> */}
              <span className="Schedule_date">30 August  2024</span>
              <span className="circle"></span>
            </li>
            <li>
              <h3 className="Schedule_heading">First Day</h3>
              <p>
                
                5:30pm: Snacks<br/>
                8:00pm: Mentoring Round 1<br/>
                8:30pm - 9:30pm: Dinner
              </p>
              {/* <a href="#">Read More &gt;</a> */}
              <span className="Schedule_date">30 August 2024</span>
              <span className="circle"></span>
            </li>
            <li>
              <h3 className="Schedule_heading">Second Day</h3>
              <p>
              2:00am: Games<br/>
                7:00am: Mentoring Round 2<br/>
                9:00am: Breakfast<br/>
                12:30pm: Mentoring Round 3<br/>
                1:00pm: Announcement of Results<br/>
                1:30pm - 2:30pm: Lunch<br/>
                2:30pm - 3:00pm: Presentation Making<br/>
                3:00pm - 4:00pm: Presentation<br/>
                4:00pm - 4:30pm: Closing Ceremony
              </p>
              {/* <a href="#">Read More &gt;</a> */}
              <span className="Schedule_date">31 August 2024</span>
              <span className="circle"></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
