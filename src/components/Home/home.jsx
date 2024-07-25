import React, { useState, useEffect } from "react";
import "./home.css";
import { FiArrowUpRight } from "react-icons/fi";
import { IoLocationSharp } from "react-icons/io5";

const Home = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  function calculateTimeLeft() {
    const currentTime = new Date();
    const targetDate = new Date("2024-08-30");
    targetDate.setHours(16, 1, 1); // Set the target time to 11:59 pm

    const timeDiff = targetDate.getTime() - currentTime.getTime();

    if (timeDiff <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeDiff / 1000 / 60) % 60);
    const seconds = Math.floor((timeDiff / 1000) % 60);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  return (
    <div className="home-container" id="Home">
      <div className="title-container">
        <h2 className="hackathon-title">
          Ctrl + <span>Alt</span> + Code
        </h2>
      </div>
      <div className="section">
        <div className="left-section">
          <h3 className="date">
            <b className="lgx-counter">30</b> <span>August</span>
          </h3>
          <div className="timer">
            <div className="timer-item">
              <div className="timer-item-value">{timeLeft.days}</div>
              <div className="timer-item-label">Days</div>
            </div>
            <div className="timer-item">
              <div className="timer-item-value">{timeLeft.hours}</div>
              <div className="timer-item-label">Hours</div>
            </div>
            <div className="timer-item">
              <div className="timer-item-value">{timeLeft.minutes}</div>
              <div className="timer-item-label">Minutes</div>
            </div>
            <div className="timer-item">
              <div className="timer-item-value">{timeLeft.seconds}</div>
              <div className="timer-item-label">Seconds</div>
			</div>
          </div>
	  <button
              type="button"
              className="btn btn-2 hover-slide-right register-btn"
            >
              <a href="/" target="_blank">
                Register Now 
              </a>
            </button>
        </div>
        <div className="right-section"> 
          <h1 className="greetings">
            Welcome to Hackathon&nbsp;
            <span className="year">
              <span className="span1">2</span>
              <span className="span2">0</span>
              <span className="span3">2</span>
              <span className="span4">4</span>!
            </span>
          </h1>
          <p className="home-text">
            "Unlock your potential, solve challenges, <br />
            and leave your mark at our Hackathon event."
          </p>
          <h3 className="college-name">
              <span>
                <IoLocationSharp />
              </span>
              PES University
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
