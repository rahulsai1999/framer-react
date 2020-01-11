import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  closeButton as CButton,
  prevButton as PButton,
  nextButton as NButton
} from "./buttons";
import { Row, Col, Container } from "react-bootstrap";

const animParam = {
  first: {
    open: { display: "block", opacity: 1, x: "30%" },
    closed: { display: "none", opacity: 0 }
  },
  second: {
    open: { display: "block", opacity: 1, x: "-20%" },
    closed: { display: "none", opacity: 0 }
  },
  third: {
    open: { display: "block", opacity: 1 },
    closed: { display: "none", opacity: 0, x: "-70%" }
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
          height: 650,
          width: 1400,
          marginBottom: 100
        }}
      >
        <Container>
          <br />
          <Row>
            <Col>
              <CButton
                style={{ marginLeft: -1200 }}
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
                animate={carState === 1 ? "open" : "closed"}
                variants={animParam.first}
                transition={{ velocity: 0.5 }}
              >
                <img src="img/card1.png" height={410} alt="card1" />
                <div className="right-card-text">
                  {" "}
                  Find the floorplan based on your builder and voila your house
                  structure will be loaded.
                </div>
              </motion.div>
            </Col>
            <Col>
              <motion.div
                animate={carState === 2 ? "open" : "closed"}
                variants={animParam.second}
                transition={{ velocity: 0.5 }}
              >
                <img src="img/card2.png" height={410} alt="card2" />
                <div className="right-card-text">
                  {" "}
                  Choose from Vast variety of Design from Top Interior Designer
                  in the World and visualize what your house look like
                  instantly.
                </div>
              </motion.div>
            </Col>
            <Col>
              <motion.div
                animate={carState === 3 ? "open" : "closed"}
                variants={animParam.third}
                transition={{ velocity: 0.5 }}
              >
                <img src="img/card3.png" height={410} alt="card3" />
                <div className="right-card-text">
                  {" "}
                  Order the Designed home or a part of Home and Next Day your
                  House will never be the same you used to live with.
                </div>
              </motion.div>
            </Col>
          </Row>
          <Row>
            <Col>
              <PButton
                style={carState === 1 ? { display: "none" } : null}
                onClick={() => {
                  setCarState(prev => prev - 1);
                }}
              />
            </Col>
            <Col>
              <NButton
                style={carState === 3 ? { display: "none" } : null}
                onClick={() => {
                  setCarState(prev => prev + 1);
                }}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </motion.div>
  );
};

export default RightSec;
