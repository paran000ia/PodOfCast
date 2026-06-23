import MembershipData from "../data/MembershipData";
import "./css/Membership.css";
import Star2 from "../assets/Star2.png";
import { motion } from "framer-motion";

export default function Membership() {
  return (
    <section className="membership">
      <div className="membership__container">

         <motion.img
        src={Star2}
        alt="Star2"
        className="review-star2"
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        />

        <motion.div
  className="membership__header"
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
          <h2>Membership benefits</h2>

          <p>
            Become our sponsor and get all benefits
          </p>
        </motion.div>

        <div className="benefits-grid">
          {MembershipData.map((item, index) => (
            <motion.div
  className="benefit-card"
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.7,
    delay: index * 0.15,
  }}
            >
              <div className="benefit-icon">
                <img src={item.image} alt={item.title} />
              </div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.button
  className="pricing-btn"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
          SEE PRICING
        </motion.button>

      </div>
    </section>
  );
}
