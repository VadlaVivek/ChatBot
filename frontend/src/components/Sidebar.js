import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function Sidebar() {
  const [sessions, setSessions] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:5000/api/sessions")
      .then((res) => res.json())
      .then(setSessions);
  }, []);
  const startNewChat = () => {
    fetch("http://localhost:5000/api/new-chat")
      .then((res) => res.json())
      .then((data) => navigate(`/chat/${data.id}`));
  };
  return (
    <div className="w-64 h-full bg-gray-200 dark:bg-gray-800 p-4">
      <button onClick={startNewChat} className="mb-2 w-full py-2 bg-blue-500 text-white rounded">New Chat</button>
      <div>
        {sessions.map((s) => (
          <div key={s.id} className="cursor-pointer py-2" onClick={() => navigate(`/chat/${s.id}`)}>{s.title}</div>
        ))}
      </div>
    </div>
  );
}
export default Sidebar;
