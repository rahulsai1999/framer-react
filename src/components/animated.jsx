import React, { useState } from "react";
import { motion } from "framer-motion";
import { Container, Button, Row, Col } from "react-bootstrap";
import CardFramer from "./card";
import Arrow from "./arrow";

//all animation properties controlled here
const variants = {
  first: {
    open: { x: 0, y: 30, scale: 0.8 },
    closed: { x: 100, y: 0, scale: 1 }
  },
  second: {
    open: { x: -640, y: 250, scale: 0.8 },
    closed: { x: 100, y: 0, scale: 1 }
  },
  third: {
    open: { x: -1280, y: 470, scale: 0.8 },
    closed: { x: 100, y: 0, scale: 1 }
  },
  arrsmall: {
    open: { opacity: 0 },
    closed: { opacity: 1, y: 100, x: 100 }
  }
};

const Animated = () => {
  //state hook for all animations
  const [isOpen, setisOpen] = useState(false);
  return (
    <div>
      <Row className="no-gutters">
        <Col lg={3}>
          <CardFramer
            isOpen={isOpen}
            variants={variants.first}
            img="img/card1.png"
          ></CardFramer>
        </Col>
        <Col md={1}>
          <Arrow variants={variants.arrsmall} isOpen={isOpen}></Arrow>
        </Col>
        <Col lg={3}>
          <CardFramer
            isOpen={isOpen}
            variants={variants.second}
            img="img/card2.png"
          ></CardFramer>
        </Col>
        <Col md={1}>
          <Arrow variants={variants.arrsmall} isOpen={isOpen}></Arrow>
        </Col>
        <Col lg={3}>
          <CardFramer
            isOpen={isOpen}
            variants={variants.third}
            img="img/card3.png"
          ></CardFramer>
        </Col>
      </Row>

      <br />

      <Button style={{ marginTop: 10 }} onClick={() => setisOpen(!isOpen)}>
        Hello There
      </Button>
    </div>
  );
};

export default Animated;
