import React, { useState } from "react";
import BaseNode from "./BaseNode";

const OutputNode = () => {
  const [name, setName] = useState("output_1");

  return (
    <BaseNode
      title="Output"
      inputHandles={[{ id: "in", top: "50%" }]}
    >
      <div>
        <label>Name:</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
    </BaseNode>
  );
};

export default OutputNode;
