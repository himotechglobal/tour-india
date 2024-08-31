import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home.js';
import AOS from "aos";
import "aos/dist/aos.css";
import SignUp from './components/SignUp.js';
import Login from './components/Login.js';
import PrivateRoute from './PrivateRoute.js';
import Order from './pages/Order/Order.js';
import About from './pages/About/About.js';


function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
        {/* <Route  element={<PrivateRoute />}>
     
        </Route> */}
        <Route exact path="/" element={<Home />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/order" element={<Order />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
