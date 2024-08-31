import React from 'react'
import ScrollButton from '../../components/ScrollButton'
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'

const Order = () => {
    const handleClearStorage = () => {
        localStorage.clear(); // Clear localStorage
        window.location.reload(); // Refresh the page
      };
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
  <Box className="portfolio-area" id="portfolio" sx={{background:"rgb(0 123 255 / 62%)",my:"2rem"}}>
        <div className="">
 <TableContainer>
          <Table
            aria-label="simple table"
            sx={{
              "& .MuiTableCell-root": {
                borderBottom: "1px solid rgba(255,255, 255, 0.12) !important",
                color: "#000",
                textAlign: "start",
              },
              "& th": {
               fontWeight:"600",
               fontSize:"18px"
              },
            }}
          >
            <TableHead>
              <TableRow>
                <TableCell align="right">Order Id</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Location</TableCell>
                <TableCell align="right">Category </TableCell>
                <TableCell align="right">Image</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
          
           
            {portfolioItems?.map((e,i)=>(
                <TableRow key={i}>
             
             <TableCell align="right">{e.id}</TableCell>
             <TableCell align="right">{e.title}</TableCell>
             <TableCell align="right">{e.location}</TableCell>
             <TableCell align="right">{e.category}</TableCell>
             <TableCell align="right">
               <Typography
                 component={"img"}
                 src={e.img}
                 sx={{ width: "40px", borderRadius: "100%" }}
               />
             </TableCell>
           </TableRow>
            )) }
            </TableBody>
          </Table>
        </TableContainer>
        </div>
        </Box>
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
  )
}

export default Order