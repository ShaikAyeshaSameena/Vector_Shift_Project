import React, { useState } from "react";
import BaseNode from "./BaseNode";

const InputNode = () => {
  const [name, setName] = useState("input_1");
  const [type, setType] = useState("Text");

  return (
    <BaseNode
      title="Input"
      outputHandles={[{ id: "out", top: "50%" }]}
    >
      <div>
        <label>Name:</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Type:</label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option>Text</option>
          <option>File</option>
        </select>
      </div>
    </BaseNode>
  );
};

export default InputNode;
