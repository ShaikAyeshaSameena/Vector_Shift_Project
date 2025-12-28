import React from "react";
import { Handle, Position } from "reactflow";
import "./nodeStyles.css";

const BaseNode = ({
  title,
  children,
  inputHandles = [],
  outputHandles = [],
}) => {
  return (
    <div className="base-node">
      <div className="base-node-header">{title}</div>

      {/* Input Handles */}
      {inputHandles.map((handle) => (
        <Handle
          key={handle.id}
          type="target"
          position={Position.Left}
          id={handle.id}
          style={{ top: handle.top }}
        />
      ))}

      {/* Node Content */}
      <div className="base-node-content">{children}</div>

      {/* Output Handles */}
      {outputHandles.map((handle) => (
        <Handle
          key={handle.id}
          type="source"
          position={Position.Right}
          id={handle.id}
          style={{ top: handle.top }}
        />
      ))}
    </div>
  );
};

export default BaseNode;
