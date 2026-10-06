import WebSocket from "ws";

const ws = new WebSocket("ws://localhost:8787/ws");
ws.on("open", () =>
  ws.send(JSON.stringify({ type: "submit_task", input: "hello" })),
);
ws.on("message", (data) => {
  const event = JSON.parse(data.toString());
  console.log(event.type, event.message ?? event.output ?? event.input ?? "");
  if (event.type === "workflow.completed") ws.close();
});
