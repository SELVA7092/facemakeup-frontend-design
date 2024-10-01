import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { sliderimg } from "../assets/swiper";
import { brandimg } from "../assets/swiper";
import { Autoplay } from "swiper/modules";
import "./homebody.scss";
import { prodetail } from "../assets/swiperpro.jsx";
import { useState } from "react";

export default function Homebody() {

  
  return (
    <div className="main">
      <div id="main-slider">
        <div className="slider">
          <Swiper
            id="swiper"
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            loop={true}
            spaceBetween={1}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {/* <SwiperSlide><img src={slider1} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={slider2} alt="" /></SwiperSlide> */}

            {sliderimg.map((data, index) => (
              <SwiperSlide key={index} className="image-container">
                <img src={data} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="listview">
        <div className="listviewcontent">NEW ARRIVALS</div>
        <div className="listviewcontent">HOT & HAPPENING</div>
        <div className="listviewcontent">BEAUTY UNDER 999</div>
        <div className="listviewcontent">BESTSELLERS</div>
        <div className="listviewcontent">BEST OF MAKEUP</div>
        <div className="listviewcontent">EVERYDAY ESSENTIALS</div>
      </div>


      <div className="ShopByBrands">Shop By Brands </div>


      <div className="brandslist">
        {brandimg.map((data, index) => (
          <img src={data} alt="" />
        ))}
        {/* <hr style={{ height: "60px"}} /> */}
      </div>

      <div id="main-slider">
        <div className="slider">
          <Swiper
            id="swiper2"
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            loop={true}
            spaceBetween={1}
            slidesPerView={5}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {prodetail.map((data, index) => (
              <SwiperSlide key={index} className="image-cont">
                <img src={data.img} alt="" />
                <div>{data.discription}</div>
                <div>Rs.₹{data.price}</div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
       {/* <hr />
      <div className="footer" >
        <div className="footerview">
          <div className="aboutus">ABOUT US </div>
          <div>About Sephora</div>
          <div>Privacy Policy</div>
          <div>Terms of Use</div>
          <div>Sitemap</div>
          <div>International</div>
        </div>
        
        <div className="footerview">
          <div className="aboutus">CUSTOMER CARE</div>
          
          <div onMouseEnter={handleColor} style={{color:`${color}`}}>FAQ</div>
          <div>Delivery</div>
          <div>Find a Store</div>
          <div>Beauty Services</div>
          <div>Contact Us</div>
        </div>
      </div>
      <hr /> */}
      





    </div>
  );
}
