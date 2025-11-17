// backend/mockData.js
const sessions = [
  { id: "1", title: "Math Help" },
  { id: "2", title: "Science Qs" }
];
const history = {
  "1": [
    { role: "user", content: "What is 2 + 2?" },
    {
      role: "assistant",
      content: "The answer is 4.",
      table: [{ description: "Simple Math", result: "4" }]
    }
  ],
  "2": [
    { role: "user", content: "What is H2O?" },
    {
      role: "assistant",
      content: "H2O is water.",
      table: [{ description: "Chemical Formula", result: "Water" }]
    }
  ]
};
module.exports = { sessions, history };
