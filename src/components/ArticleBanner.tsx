import "./css/ArticleBanner.css";

import { motion } from "framer-motion";

import img7 from "../assets/img7.png";

import Scribble6 from "../assets/Scribble6.png";

export default function ArticleBanner() {
  return (
    <section className="article-banner">

      <motion.div
        className="banner-image-wrapper"
        initial={{ opacity: 0, scale: .92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: .9 }}
      >
        <img
          src={img7}
          alt=""
          className="banner-image"
        />
      </motion.div>

      <motion.div
        className="banner-content"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: .8 }}
      >

        <img
          src={Scribble6}
          alt=""
          className="banner-wave"
        />

        <h2>
          Doodle for our podcast
          background room
        </h2>

        <div className="banner-text">

          <div className="banner-column">

            <p>
              Lorem ipsum dolor sit amet,
              <b> consectetur adipiscing elit.</b>
              Quam pellentesque at bibendum euismod
              tellus duis cursus dignissim odio.
              Sit vulputate et integer in.
            </p>

            <p>
              Sit vel, senectus iaculis morbi.
              <b> Amet</b> interdum imperdiet
              laoreet <b>morbi</b> tincidunt
              fermentum, libero.
              Ante enim eget viverra at porttitor
              accumsan.
              <span className="banner-link">
                Orci non here
              </span>
            </p>

          </div>

          <div className="banner-column">

            <p>
              Quis dictum cursus faucibus mattis
              dignissim. Pellentes que purus in
              sed sodales in mauris molestie.
              Eleifend est consectetur interdum
              eu in auctor.
              Gravida leo et.
            </p>

          </div>

        </div>

      </motion.div>

      <div className="banner-divider"></div>

    </section>
  );
}