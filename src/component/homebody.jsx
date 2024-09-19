import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { sliderimg } from "../assets/swiper";
import { brandimg } from "../assets/swiper";
import { Autoplay } from "swiper/modules";
import "./homebody.scss";

export default function homebody() {
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
        
     {brandimg.map((data,index)=>
        <img src={data} alt="" />


    )}

      </div>
    </div>
  );
}
