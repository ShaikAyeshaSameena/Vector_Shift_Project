import React, { useState } from "react";
import BaseNode from "../BaseNode";

const PromptNode = () => {
  const [prompt, setPrompt] = useState("");

  return (
    <BaseNode
      title="Prompt"
      inputHandles={[{ id: "in", top: "50%" }]}
      outputHandles={[{ id: "out", top: "50%" }]}
    >
      <textarea
        placeholder="Enter prompt..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
    </BaseNode>
  );
};

export default PromptNode;
