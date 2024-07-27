// import React from "react";
// import "./App.css";
// import {
//   Footer,
//   Home,
//   Navbar,
//   Theme,
//   Prize,
//   Scheduled,
//   Faq,
//   Venue,
// } from "./components";
// import Register from './components/Register/Register.jsx';

// import { TopButton } from "./components/TopButton";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// const App = () => {
//   return (
// 	  <Router>
// 		<div className="App">
//       <Navbar />
// 	  <Routes>
// 		<Route path="/" exact component={<Home/>} />
// 		<Route path="/register" element={<Register />} />
// 	  </Routes>
//       <Home />
//       <Theme />
//       <Venue />
//       <Scheduled />
//       <Prize />
//       <Faq />
//       <Footer />
//       <TopButton />
//     </div>
// 	</Router>
//   );
// };

// export default App;



import React from "react";
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

  return (
    <div className="App">
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

