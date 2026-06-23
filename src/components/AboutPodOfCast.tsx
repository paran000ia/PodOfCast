import "./css/AboutPodOfCast.css";

import Hero3 from "../assets/Hero3.svg";
import Hero2 from "../assets/Hero2.png";
import Vector4 from "../assets/Vector4.png";

import { AboutStatsData } from "../data/AboutStatsData";

import { motion } from "framer-motion";

export default function AboutPodOfCast() {
  return (
    <section className="about-podcast">

      <img
        src={Hero3}
        alt=""
        className="about-left"
      />

      <img
        src={Hero2}
        alt=""
        className="about-right"
      />

      <motion.div
        className="about-content"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: .8 }}
      >
        <h1>
          About
          <span>Pod of Cast</span>
        </h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </p>

        <div className="about-buttons">

          <button className="sponsor-btn">
            BECOME SPONSOR
          </button>

          <button className="subscribe-btn">
            SUBSCRIBE
          </button>

        </div>

      </motion.div>

      <div className="about-stats">

        {AboutStatsData.map((item, index) => (

          <motion.div
            key={item.title}
            className="stat-card"
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{
              duration: .7,
              delay: index * .15,
            }}
          >

            <h3>{item.number}</h3>

            <p>{item.title}</p>

          </motion.div>

        ))}

      </div>

      <img
        src={Vector4}
        alt=""
        className="about-scribble"
      />

    </section>
  );
}