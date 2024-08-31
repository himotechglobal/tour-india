import { Typography } from '@mui/material'
import React from 'react'

const About = () => {
    const handleClearStorage = () => {
        localStorage.clear(); // Clear localStorage
        window.location.reload(); // Refresh the page
      };
  return (
    <div>
    <nav
    className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
    id="mainNav"
  >
    <div className="container">
      <a className="navbar-brand js-scroll-trigger" href="/">
        Tour India
      </a>
      <button
        className="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse " id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          {/* <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#about">
              About
            </a>
          </li> */}
          {!localStorage.getItem("token") ? <li className="nav-item">
            <a href="/login">Login</a>
          </li>
          :
     <li className="nav-item">
     <Typography sx={{color:"#fff !important"}} component={"a"} mr={"1rem"} color={"#fff"}>
            Welcome!
          </Typography>
     </li>
          }
     
          {localStorage.getItem("token") &&
      <li className="nav-item">
            <Typography sx={{color:"#fff !important",cursor:"pointer"}} component={"a"} onClick={handleClearStorage}>
            Logout
          </Typography>
          </li>
          }
        </ul>
      </div>
    </div>
  </nav>
  <header className="bg-primary text-white header">
    <div className="container text-center">
      <h1>Know about us!</h1>
      <p className="lead">Here you will find whats our motto and mission is</p>
    </div>
  </header>
  <section id="about">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <h2>About Tour India</h2>
          <p className="lead">
            We have wide Varieties of Hotel &amp; Resorts to accomodate you.
            3D4N or 15D16N totally upto you.
          </p>
          <ul>
            <li>Ammenties Selection for every price options</li>
            <li>Visa Ready - we got you everything covered</li>
            <li>Personalized Travel Plans section bachelors to couples</li>
            <li>
              Minimal custom duties and charges so you are free to explore your
              own unique options
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <section id="services" className="bg-light">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <h2>Services we offer</h2>
          <p className="lead">
            We offer cutomized plans as well as specially framed packages to
            accomodate you for the wonderful experience you're going to
            experience while travelling in Incredible India. We are always with
            you with our 24x7 cutomer support on online as well as on call.
            We're always there when you need us. Have a Life remembering Journey
            with our Hotels and Accomodation Partner all over the country of
            delights and culture.
          </p>
        </div>
      </div>
    </div>
  </section>
  <section id="contact">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <h2>Contact us</h2>
          <p className="lead">phone Number. +91 9XXXXXXXXX</p>
          <p className="lead">Fax : XXXXXXXXXXX</p>
          <p className="lead">Email : help@tourindia.com</p>
        </div>
      </div>
    </div>
  </section>
  {/* Footer */}
  <footer className="py-3 bg-dark">
    <div className="container">
      <p className="m-0 text-center text-white">Copyright © Tour India</p>
    </div>
  </footer>

    </div>
  )
}

export default About