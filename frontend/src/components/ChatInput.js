import React, { useState } from "react";
function ChatInput({ onSend }) {
  const [msg, setMsg] = useState("");
  return (
    <form onSubmit={e => { e.preventDefault(); onSend(msg); setMsg(""); }} className="mt-4 flex">
      <input
        className="flex-1 border rounded p-2 mr-2"
        value={msg}
        onChange={e => setMsg(e.target.value)}
        placeholder="Type your question..."
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">Send</button>
    </form>
  );
}
export default ChatInput;
