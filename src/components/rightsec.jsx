import React from "react";
import { motion } from "framer-motion";
import { Row, Col, Button } from "react-bootstrap";

const RightSec = props => {
  const { variants, isOpen, stateHook } = props;
  return (
    <motion.div
      animate={isOpen ? "open" : "closed"}
      variants={variants}
      transition={{ velocity: 0.5 }}
    >
      <div
        style={{
          backgroundColor: isOpen ? "#343434" : "#FFFFFF",
          opacity: isOpen ? 1 : 0,
          height: 700,
          width: 800
        }}
      >
        <img src="img/card1.png"></img>
        <Button
          onClick={() => {
            stateHook(!isOpen);
          }}
        >
          Quit
        </Button>
      </div>
    </motion.div>
  );
};

export default RightSec;
