import React from "react";
import BaseNode from "./BaseNode";

const LLMNode = () => {
  return (
    <BaseNode
      title="LLM"
      inputHandles={[{ id: "in", top: "50%" }]}
      outputHandles={[{ id: "out", top: "50%" }]}
    >
      <p>This is a LLM.</p>
    </BaseNode>
  );
};

export default LLMNode;
