import React, { useState } from "react";
import { motion } from "framer-motion";
import { Container, Button, Row, Col } from "react-bootstrap";

const variants = {
  first: {
    open: { x: 0, y: 100 },
    closed: { x: 0, y: 0 }
  },
  second: {
    open: { x: -380, y: 350 },
    closed: { x: 0, y: 0 }
  },
  third: {
    open: { x: -760, y: 600 },
    closed: { x: 0, y: 0 }
  }
};

const Animated = () => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <Container>
      <Row>
        <Col>
          <motion.div
            animate={isOpen ? "open" : "closed"}
            variants={variants.first}
            transition={{ velocity: 0.5 }}
          >
            <div
              style={{ backgroundColor: "#657991", width: 300, height: 200 }}
            ></div>
          </motion.div>
        </Col>
        <Col>
          <motion.div
            animate={isOpen ? "open" : "closed"}
            variants={variants.second}
            transition={{ velocity: 0.5 }}
          >
            <div
              style={{ backgroundColor: "#657991", width: 300, height: 200 }}
            ></div>
          </motion.div>
        </Col>
        <Col>
          <motion.div
            animate={isOpen ? "open" : "closed"}
            variants={variants.third}
            transition={{ velocity: 0.5 }}
          >
            <div
              style={{ backgroundColor: "#657991", width: 300, height: 200 }}
            ></div>
          </motion.div>
        </Col>
      </Row>

      <br />

      <Button style={{ marginTop: 10 }} onClick={() => setisOpen(!isOpen)}>
        Hello There
      </Button>
    </Container>
  );
};

export default Animated;
