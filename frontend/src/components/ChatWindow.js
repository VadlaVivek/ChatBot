import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TableResponse from "./TableResponse";
import ChatInput from "./ChatInput";
import AnswerFeedback from "./AnswerFeedback";
function ChatWindow() {
  const { sessionId } = useParams();
  const [lines, setLines] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/api/${sessionId}`)
      .then(res => res.json())
      .then(setLines);
  }, [sessionId]);
  const sendMsg = msg => {
    fetch(`http://localhost:5000/api/${sessionId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: msg })
    })
      .then(res => res.json())
      .then(ans => setLines(l => [...l, { role: "user", content: msg }, ans]));
  };
  return (
    <div className="flex-1 h-full p-6 bg-white dark:bg-gray-900">
      {lines.map((line, idx) => (
        <div key={idx} className="my-2">
          <div className={line.role === "user" ? "text-right" : "text-left"}>
            <span className={line.role === "user" ? "font-bold" : "text-blue-800 dark:text-blue-300 font-medium"}>
              {line.role === "user" ? "You" : "Assistant"}
            </span>: {line.content}
            {line.table && <TableResponse table={line.table} />}
            {line.role === "assistant" && <AnswerFeedback />}
          </div>
        </div>
      ))}
      <ChatInput onSend={sendMsg} />
    </div>
  );
}
export default ChatWindow;
