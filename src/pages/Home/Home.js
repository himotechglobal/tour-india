import React, { useEffect, useState } from "react";
import Navbar from "../../components/header/Navbar";
import Banner from "./Banner";
import { Box, Typography } from "@mui/material";
import ScrollButton from "../../components/ScrollButton";
import axios from "axios";
import { API_URl } from "../../config/config";

const Home = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  const [filter, setFilter] = useState("*");
  const [places, setPlaces] = useState([]);
  const portfolioItems = [
    { id: 1, category: "corporate", title: "Golden Temple", location: "Punjab", img: "img/p1.jpg", link: "./Pages-inside/GoldenTemple-Info.html" },
    { id: 2, category: "personal", title: "Gwalior Fort", location: "Madhya Pradesh", img: "img/p2.jpg" },
    { id: 3, category: "agency", title: "Twang", location: "Arunachal Pradesh", img: "img/p9.jpg" },
    { id: 4, category: "portal", title: "Alleppey", location: "Kerala", img: "img/p12.jpg" },
    { id: 5, category: "corporate", title: "Camel Safari", location: "Rajasthan", img: "img/p5.jpg" },
    { id: 6, category: "personal", title: "Sanchi Stupa", location: "Madhya Pradesh", img: "img/p6.jpg" },
    { id: 7, category: "agency", title: "Umngot river", location: "Meghalaya", img: "img/p7.jpg" },
    { id: 8, category: "portal", title: "Vivekananda Rock Memorial", location: "Tamil Nadu", img: "img/p10.jpg" },
    { id: 9, category: "corporate", title: "Mehrangarh Fort", location: "Rajasthan", img: "img/p4.jpg" },
    { id: 10, category: "personal", title: "Hampi", location: "Karnataka", img: "img/p3.jpg" },
    { id: 11, category: "agency", title: "Mon", location: "Myanmar", img: "img/p8.jpg" },
    { id: 12, category: "portal", title: "Colva Beach", location: "Goa", img: "img/p11.jpg" },
  ];

  const handleFilterChange = (category) => {
    setFilter(category);
  };

  const filteredItems = filter === "*" ? places : places?.filter(item => item?.category === filter);

  const handleClearStorage = () => {
    localStorage.clear(); // Clear localStorage
    window.location.reload(); // Refresh the page
  };
  const getPlaces = async () => {
    try {
    
      const res = await axios.get(`${API_URl}/places`);

      if (res.status === 200) {
         setPlaces(res.data)
      } 
    } catch (err) {
    console.log(err);
    
    }
  };
  useEffect(()=>{
    getPlaces()
    console.log(places);
    
  },[])
  return (
    <Box
      sx={{
        "& p,li": {
          fontFamily: "KanitRegular!important",
        },
      }}
    >
      <ScrollButton />
      <div className="protfolio-wrap">
  {/* Start Header Area */}
  <header className="default-header">
    <nav className="navbar navbar-expand-lg  navbar-light">
      <div className="container">
        <a className="navbar-brand" href="index.html">
          <img src="img/logo.png" alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="text-white lnr lnr-menu" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-end align-items-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            {!localStorage.getItem("token") ? <li>
              <a href="/login">Login</a>
            </li>
            :
       <li>
       <Typography sx={{color:"#fff !important"}} component={"a"} mr={"1rem"} color={"#fff"}>
              Welcome!
            </Typography>
       </li>
            }
      
        
            <li>
              <a href="#portfolio">Places</a>
            </li>
            <li>
              <a href="#service">Services</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            {localStorage.getItem("token") &&
        <li>
              <Typography sx={{color:"#fff !important",cursor:"pointer"}} component={"a"} onClick={handleClearStorage}>
              Logout
            </Typography>
            </li>
            }
          </ul>
        </div>
      </div>
    </nav>
  </header>
  {/* End Header Area */}
  {/* start banner Area */}
  <section className="banner-area relative" id="home">
    <div className="overlay overlay-bg" />
    <div className="container">
      <div className="row fullscreen d-flex align-items-center justify-content-center" style={{height:"966px"}}>
        <div className="banner-content col-lg-10">
          <h5 className="text-uppercase">
            Be the part of this Wonderful Journey
          </h5>
          <h1>Incredible India!</h1>
          <a href="#" className="primary-btn text-uppercase">
            Explore Now
          </a>
        </div>
      </div>
    </div>
  </section>
  {/* End banner Area */}
  {/* Start portfolio-area Area */}
  <section className="portfolio-area section-gap" id="portfolio">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="menu-content col-lg-10">
              <div className="title text-center">
                <h1 className="mb-10">You'll fall in love with India</h1>
                <p>Explore India from Kashmir to Kaniyakumari</p>
              </div>
            </div>
          </div>
          <div className="filters">
            <ul>
              <li className={filter === "*" ? "active" : ""} onClick={() => handleFilterChange("*")}>
                All
              </li>
              <li className={filter === "north" ? "active" : ""} onClick={() => handleFilterChange("north")}>
                North
              </li>
              <li className={filter === "central" ? "active" : ""} onClick={() => handleFilterChange("central")}>
                Central
              </li>
              <li className={filter === "north-eastern" ? "active" : ""} onClick={() => handleFilterChange("north-eastern")}>
                North-Eastern
              </li>
              <li className={filter === "south" ? "active" : ""} onClick={() => handleFilterChange("south")}>
                South
              </li>
            </ul>
          </div>
          <div className="filters-content">
            <div className="row grid">
              {filteredItems?.map(item => (
                <div key={item.id} className={`single-portfolio col-sm-4 all ${item.category}`}>
                  <div className="item">
                    <img src={`img/${item.image}`} alt={item.name} />
                    <div className="p-inner">
                      <h4><a href={"#"}>{item.name}</a></h4>
                      <div className="cat">{item.location}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
  {/* End portfolio-area Area */}
  {/* Start service Area */}
  <section className="service-area section-gap relative" id="service">
    <div className="overlay overlay-bg" />
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="menu-content pb-60 col-lg-10">
          <div className="title text-center">
            <h1 className="mb-10 text-white">Always in our customer Favour</h1>
            <p>Who are always with tight Budget</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End service Area */}
  {/* Start services Area */}
  <section className="services-area pb-100">
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <div className="single-service">
            <img className="img-fluid" src="img/s1.png" alt="" />
            <h4>Ammenties Selection</h4>
            <p>
              It's totaly on you what you want and what you want to let it go on
              Hotel Selection process.
            </p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="single-service">
            <img className="img-fluid" src="img/s2.png" alt="" />
            <h4>Visa Ready</h4>
            <p>
              Just 32 Hours - What it takes get your Visa Ready and other
              documentation necessary for travel.
            </p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="single-service">
            <img className="img-fluid" src="img/s3.png" alt="" />
            <h4>Personalized Travel Plans</h4>
            <p>
              We have wide Varieties of Hotel &amp; Resorts to accomodate you.
              3D4N or 15D16N totally upto you.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End services Area */}
  {/* Start review Area */}
  <section className="review-area section-gap" id="testimonial">
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="menu-content pb-60 col-lg-10">
          <div className="title text-center">
            <h1 className="mb-10">How Our Customers felt for Us</h1>
            <p>Who are in extreme love with friendly &amp; inviting people</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="single-review">
            <img src="img/c1.png" alt="" />
            <div className="title d-flex flex-row">
              <a href="#">
                <h4>Fannie Rowe</h4>
              </a>
              <div className="star">
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
              </div>
            </div>
            <p>
              It was a life Experience to visit such a beautiful cultural
              country.
            </p>
          </div>
          <div className="single-review">
            <img src="img/c3.png" alt="" />
            <div className="title d-flex flex-row">
              <a href="#">
                <h4>Lillie Summers</h4>
              </a>
              <div className="star">
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
              </div>
            </div>
            <p>Just one Word - Incredible!</p>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="single-review">
            <img src="img/c2.png" alt="" />
            <div className="title d-flex flex-row">
              <a href="#">
                <h4>Bob Marley</h4>
              </a>
              <div className="star">
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-starchecked" />
                <span className="fa fa-star checked" />
              </div>
            </div>
            <p>Damm! I'm thinking of staying here in this World.</p>
          </div>
          <div className="single-review">
            <img src="img/c4.png" alt="" />
            <div className="title d-flex flex-row">
              <a href="#">
                <h4>Jackie Chan</h4>
              </a>
              <div className="star">
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
              </div>
            </div>
            <p>
              Now, I am big fan of Power Yoga. Thanks for such a gift to this
              world.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End review Area */}
  {/* start footer Area */}
  <footer className="footer-area section-gap">
    <div className="container">
      <div className="row">
        <div className="col-lg-5 col-md-6 col-sm-6">
          <div className="single-footer-widget">
            <h6>About Us</h6>
            <p>
              We Provide Tour Plans for your most comfortable travel ever. Let
              yourself dive into the Beauty, Culture &amp; festivals of India.
              Have You're Good time at India.
            </p>
            <p className="footer-text">
              Copyright © All rights reserved | This Website is created with{" "}
              <i className="fa fa-heart-o" aria-hidden="true" /> by{" "}
              <a href="https://github.com/mrjatinchauhan" target="_blank">
                Jatin Chauhan
              </a>
            </p>
          </div>
        </div>
        <div className="col-lg-5  col-md-6 col-sm-6">
          <div className="single-footer-widget">
            <h6>Newsletter</h6>
            <p>Stay update with our latest</p>
            <div className="" id="mc_embed_signup">
              <form
                target="_blank"
                action=""
                method="get"
                className="form-inline"
              >
                <input
                  className="form-control"
                  name="EMAIL"
                  placeholder="Enter Email"
                  onfocus="this.placeholder = ''"
                  onblur="this.placeholder = 'Enter Your Email Here '"
                  required=""
                  type="email"
                />
                <button className="click-btn btn btn-default">
                  <i className="fa fa-long-arrow-right" aria-hidden="true" />
                </button>
                <div className="info" />
              </form>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-6 col-sm-6 social-widget">
          <div className="single-footer-widget">
            <h6>Follow Us</h6>
            <p>Let us be social</p>
            <div className="footer-social d-flex align-items-center">
              <a href="#">
                <i className="fa fa-facebook" />
              </a>
              <a href="#">
                <i className="fa fa-twitter" />
              </a>
              <a href="#">
                <i className="fa fa-snapchat" />
              </a>
              <a href="#">
                <i className="fa fa-instagram" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* End footer Area */}
</div>

    </Box>
  );
};

export default Home;
