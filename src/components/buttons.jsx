import React from "react";
import { Button } from "react-bootstrap";
import { IoMdClose } from "react-icons/io";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

const RButton = props => {
  const { onClick, children } = props;
  return (
    <Button className="red-button" onClick={onClick}>
      <div className="red-button-text">{children}</div>
    </Button>
  );
};

const closeButton = props => {
  const { onClick, children } = props;
  return (
    <Button className="blue-button" onClick={onClick}>
      <div className="blue-button-text">
        <IoMdClose size={21} style={{ marginBottom: 1 }} />
        &nbsp;
        {children}
      </div>
    </Button>
  );
};

const nextButton = props => {
  const { onClick } = props;
  return (
    <Button className="blue-button" onClick={onClick}>
      <div className="blue-button-text">
        Next &nbsp;
        <MdNavigateNext size={21} style={{ marginBottom: 1 }} />
      </div>
    </Button>
  );
};

const prevButton = props => {
  const { onClick } = props;
  return (
    <Button className="blue-button" onClick={onClick}>
      <div className="blue-button-text">
        <MdNavigateBefore size={21} style={{ marginBottom: 1 }} />
        &nbsp; Previous
      </div>
    </Button>
  );
};

export { RButton, closeButton, nextButton, prevButton };
