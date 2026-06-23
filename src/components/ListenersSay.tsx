import Sparkle from "../assets/Sparkle.png";
import "./css/ListenersSay.css";
import ListenersData from "../data/ListenersData";
import { motion } from "framer-motion";

export default function ListenersSay() {
  return (
    <section className="listeners">
      <div className="listeners-container">
        <motion.div
  className="listeners-header"
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
          <motion.span
  className="star"
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
            <img src= {Sparkle} alt="Sparkle" />
          </motion.span>

          <h2>What our listeners say</h2>

          <p>Their experience throughout every platform</p>
        </motion.div>

        <div className="reviews-grid">
          {ListenersData.map((review) => (
            <motion.div
  className="review-card"
  key={review.id}
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
              <span className="quote">❝</span>

              <p>{review.text}</p>

              <div className="review-user">
                <img src={review.avatar} alt={review.author} />

                <div>
                  <h4>{review.author}</h4>
                  <span>{review.platform}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div className="reviews-buttons"
        initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}>
          <button>←</button>
          <button>→</button>
        </motion.div>
      </div>
    </section>
  );
}