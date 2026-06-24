import "./css/ArticleDetailsHero.css";

import { motion } from "framer-motion";

import Hero3 from "../assets/Hero3.svg";
import Hero2 from "../assets/Hero2.png";

import {
  FaTwitter,
  FaInstagram,
  FaTiktok,
  FaArrowLeft,
} from "react-icons/fa";

export default function ArticleDetailsHero() {
  return (
    <section className="article-details-hero">

      <motion.img
        src={Hero3}
        alt=""
        className="article-details-left-decoration"
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: .8 }}
      />

      <motion.img
        src={Hero2}
        alt=""
        className="article-details-right-decoration"
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: .8 }}
      />

      <motion.div
        className="article-details-top"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .7 }}
      >

        <button className="back-btn">
          <FaArrowLeft />
          Back to articles
        </button>

        <span className="article-date">
          Sep 12, 2021
        </span>

      </motion.div>

      <motion.div
        className="article-details-content"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .8 }}
      >

        <span className="article-category">
          TIPS & TRICKS
        </span>

        <h1>
          Doodle Artwork 101
        </h1>

        <div className="article-tags">

          <span>art</span>
          <span>tips and trick</span>
          <span>creative</span>

        </div>

        <div className="article-socials">

          <FaTwitter />
          <FaInstagram />
          <FaTiktok />

        </div>

      </motion.div>

    </section>
  );
}