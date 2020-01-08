import React from "react";
import { motion } from "framer-motion";

const CardFramer = props => {
  const { isOpen, variants, img } = props;
  return (
    <motion.div
      animate={isOpen ? "open" : "closed"}
      variants={variants}
      transition={{ velocity: 0.5 }}
    >
      <img src={img} />
    </motion.div>
  );
};

export default CardFramer;
