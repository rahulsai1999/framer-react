import React from "react";
import { motion } from "framer-motion";
import {
  closeButton as CButton,
  prevButton as PButton,
  nextButton as NButton
} from "./buttons";
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
          backgroundColor: isOpen ? "#657991" : "#FFFFFF",
          opacity: isOpen ? 1 : 0,
          height: 700,
          width: 800
        }}
      >
        <Row>
          <Col>
            <CButton
              onClick={() => {
                stateHook(!isOpen);
              }}
            >
              Close
            </CButton>
          </Col>
        </Row>
        <Row>
          <Col>
            <img src="img/card1.png" alt="card1" />
          </Col>
        </Row>
        <Row>
          <Col>
            <PButton />
          </Col>
          <Col>
            <NButton />
          </Col>
        </Row>
      </div>
    </motion.div>
  );
};

export default RightSec;
