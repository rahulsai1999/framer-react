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
      <img style={{ marginLeft: -5 }} src="img/arrbig.svg" />
    </motion.div>
  );
};

const BigArrow = props => {
  const { carState, variants, isOpen } = props;
  let asv = isOpen ? "close" : null;
  switch (carState) {
    case 1:
      asv = "first";
      break;
    case 2:
      asv = "second";
      break;
    case 3:
      asv = "third";
      break;
  }
  return (
    <motion.div
      animate={asv}
      variants={variants}
      transition={{ velocity: 0.5 }}
    >
      <img
        style={isOpen ? { display: "block" } : { display: "none" }}
        src="img/arrbig.svg"
      />
    </motion.div>
  );
};

export { Arrow as default, BigArrow };
