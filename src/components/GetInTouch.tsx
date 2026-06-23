import "./css/GetInTouch.css";

import { motion } from "framer-motion";

import Vector4 from "../assets/Vector4.png";
import ShiningStars2 from "../assets/ShiningStars2.png";
import Vector2 from "../assets/Vector2.png";

export default function GetInTouch() {
  return (
    <section className="contact">

      <img
        src={Vector4}
        alt=""
        className="contact-scribble"
      />

      <img
        src={ShiningStars2}
        alt=""
        className="contact-sparkle"
      />

      <motion.div
        className="contact-header"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{
          duration: .8,
          type: "spring",
          stiffness: 80
        }}
      >
        <img
          src={Vector2}
          alt=""
          className="contact-star"
        />

        <h2>Get in touch</h2>

        <p>
          Send your message to us
        </p>

      </motion.div>


      <motion.form
        className="contact-form"
        initial={{
          opacity: 0,
          y: 100,
          scale: .95
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1
        }}
        viewport={{ once: false }}
        transition={{
          duration: .8,
          type: "spring"
        }}
      >

        <div className="contact-grid">

          <div className="input-box">
            <label>
              Full name <span>*</span>
            </label>

            <input
              type="text"
              placeholder="Porter Severus"
            />
          </div>


          <div className="input-box">
            <label>
              Email <span>*</span>
            </label>

            <input
              type="email"
              placeholder="johndoe@gmail.com"
            />
          </div>


          <div className="input-box">
            <label>
              Phone <span>*</span>
            </label>

            <input
              type="text"
              placeholder="Phone"
            />
          </div>


          <div className="input-box">
            <label>
              Subject <span>*</span>
            </label>

            <input
              type="text"
              placeholder="Subject..."
            />
          </div>

        </div>


        <div className="input-box message-box">

          <label>
            Message <span>*</span>
          </label>

          <textarea
            placeholder="Your message goes here..."
          />

        </div>


        <div className="contact-bottom">

          <span className="required">
            *required
          </span>


          <button>
            SEND MESSAGE
          </button>


          <p>
            Viverra at port accumsan.
            <span>
              Orci non
            </span>
          </p>

        </div>


      </motion.form>

    </section>
  );
}