import React, { useEffect, useRef } from "react";
import "./App.css";
import {
  Footer,
  Home,
  Navbar,
  Theme,
  Prize,
  Scheduled,
  Faq,
  Venue,
} from "./components";
import Register from './components/Register/Register.jsx';
import { TopButton } from "./components/TopButton";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Error attempting to play video:", error);
      });
    }
  }, []);

  return (
    <div className="App">
      {/* Video background */}
      <video 
        ref={videoRef}
        autoPlay 
        muted 
        loop 
        playsInline 
        id="background-video"
      >
        <source src="src/assets/background.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

      {/* App content */}
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Home />
            <Theme />
            <Venue />
            <Scheduled />
            <Prize />
            <Faq />
            <Footer />
            <TopButton />
          </>
        } />
        <Route path="/register" element={
          <>
            <Register />
            <Footer />
          </>
        } />
      </Routes>
    </div>
  );
};

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}