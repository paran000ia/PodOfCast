import "./css/ListenersSay2.css";

import img4 from "../assets/img4.png";
import Sparkle2 from "../assets/Sparkle2.png";

import { motion } from "framer-motion";

export default function ListenersSay2() {
  return (
    <section className="listeners2">

      <motion.div
        className="listeners2-header"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: .8 }}
      >
        <h2>
          What our listeners say
        </h2>

        <p>
          Their experience throughout every platform
        </p>
      </motion.div>

      <motion.div
        className="listeners2-image-wrapper"
        initial={{ opacity: 0, scale: .95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: .8 }}
      >

        <img
          src={img4}
          alt=""
          className="listeners2-image"
        />

         <motion.img
      src={Sparkle2}
      alt=""
      className="listeners2-Sparkle"
     initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      />

      </motion.div>

      <motion.div
        className="history-title"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: .8 }}
      >

        <h3>
          About and History
        </h3>

      </motion.div>

      <div className="history-content">

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: .8 }}
        >

          <p>
            Eu non diam phasellus vestibulum lorem.
            Fringilla est ullamcorper eget nulla facilisi
            etiam dignissim. Id diam vel quam elementum
            pulvinar.
          </p>

          <p>
            Elementum eu facilisis sed odio morbi quis
            commodo. Sed odio morbi quis commodo odio
            aenean sed adipiscing odio diam.
          </p>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: .8 }}
        >

          <p>
            Lorem ipsum dolor sit amet,
            <strong> consectetur adipiscing elit.</strong>
            Quam pellentesque at bibendum euismod tellus
            duis cursus dignissim odio.
          </p>

          <p>
            Sit vulputate et integer in.
            Sit vel, senectus iaculis morbi.
            <strong> Amet interdum imperdiet</strong>
            laoreet morbi tincidunt fermentum.
          </p>

        </motion.div>

      </div>

    </section>
  );
}