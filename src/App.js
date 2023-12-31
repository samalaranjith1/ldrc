import "./App.css";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Home from "./components/Home";
import { useEffect } from "react";
import ContactUs from "./components/ContactUs";
import BottomFooter from "./components/BottomFooter";
import PaymentDetails from "./components/PaymentDetails";
import Search from "./components/Search";

function App() {
  const handleResize = () => {
    if (window.innerWidth < 720) {
      // alert("Please use window width more than 720px for better experience");
      window.resizeTo(725, "auto");
    }
  };

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });
  return (
    <Router>
      <Navigation />
      <Routes>
        {/* <Route path="/" element={<Navigation />} /> */}
        <Route exact path="/home" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/paymentdetails" element={<PaymentDetails />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <BottomFooter style={{ position: "fixed", bottom: "5px" }} />
    </Router>
  );
}

export default App;
