import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import ThemeToggle from "./components/ThemeToggle";
import ChatWindow from "./components/ChatWindow";
function NewChat() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col items-center justify-center">
        <h1 className="text-2xl">Welcome! Start a new chat.</h1>
      </div>
    </div>
  );
}
function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
        <div className="w-full flex justify-end p-2">
          <ThemeToggle />
        </div>
        <Routes>
          <Route path="/" element={<NewChat />} />
          <Route path="/chat/:sessionId" element={
            <div className="flex h-[calc(100vh-48px)]">
              <Sidebar />
              <ChatWindow />
            </div>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
