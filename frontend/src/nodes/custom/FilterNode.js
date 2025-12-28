import React from "react";
import BaseNode from "../BaseNode";

const FilterNode = () => {
  return (
    <BaseNode
      title="Filter"
      inputHandles={[{ id: "data", top: "50%" }]}
      outputHandles={[{ id: "filtered", top: "50%" }]}
    >
      <p>Filters input data</p>
    </BaseNode>
  );
};

export default FilterNode;
