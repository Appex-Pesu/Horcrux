import React, { useState, useEffect } from "react";
import "./home.css";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

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
    const targetDate = new Date("2024-09-13");
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
           <span className="text-shadow">H  O  R  C  R  U  X</span>  
           
           
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
          <button type="button" className="tholdu">
  <Link to="/register">Register now</Link>
</button>
        </div>
        <div className="right-section"> 
          <h1 className="greetings">
            <span className="year">
              <span className="span1">2</span>
              <span className="span2">0</span>
              <span className="span3">2</span>
              <span className="span4">4</span>!
            </span>
          </h1>
          <p className="home-text">
            "Unleash Your Creativity, Conquer Challenges, and Make History at Our Epic Hackathon!"<br/>
		<span className="normal-text">
			{/* Step into a realm of limitless possibilities where your wildest dreams become reality. Join us for a colossal hackathon event designed to ignite your imagination and test your prowess like never before. */}
			</span>
          </p>
          <h3 className="thold">
              <span>
                <IoLocationSharp />
              </span>
              13th Floor , BE Block , PES University <br />
               Bangalore
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
