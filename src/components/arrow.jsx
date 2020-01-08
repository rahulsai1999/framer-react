import React from "react";
import { motion } from "framer-motion";

const Arrow = props => {
  const { isOpen, variants } = props;
  return (
    <motion.div
      animate={isOpen ? "open" : "closed"}
      variants={variants}
      transition={{ velocity: 0.5 }}
    >
      <img src="img/arrsmall.svg" />
    </motion.div>
  );
};

export default Arrow;
