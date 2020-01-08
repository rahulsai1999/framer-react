import React from "react";
import { Button } from "react-bootstrap";

const RButton = props => {
  const { onClick, children } = props;
  return (
    <Button className="red-button" onClick={onClick}>
      <div className="red-button-text">{children}</div>
    </Button>
  );
};

export default RButton;
