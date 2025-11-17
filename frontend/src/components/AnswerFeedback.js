import React, { useState } from "react";
function AnswerFeedback() {
  const [feedback, setFeedback] = useState(0);
  return (
    <div className="flex gap-2">
      <button onClick={() => setFeedback(1)} className={`px-2 py-1 ${feedback===1 && "bg-green-500 text-white"}`}>👍</button>
      <button onClick={() => setFeedback(-1)} className={`px-2 py-1 ${feedback===-1 && "bg-red-500 text-white"}`}>👎</button>
    </div>
  );
}
export default AnswerFeedback;
