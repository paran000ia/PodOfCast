import "./css/Episode1.css";

import { motion } from "framer-motion";

import EpisodeCover from "../assets/cover18.png";
import Hero3 from "../assets/Hero3.svg";

import {
  FaPlay,
} from "react-icons/fa";

import Host from "../assets/avatar7.png";
import Scribble from "../assets/Hero2.png";

export default function Episode1() {
  return (
    <section className="episode1">

    <div className="episode1-container">
      <motion.div
        className="episode1-left"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: .8 }}
      >
        <img src={EpisodeCover} alt="" />
      </motion.div>

      <motion.img
        src={Hero3}
        alt=""
        className="episode1-star"
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      />

      <motion.img
        src={Scribble}
        alt=""
        className="episode1-scribble"
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      />


      <motion.div
        className="episode1-content"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: .8 }}
      >
        <span className="episode-label">
          Episode 1
        </span>

        <span className="featured">
          FEATURED EPISODE
        </span>

        <h1>
          Are you a Perplexed mind Person?
        </h1>

        <div className="episode-line"></div>

        <p>
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit,
          eiusmod tempor incididunt ut labore
          et dolore magna aliqua.
        </p>

        <div className="episode-author">

          <img src={Host} alt="" />

          <span>
            Hosted by:
            <b> Jane Doe</b>
          </span>

          <span className="date">
            Sep 22, 2021
          </span>

        </div>

        <div className="episode-buttons">

          <button className="subscribe-btn">
            SUBSCRIBE
          </button>

          <button className="listen-btn">
            <FaPlay />
            Listen Now
            <span>(46 min)</span>
          </button>

        </div>

      </motion.div>

      <div className="episode-tags">
        <span>mind-behaviour</span>
        <span>health</span>
      </div>

      </div>
    </section>
  );
}