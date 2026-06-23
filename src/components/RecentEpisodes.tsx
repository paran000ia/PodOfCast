import "./css/RecentEpisodes.css";

import { motion } from "framer-motion";

import { RecentEpisodesData } from "../data/RecentEpisodesData";

import Group from "../assets/Group.png";

export default function RecentEpisodes() {
  return (
    <section className="episodes">

      <motion.img
        src={Group}
        alt=""
        className="episodes-decoration"
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      />

      <motion.div
        className="episodes-header"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .8 }}
      >
        <h2>Recent Episodes</h2>

        <p>
          Available on your favorite platform
        </p>
      </motion.div>

      <div className="episodes-grid">

        {RecentEpisodesData.map((episode, index) => (
          <motion.div
            className="episode-card"
            key={episode.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: .6,
              delay: index * .08,
            }}
          >

            <img
              src={episode.image}
              alt={episode.title}
              className="episode-image"
            />

            <div className="episode-content">

              <span className="episode-number">
                Eps. {episode.id}
              </span>

              <h3>{episode.title}</h3>

              <p>
                Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>

              <div className="episode-bottom">

                <div className="tags">
                  <span>{episode.category1}</span>
                  <span>{episode.category2}</span>
                </div>

                <div className="hosts">

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
        className="episodes--btn"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        Browse All Episodes
      </motion.button>

    </section>
  );
}