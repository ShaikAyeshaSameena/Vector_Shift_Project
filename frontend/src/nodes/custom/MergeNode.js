import React from "react";
import BaseNode from "../BaseNode";

const MergeNode = () => {
  return (
    <BaseNode
      title="Merge"
      inputHandles={[
        { id: "in1", top: "40%" },
        { id: "in2", top: "60%" },
      ]}
      outputHandles={[{ id: "out", top: "50%" }]}
    >
      <p>Merges inputs</p>
    </BaseNode>
  );
};

export default MergeNode;
