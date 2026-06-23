import "./css/FounderMain.css";

import { motion } from "framer-motion";

import { FounderMainData } from "../data/FounderMainData";

import {
  FaTwitter,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";

import Vector from "../assets/Vector.png";

export default function FounderMain() {
  return (
    <section className="founder">

      <motion.h2
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: .8 }}
      >
        Founder and Main Host
      </motion.h2>

      <div className="founder-grid">

        {FounderMainData.map((item, index) => (

          <motion.div
            key={item.id}
            className="founder-card"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{
              duration: .8,
              delay: index * .2,
            }}
          >

            <img
              src={item.image}
              alt={item.name}
              className="founder-image"
            />

            <div className="founder-content">

              <img
                src={Vector}
                alt=""
                className="founder-star"
              />
        
              

              <span>{item.role}</span>

              <h3>{item.name}</h3>

              <p>{item.text}</p>

              <div className="founder-socials">

                <span>follow me:</span>

                <FaTiktok />
                <FaTwitter />
                <FaInstagram />

              </div>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}