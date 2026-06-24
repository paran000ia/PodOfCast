import "./css/LatestPosts.css";

import { motion } from "framer-motion";

import { LatestData } from "../data/LatestData";

export default function LatestPosts() {
  return (
    <section className="latest-posts">

      <motion.div
        className="latest-posts-header"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .8 }}
      >
        <h2>Latest Posts</h2>
      </motion.div>

      <motion.div
        className="latest-posts-menu"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .7 }}
      >
        <button className="active">All</button>
        <button>Business</button>
        <button>News</button>
        <button>Tips & Trick</button>
        <button>Podcast</button>
        <button>Productivity</button>
      </motion.div>

      <div className="article-grid">

        {LatestData.map((item,index)=>(

          <motion.div
            key={item.id}
            className="article-card"
            initial={{ opacity:0,y:80 }}
            whileInView={{ opacity:1,y:0 }}
            transition={{
              duration:.7,
              delay:index*.12
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

              <h3 className={
                item.featured
                ? "featured-title"
                : ""
              }>
                {item.title}
              </h3>

              <p>
                {item.text}
              </p>

              <div className="article-footer">

                <div className="article-tags">

                  {item.tags.map(tag=>(
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

    </section>
  );
}