import { useStore } from "./store";

export const SubmitButton = () => {
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);

  const submitPipeline = async () => {
    const payload = {
      nodes: nodes.map((node) => ({
        id: node.id,
        type: node.type,
      })),
      edges: edges.map((edge) => ({
        source: edge.source,
        target: edge.target,
      })),
    };

    try {
      const response = await fetch("http://localhost:8000/pipelines/parse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      alert(
        `Pipeline Result:\n\n` +
        `Success: ${result.success}\n` +
        `Message: ${result.message || result.error}`
      );
    } catch (error) {
      alert("Failed to submit pipeline");
    }
  };

  return (
    <div style={{ padding: "10px" }}>
      <button onClick={submitPipeline}>Submit</button>
    </div>
  );
};
