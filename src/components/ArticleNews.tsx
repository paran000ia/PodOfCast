import "./css/ArticleNews.css";

import { motion } from "framer-motion";

import { ArticleNewsData } from "../data/ArticleNewsData";

import Vector from "../assets/Vector.png";
import Scribble42 from "../assets/Scribble42.png";

export default function ArticleNews() {
  return (
    <section className="article-news">

      <img
        src={Vector}
        alt=""
        className="article-star"
      />

      <img
        src={Scribble42}
        alt=""
        className="article-scribble"
      />

      <motion.div
        className="article-header"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: .8 }}
      >
        <h2>Article and News</h2>

        <p>
          News, tips, tricks and more
        </p>
      </motion.div>

      <div className="article-grid">

        {ArticleNewsData.map((item, index) => (

          <motion.div
            key={item.id}
            className="article-card"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{
              duration: .7,
              delay: index * .15,
            }}
          >

            <img
              src={item.image}
              alt={item.title}
              className="article-image"
            />

            <div className="article-content">

              <span className="article-category">
                {item.category}
              </span>

              <h3
                className={
                  item.featured
                    ? "featured-title"
                    : ""
                }
              >
                {item.title}
              </h3>

              <p>
                {item.text}
              </p>

              <div className="article-footer">

                <div className="article-tags">

                  {item.tags.map((tag) => (
                    <span key={tag}>
                      {tag}
                    </span>
                  ))}

                </div>

                <span className="article-date">
                  {item.date}
                </span>

              </div>

            </div>

          </motion.div>

        ))}

      </div>

      <button className="browse-btn">
        BROWSE ALL
      </button>

    </section>
  );
}