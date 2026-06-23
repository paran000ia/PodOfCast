import "./css/Sponsor.css";

import { motion } from "framer-motion";

import { SponsorData } from "../data/SponsorData";

import Star4 from "../assets/Star4.png";
import Vector42 from "../assets/Vector42.png";
import Sparkle2 from "../assets/Sparkle2.png";

export default function Sponsor() {
  return (
    <section className="sponsor">

      <motion.img
        src={Star4}
        alt=""
        className="sponsor-star"
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      />

      <motion.img
      src={Sparkle2}
      alt=""
      className="sponsor-Sparkle"
     initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      />

      <motion.img
        src={Vector42}
        alt=""
        className="sponsor-scribble"
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      />

      <motion.div
        className="sponsor-header"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .8 }}
      >
        <h2>Become our sponsor</h2>

        <p>
          Get exclusive episodes, merch and more
        </p>
      </motion.div>

      <div className="sponsor-grid">

        {SponsorData.map((item, index) => (
          <div
            key={item.title}
            className="sponsor-column"
          >

            <motion.div
              className={`plan-top ${
                item.popular ? "popular" : ""
              }`}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .7,
                delay: index * .15,
              }}
            >

              <div className="plan-title-row">

                <h3>{item.title}</h3>

                {item.popular && (
                  <span className="popular-badge">
                    MOST POPULAR
                  </span>
                )}

              </div>

              <p className="plan-description">
                {item.topText}
              </p>

              <div className="price-row">

                <button>
                  SUBSCRIBE
                </button>

                <div className="price-box">

                  <span className="price">
                    {item.price}
                  </span>

                  <span className="month">
                    /month
                  </span>

                </div>

              </div>

            </motion.div>

            <motion.div
              className={`plan-bottom ${
                item.popular ? "popular" : ""
              }`}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .7,
                delay: index * .15 + .15,
              }}
            >

              <span className="included">
                What's included:
              </span>

              <ul>

                {item.benefits.map((benefit) => (
                  <li key={benefit}>
                    {benefit}
                  </li>
                ))}

              </ul>

            </motion.div>

          </div>
        ))}

      </div>

    </section>
  );
}