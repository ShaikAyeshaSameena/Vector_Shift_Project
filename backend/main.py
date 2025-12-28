from fastapi import FastAPI
from pydantic import BaseModel
from typing import List

app = FastAPI()

# -----------------------
# Data Models
# -----------------------

class Node(BaseModel):
    id: str
    type: str

class Edge(BaseModel):
    source: str
    target: str

class Pipeline(BaseModel):
    nodes: List[Node]
    edges: List[Edge]

# -----------------------
# Routes
# -----------------------

@app.get("/")
def read_root():
    return {"Ping": "Pong"}

@app.post("/pipelines/parse")
def parse_pipeline(pipeline: Pipeline):
    node_ids = {node.id for node in pipeline.nodes}

    # Rule 1: At least one input and one output
    has_input = any(node.type == "input" for node in pipeline.nodes)
    has_output = any(node.type == "output" for node in pipeline.nodes)

    if not has_input or not has_output:
        return {
            "success": False,
            "error": "Pipeline must contain at least one input and one output node"
        }

    # Rule 2: All edges must connect valid nodes
    for edge in pipeline.edges:
        if edge.source not in node_ids or edge.target not in node_ids:
            return {
                "success": False,
                "error": "Edge contains invalid node reference"
            }

    return {
        "success": True,
        "message": "Pipeline parsed successfully"
    }
