import React, { useState } from "react";
import { motion } from "framer-motion";
import { Container, Button, Row, Col } from "react-bootstrap";
import CardFramer from "./card";

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
          <CardFramer
            isOpen={isOpen}
            variants={variants.first}
            img="img/card1.png"
          ></CardFramer>
        </Col>
        <Col>
          <CardFramer
            isOpen={isOpen}
            variants={variants.second}
            img="img/card2.png"
          ></CardFramer>
        </Col>
        <Col>
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
    </Container>
  );
};

export default Animated;
