import "./navbar.scss";
import { IoManSharp } from "react-icons/io5";
import { MdBrightnessHigh } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaShoppingBag } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import { sliderimg } from "../assets/swiper";
import {Autoplay} from "swiper/modules"
// import slider1 from '../assets/slide1.jpeg';
// import slider2 from '../assets/slide2.jpeg';

function nav() {




    return (
        <div className="bodytag">
            <div className="navbar">
                <div className="navleft">
                    <div className="sign">
                        <IoManSharp /><Link to={"/signlog"}><a>Sign In</a></Link>/<Link to={"/createacc"}><a>Create</a></Link>
                    </div>
                    <div className="sign">
                        <MdBrightnessHigh /><a href="#">Beauty Pass</a>
                    </div>
                </div>
                <div className="navright">
                    <div className="sign">
                        <FaLocationDot /><a href="#">Stores & Events</a>
                    </div>
                    <div className="sign">
                        <FaHeart /> <a href="#">Wishlist</a>
                    </div><div className="sign">
                        <FaShoppingBag /><a href="#">Bag</a>
                    </div>
                </div>

            </div>



            <div className="search">
                <p>SELZ</p>
                <div className="searchbox">
                    <input type="text" placeholder="Search" />
                    <div className="searchbut"><div className="FaSearch"><FaSearch /></div></div>
                </div>
            </div>

            <div className="menus">
                <a className="menulist" href="#">NEW</a>
                <a className="menulist" href="#">BRAND</a>
                <a className="menulist" href="#">MAKEUP</a>
                <a className="menulist" href="#">SKINCARE</a>
                <a className="menulist" href="#">HAIR</a>
                <a className="menulist" href="#">TOOLS & BRUSHES</a>
                <a className="menulist" href="#">BOTH & BODY</a>
                <a className="menulist" href="#">FRAGRANCE</a>
                <a className="menulist" href="#">CLEAN</a>
                <a className="menulist" href="#">GIFT</a>
                <a className="menulist" href="#">SALE</a>
            </div>

            








            




        </div>

    );




}
export default nav;