import React from "react";
import SpinnerComp from 'react-bootstrap/Spinner';

const Spinner = () => {
  return (
    <SpinnerComp animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </SpinnerComp>
  );
};

export default Spinner;
