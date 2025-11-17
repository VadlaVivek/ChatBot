// backend/server.js
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const mockData = require("./mockData");

app.get("/api/sessions", (req, res) => {
  res.json(mockData.sessions);
});

app.get("/api/new-chat", (req, res) => {
  const newId = String(Date.now());
  mockData.sessions.push({ id: newId, title: "New Chat" });
  mockData.history[newId] = [];
  res.json({ id: newId });
});

app.get("/api/:sessionid", (req, res) => {
  const data = mockData.history[req.params.sessionid] || [];
  res.json(data);
});

app.post("/api/:chatid", (req, res) => {
  const { message } = req.body;
  // Simulate tabular answer with mock data
  const response = {
    role: "assistant",
    content: `Answer to: ${message}`,
    table: [
      { field: "Sample Field", value: "Sample Value" },
      { field: "Input Received", value: message }
    ]
  };
  // Update history
  if (mockData.history[req.params.chatid]) {
    mockData.history[req.params.chatid].push({ role: "user", content: message });
    mockData.history[req.params.chatid].push(response);
  } else {
    mockData.history[req.params.chatid] = [{ role: "user", content: message }, response];
  }
  res.json(response);
});

app.listen(5000, () => console.log("Backend running on port 5000"));
