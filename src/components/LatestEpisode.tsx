import "./css/LatestEpisode.css";

import { motion } from "framer-motion";

import { RecentEpisodesData } from "../data/RecentEpisodesData";

import Group from "../assets/Group.png";

export default function LatestEpisode() {
  return (
    <section className="latest">

      <motion.img
        src={Group}
        alt=""
        className="latest-decoration"
        initial={{ opacity: 0, scale: .6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: .8 }}
      />

      <motion.div
        className="latest-header"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: .8 }}
      >
        <h2>Latest Episodes</h2>

        <p>
          Discover our latest podcast episodes
        </p>
      </motion.div>

      <motion.div
        className="latest-menu"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: .7 }}
      >
        <button className="active">
          All
        </button>

        <button>Business</button>
        <button>Comedy</button>
        <button>Education</button>
        <button>Health</button>
        <button>News</button>
      </motion.div>

      <div className="latest-grid">

        {RecentEpisodesData.map((episode, index) => (

          <motion.div
            className="latest-card"
            key={episode.id}
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{
              duration: .6,
              delay: index * .08
            }}
          >

            <img
              src={episode.image}
              alt={episode.title}
              className="latest-image"
            />

            <div className="latest-content">

              <span className="latest-number">
                Eps. {episode.id}
              </span>

              <h3>
                {episode.title}
              </h3>

              <p>
                Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>

              <div className="latest-bottom">

                <div className="latest-tags">

                  <span>
                    {episode.category1}
                  </span>

                  <span>
                    {episode.category2}
                  </span>

                </div>

                <div className="latest-hosts">

                  <img
                    src={episode.avatar7}
                    alt=""
                  />

                  <img
                    src={episode.avatar8}
                    alt=""
                  />

                </div>

              </div>

            </div>

          </motion.div>

        ))}

      </div>

      <motion.button
        className="latest-btn"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
      >
        LOAD MORE
      </motion.button>

    </section>
  );
}