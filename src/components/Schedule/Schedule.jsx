import React from "react";
import "./Schedule.css";

const Timeline = () => {
  return (
    <div>
      <div className="about-head-section">
        <h1 className="heading-tag-line"> S C H E D U L E </h1>
        <hr className="heading-underline" />
      </div>
      <div className="Schedule_main" id="Schedule">
        <div className="Schedule_container">
          <ul>
            <li>
              <h3 className="Schedule_heading">🎉 Pre-Events</h3>
              <p>
                🕒 3:00 PM - 4:00 PM: Registration & Meet-and-Greet<br />
                🎤 4:00 PM - 4:30 PM: Grand Opening Ceremony - Let's Get Started!<br />
              </p>
              <span className="Schedule_date">13 September 2024</span>
              <span className="circle"></span>
            </li>
            <li>
              <h3 className="Schedule_heading">👾 First Day - Let the Code Begin!</h3>
              <p>
                💻 5:00 PM: Coding Round Kicks Off - Time to Shine!<br />
                🔍 8:00 PM: Mentoring Round 1 - Show Your Progress & Get Expert Tips!<br />
              </p>
              <span className="Schedule_date">13 September 2024</span>
              <span className="circle"></span>
            </li>
            <li>
              <h3 className="Schedule_heading">🎮 Second Day - The Final Countdown</h3>
              <p>
                🎮 2:00 AM: Late Night Games - Unwind & Have Fun!<br />
                🕖 7:00 AM: Mentoring Round 2 - Time to Fine-Tune Your Ideas!<br />
                🕧 12:30 PM: Mentoring Round 3 - The Crucial Deciding Review!<br />
                🏆 1:00 PM: Round 2 Results - Who's Making It to the Final Showdown?<br />
                🎤 2:30 PM - 3:00 PM: Presentation Prep - Get Ready to Wow the Judges!<br />
                💥 3:00 PM - 4:00 PM: Final Presentations - Pitch Your Ideas to Industry Experts!<br />
                🎉 4:00 PM - 4:30 PM: Closing Ceremony - Celebrate Your Achievements!<br />
              </p>
              <span className="Schedule_date">14 September 2024</span>
              <span className="circle"></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
