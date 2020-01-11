import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  closeButton as CButton,
  prevButton as PButton,
  nextButton as NButton
} from "./buttons";
import { Row, Col } from "react-bootstrap";

const animParam = {
  first: {
    open: { opacity: 1 },
    closed: { opacity: 0 }
  },
  second: {
    open: { opacity: 1, y: "-90%" },
    closed: { opacity: 0 }
  },
  third: {
    open: { opacity: 1, y: "-180%" },
    closed: { opacity: 0 }
  }
};

const RightSec = props => {
  const { variants, isOpen, stateHook } = props;
  const [carState, setCarState] = useState(1);
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
            <motion.div
              animate={carState == 1 ? "open" : "closed"}
              variants={animParam.first}
              transition={{ velocity: 0.5 }}
            >
              <img src="img/card1.png" alt="card1" />
            </motion.div>
            <motion.div
              animate={carState == 2 ? "open" : "closed"}
              variants={animParam.second}
              transition={{ velocity: 0.5 }}
            >
              <img src="img/card2.png" alt="card1" />
            </motion.div>
            <motion.div
              animate={carState == 3 ? "open" : "closed"}
              variants={animParam.third}
              transition={{ velocity: 0.5 }}
            >
              <img src="img/card3.png" alt="card1" />
            </motion.div>
          </Col>
        </Row>

        <Row>
          <Col>
            <PButton
              style={carState == 1 ? { display: "none" } : null}
              onClick={() => {
                setCarState(prev => prev - 1);
              }}
            />
          </Col>
          <Col>
            <NButton
              style={carState == 3 ? { display: "none" } : null}
              onClick={() => {
                setCarState(prev => prev + 1);
              }}
            />
          </Col>
        </Row>
      </div>
    </motion.div>
  );
};

export default RightSec;
