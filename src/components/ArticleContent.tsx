import "./css/ArticleContent.css";

import { motion } from "framer-motion";
import Scribble from "../assets/Scribble.png";
import Star4 from "../assets/Star4.png";

import Doodle from "../assets/Doodle.png";
import Doodle2 from "../assets/Doodle2.png";

export default function ArticleContent() {
  return (
    <section className="article-content">

      <div className="article-divider"></div>

      <motion.div
        className="quote-card"
        initial={{ opacity: 0, scale: .9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: .7 }}
      >
        <img
          src={Scribble}
          alt=""
          className="quote-scribble"
        />

        <img
          src={Star4}
          alt=""
          className="quote-star"
        />

        <div className="quote-icon">❝</div>

        <h3>
          Quote example goes in here...
        </h3>

        <div className="quote-author">
          John Smith • Social Community Manager
        </div>

      </motion.div>

      <motion.div
        className="lists-grid"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .8 }}
      >

        <div className="bullet-list">

          <h4>Bullet list example:</h4>

          <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </li>

            <li>
              Sit vel, senectus iaculis morbi tincidunt fermentum.
            </li>

            <li>
              Quis dictum cursus faucibus mattis dignissim.
            </li>
          </ul>

        </div>

        <div className="number-list">

          <h4>Number list example:</h4>

          <ol>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </li>

            <li>
              Sit vel, senectus iaculis morbi tincidunt fermentum.
            </li>

            <li>
              Quis dictum cursus faucibus mattis dignissim.
            </li>
          </ol>

        </div>

      </motion.div>

      <motion.div
        className="gallery-grid"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .8 }}
      >

        <div className="gallery-card">
          <img src={Doodle} alt="" />

          <span>
            this is an image with a caption example
          </span>
        </div>

        <div className="gallery-card">
          <img src={Doodle2} alt="" />
          <span className="download-link">
            download here
          </span>
        </div>

      </motion.div>

    </section>
  );
}