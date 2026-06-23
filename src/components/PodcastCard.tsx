import "./css/PodcastCard.css";
import { motion } from "framer-motion";

interface podcast_type{
  image: string
  title: string
}

export default function PodcastCard({image, title}: podcast_type) {
  return (
    <motion.div className="podcast-card"
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}>

      <div className="podcast-card-image">
        <img src={image} alt={title} />
      </div>

      <h3>{title}</h3>

    </motion.div>
  );
}