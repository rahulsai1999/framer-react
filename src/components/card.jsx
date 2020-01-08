import React from "react";
import { motion } from "framer-motion";
import { Row, Col } from "react-bootstrap";

const CardFramer = props => {
  const { isOpen, variants, img, header, body } = props;
  return (
    <motion.div
      animate={isOpen ? "open" : "closed"}
      variants={variants}
      transition={{ velocity: 0.5 }}
    >
      <Row>
        <Col>
          <img src={img} />
        </Col>
      </Row>
      <motion.div
        animate={isOpen ? "open" : "closed"}
        variants={variants.text}
        transition={{ velocity: 0.5 }}
      >
        <Row>
          <Col>
            <h5 className="header-text">{header}</h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="body-text">{body}</p>
          </Col>
        </Row>
      </motion.div>
    </motion.div>
  );
};

export default CardFramer;
