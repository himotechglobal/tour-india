
import React, { useEffect, useRef } from "react";
import slider_1 from "../../Assets/Images/banner_1.png";
import slider_2 from "../../Assets/Images/banner_2.png";
import slider_3 from "../../Assets/Images/banner_3.png";
import slider_4 from "../../Assets/Images/banner_4.png";
import mobile_1 from "../../Assets/Images/mobile_1.png";
import mobile_2 from "../../Assets/Images/mobile_2.png";
import mobile_3 from "../../Assets/Images/mobile_3.png";
import mobile_4 from "../../Assets/Images/mobile_4.png";
import { Box, Container } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  const bannerData = [
    {
      id: 1,
      images: slider_2,
      mobImg:mobile_1
    },
    {
      id: 2,
      images: slider_3,
      mobImg:mobile_2
    },
    {
      id: 3,
      images: slider_4,
      mobImg:mobile_3
    },
    {
      id: 4,
      images: slider_1,
      mobImg:mobile_4
    },
    
  ];
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiper = swiperRef.current.swiper;

    const slideInterval = setInterval(() => {
      if (swiper.isEnd) {
        swiper.slideTo(0, 0, false); // Instantly go to the first slide without transition
      } else {
        swiper.slideNext(0, false); // Instantly go to the next slide without transition
      }
    }, 4000); // Adjust the delay as needed

    return () => {
      clearInterval(slideInterval);
    };
  }, []);
  return (
    <>
      <Box position={"relative"} lineHeight={0} color={"#fff"}>
        <Swiper
          ref={swiperRef}
          spaceBetween={30}
          centeredSlides={true}
          // autoplay={{
          //   delay: 3500,
          //   speed:0,
          //   disableOnInteraction: false,
          // }}
          loop={true} // Set loop to true to seamlessly loop the slides
          speed={0} // Set speed to 0 for instant slide transition
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
          style={{ position: "relative" }}
        >
          {bannerData.map((e, index) => (
            <SwiperSlide key={index}>
              {/* <Box
                sx={{
                  background:
                    "linear-gradient(rgb(0 0 0 / 59%), rgb(34 75 141 / 0%))",
                  position: "absolute",
                  height: "100%",
                  top: "0",
                  width: "100%",
                  lineHeight: "0",
                }}
              /> */}
              <Box
                // component={"img"}
                // src={e.images}
                sx={{
                  width: "100%",
                  backgroundImage: {md:`url(${e.images})`,sm:`url(${e.mobImg})`,xs:`url(${e.mobImg})`},
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% 100%",
                  backgroundPosition:"100% 100%",

                  height: "100vh",
                }}
              />
              <Container>
                {/* <Box
                  sx={{
                    position: "absolute",
                    top: "30%",
                    ml: { md: "0", xs: "2rem" },
                    left: "50%",
                    transform: "translate(-50%,-30%)",
                  }}
                >
                  {e.title &&<Typography
                    sx={{
                      fontSize: { sm: "2.5rem", xs: "1.8rem" },
                      lineHeight: { md: "3.5rem", xs: "2.2rem" },
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                  {e.title}
                  </Typography>}
                  <Typography
                    sx={{
                      fontSize: { sm: "2rem", xs: "1.2rem" },
                      width: { md: "500px", xs: "70%" },
                      fontWeight: "bold",
                      textAlign: "center",
                      color: e.color,
                    }}
                  >
                    {e.desc}
                  </Typography>
                </Box> */}
              </Container>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </>
  );
};

export default Banner;
