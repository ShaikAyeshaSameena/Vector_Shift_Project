import React, { useState } from "react";
import BaseNode from "../BaseNode";

const ApiNode = () => {
  const [url, setUrl] = useState("");

  return (
    <BaseNode
      title="API"
      inputHandles={[{ id: "payload", top: "50%" }]}
      outputHandles={[{ id: "response", top: "50%" }]}
    >
      <input
        placeholder="API URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
    </BaseNode>
  );
};

export default ApiNode;
