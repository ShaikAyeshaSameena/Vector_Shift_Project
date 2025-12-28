import React, { useEffect, useMemo, useState } from "react";
import BaseNode from "./BaseNode";

const VARIABLE_REGEX = /{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g;

const TextNode = () => {
  const [text, setText] = useState("");
  const [size, setSize] = useState({ width: 220, height: 80 });

  // Extract variables like {{input}}
  const variables = useMemo(() => {
    const vars = new Set();
    let match;
    while ((match = VARIABLE_REGEX.exec(text)) !== null) {
      vars.add(match[1]);
    }
    return Array.from(vars);
  }, [text]);

  // Auto resize logic
  useEffect(() => {
    const lines = text.split("\n").length;
    const longestLine = Math.max(...text.split("\n").map(l => l.length), 1);

    setSize({
      width: Math.min(500, Math.max(220, longestLine * 8)),
      height: Math.min(300, Math.max(80, lines * 24)),
    });
  }, [text]);

  const inputHandles = variables.map((v, index) => ({
    id: v,
    top: `${30 + index * 20}px`,
  }));

  return (
    <BaseNode
      title="Text"
      inputHandles={inputHandles}
      outputHandles={[{ id: "out", top: "50%" }]}
    >
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          width: size.width,
          height: size.height,
          resize: "none",
        }}
        placeholder="Type text here... Use {{variable}}"
      />
    </BaseNode>
  );
};

export default TextNode;
