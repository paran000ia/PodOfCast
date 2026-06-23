import "./css/TalkListen.css";

import Illustration01 from "../assets/Illustration01.png";
import Illustration02 from "../assets/Illustration02.png";
import Star4 from "../assets/Star4.png";
import Vector4 from "../assets/Vector4.png";
import avatar from "../assets/avatar.png";

import { motion } from "framer-motion";

export default function TalkListen() {
  return (
    <section className="talk">

      <motion.h2
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Talk. Listen. Get inspired
        <br />
        by every minute of it.
      </motion.h2>

      <div className="talk-grid">

        <motion.div
          className="talk-card"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="talk-image">
            <img
              src={Illustration01}
              alt="Illustration 01"
            />
          </div>

          <p>
            Lorem ipsum dolor sit amet,
            consectetur adipisicing elit.
            Curabitur ac ultrices odio.
          </p>
        </motion.div>

        <motion.div
          className="talk-card"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="talk-image">
            <img
              src={Illustration02}
              alt="Illustration 02"
            />
          </div>

          <p>
            Lorem ipsum dolor sit amet,
            consectetur adipisicing elit.
            Curabitur ac ultrices odio.
          </p>
        </motion.div>

      </div>

      <motion.div
        className="review"
       initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >

        <div className="review-quote">
          ❝
        </div>

        <img
          src={Star4}
          alt="Star"
          className="review-star"
        />

        <h3>
          One of the best daily podcasts that
          covers every topic on Spotify.
        </h3>

        <img
          src={Vector4}
          alt="Vector4"
          className="review-Vector4"
        />

        <div className="review-user">

          <img
            src={avatar}
            alt="User"
          />

          <div className="review-user-info">
            <h4>John Smith</h4>
            <span>
              Social Community Manager
            </span>
          </div>

        </div>

      </motion.div>

    </section>
  );
}