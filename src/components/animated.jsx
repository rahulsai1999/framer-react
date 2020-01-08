import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import CardFramer from "./card";
import Arrow from "./arrow";
import Button from "./buttons";

//all animation properties controlled here
const variants = {
  first: {
    open: { x: 0, y: 30, scale: 0.8 },
    closed: { x: 100, y: 0, scale: 1 },
    text: {
      open: { opacity: 0 },
      closed: { opacity: 1 }
    }
  },
  second: {
    open: { x: "-133%", y: 250, scale: 0.8 },
    closed: { x: 100, y: 0, scale: 1 },
    text: {
      open: { opacity: 0 },
      closed: { opacity: 1 }
    }
  },
  third: {
    open: { x: "-266%", y: 470, scale: 0.8 },
    closed: { x: 100, y: 0, scale: 1 },
    text: {
      open: { opacity: 0 },
      closed: { opacity: 1 }
    }
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
            header="Choose your Floorplan"
            body="Find the floorplan based on your builder and voila your house structure will be loaded."
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
            header="Select the Design for each room in just One click"
            body="Choose from Vast variety of Design from Top Interior Designer in the World and visualize what your house look like instantly."
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
            header="Order your Designed Home!"
            body="Order the Designed home or a part of Home and Next Day your House will never be the same you used to live with."
          ></CardFramer>
        </Col>
      </Row>

      <br />
      <Row className="justify-content-center">
        <Button
          onClick={() => {
            setisOpen(!isOpen);
            window.scrollTo({ top: 2500, behavior: "smooth" });
          }}
        >
          Learn within 2 minutes
        </Button>
      </Row>
    </div>
  );
};

export default Animated;
