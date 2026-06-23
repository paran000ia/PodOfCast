import "./css/Sponsor2.css";

import { motion } from "framer-motion";

import { Sponsor2Data } from "../data/Sponsor2Data";

import {
  FaSpotify,
  FaYoutube,
  FaPodcast,
} from "react-icons/fa";

export default function Sponsor2() {
  return (
    <section className="sponsor2">

      <motion.div
        className="sponsor2-header"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: .8 }}
      >
        <h2>Our Sponsor</h2>

        <p>
          Our current official sponsor
        </p>
      </motion.div>

      <div className="sponsor2-grid">

        {Sponsor2Data.map((item, index) => (

          <motion.div
            key={item.id}
            className="sponsor2-card"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{
              duration: .7,
              delay: index * .15,
            }}
          >

            <div className="sponsor-logo">

              {item.title === "Spotify" && <FaSpotify />}
              {item.title === "Google Podcasts" && <FaPodcast />}
              {item.title === "YouTube" && <FaYoutube />}

              <h3>{item.title}</h3>

            </div>

            <div className="line"></div>

            <p>{item.text}</p>

          </motion.div>

        ))}

      </div>

      <div className="sponsor-buttons">

        <button>←</button>
        <button>→</button>

      </div>

    </section>
  );
}