import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { bannerpics } from "../data/BannerPictures";
import { Box, Image, Text, Button } from "@chakra-ui/react";

function BannerCourosel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    speed: 2000,
    fade: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: false,
    appendDots: (dots) => (
      <Box
        style={{
          position: "absolute",
          bottom: "10px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <ul style={{ margin: "0", padding: "0", listStyle: "none" }}>{dots}</ul>
      </Box>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "1rem",
          height: "1rem",
          borderRadius: "50%",
          backgroundColor: i === currentSlide ? "#ffffff" : "#999999",
          margin: "0 15px",
          
          cursor: "pointer",
        }}
        onClick={() => {
          setCurrentSlide(i);
        }}
      ></div>
    ),
    beforeChange: (current, next) => {
      setCurrentSlide(next);
    },
  };

  return (
    <Box  className="slider-container">
      <Slider {...settings}>
        {bannerpics.map((pic) => (
          <div className="slick-slide" key={pic.id}>
            <Box position="relative" h={{base:'35rem',lg:'50rem'}}>
              <Image src={pic.imageurl} w="100%" objectFit="cover" h="100%" style={{ filter: "brightness(60%)" }} />
              <Box
                position="absolute"
                top={{base:'50%',lg:'50%'}}
                left={{base:'50%',lg:'80%'}}
                transform="translate(-50%, -50%)"
                textAlign="center"
                color="white"
                w={{base:'15rem',lg:'30rem'}}
                
              >
                <Text fontSize={{base:'xl',lg:'5xl'}} fontWeight="bold" >
                  {pic.description}
                </Text>
                <Button
                  variant="solid"
                  colorScheme="whatsapp"
                  size={{base:'sm',lg:'lg'}}
                  mt="4"
                >
                  <Text w="100%" fontSize={{base:'md',lg:'xl'}}>
                    Shop Now
                  </Text>
                </Button>
              </Box>
            </Box>
          </div>
        ))}
      </Slider>
    </Box>
  );
}

export default BannerCourosel;
