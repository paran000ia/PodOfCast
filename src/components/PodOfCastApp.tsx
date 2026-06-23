import "./css/PodOfCastApp.css";

import Home from "../assets/Home.png";
import play from "../assets/play.png";

import Scribble from "../assets/Scribble.png";

import { motion } from "framer-motion";

import {
  FaSpotify,
  FaYoutube,
  FaPodcast
} from "react-icons/fa";

export default function PodOfCastApp() {
  return (
    <section className="app">

      <img
        src={Home}
        alt=""
        className="app-phone-left"
      />

      <img
        src={play}
        alt=""
        className="app-phone-right"
      />

      <img
        src={Scribble}
        alt=""
        className="app-decoration"
      />

      <motion.div
        className="app-content"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: .8 }}
      >

        <span className="app-beta">
          BETA
        </span>

        <h2>
          Available now
          <br />
          Pod of Cast App
        </h2>

        <p>
          We just launched our podcast app!
        </p>

        <button>
          DOWNLOAD NOW
        </button>

        <span className="available-text">
          Content also available on:
        </span>

        <div className="app-platforms">

          <FaPodcast />

          <FaSpotify />

          <FaYoutube />

        </div>

      </motion.div>

    </section>
  );
}