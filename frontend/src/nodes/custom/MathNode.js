import React from "react";
import BaseNode from "../BaseNode";

const MathNode = () => {
  return (
    <BaseNode
      title="Math"
      inputHandles={[
        { id: "a", top: "40%" },
        { id: "b", top: "60%" },
      ]}
      outputHandles={[{ id: "result", top: "50%" }]}
    >
      <p>Adds two numbers</p>
    </BaseNode>
  );
};

export default MathNode;
