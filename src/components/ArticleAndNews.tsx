import "./css/ArticleAndNews.css";

import { motion } from "framer-motion";

import Hero2 from "../assets/Hero2.png";
import Hero3 from "../assets/Hero3.svg";

import { FiSearch } from "react-icons/fi";

export default function ArticleAndNews() {
  return (
    <section className="article-hero">

        
      <motion.img
        src={Hero3}
        alt=""
        className="article-hero-left"
        initial={{ opacity: 0, scale: .6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: .8 }}
      />

      <motion.img
        src={Hero2}
        alt=""
        className="article-hero-right"
        initial={{ opacity: 0, scale: .6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: .8 }}
      />

      <motion.div
        className="article-hero-content"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .8 }}
      >
        <h1>
          Article
          <span>and News</span>
        </h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam quis.
        </p>
      </motion.div>

      <motion.div
        className="article-search"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: .3, duration: .8 }}
      >
        <FiSearch />

        <input
          type="text"
          placeholder="Search..."
        />
      </motion.div>

    </section>
  );
}