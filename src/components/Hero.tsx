import "./css/Hero.css";

import Hero2 from "../assets/Hero2.png";
import Hero3 from "../assets/Hero3.svg";

import PodcastCard from "./PodcastCard";

import { podcastData } from "../data/podcastData";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { motion } from "framer-motion";

import {
  FaSpotify,
  FaYoutube,
  FaPodcast,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section className="hero">

      <motion.div className="hero-left"
       initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}>
        <img src={Hero3} alt="" />
      </motion.div>

      <motion.div className="hero-right"
       initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}>
        <img src={Hero2} alt="" />
      </motion.div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .8 }}
      >
        <h1>
          Your Daily
          <span>Podcast</span>
        </h1>

        <p>
          We cover all kinds of categories and
          <br />
          a weekly special guest.
        </p>
      </motion.div>

      <div className="hero-slider">

        <Swiper
          slidesPerView={"auto"}
          spaceBetween={24}
        >
          {podcastData.map((item) => (
            <SwiperSlide
              key={item.id}
              style={{ width: "310px" }}
            >
              <PodcastCard
                image={item.image}
                title={item.title}
              />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

      <div className="supported">

        <span>Supported by:</span>

        <div>
          <FaSpotify />
          <span>Spotify</span>
        </div>

        <div>
          <FaPodcast />
          <span>Google Podcasts</span>
        </div>

        <div>
          <FaYoutube />
          <span>YouTube</span>
        </div>

      </div>

    </section>
  );
}