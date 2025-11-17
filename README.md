  *** - - ChatBot Assignment - - ***
  
A full-stack web application mimicking a simple ChatGPT-style conversational interface with session management and tabular responses.

# Features

// Frontend

* Built with React and Tailwind CSS

* Sidebar for chat session history and starting new chats

* Main chat window displaying conversation, answers, and structured tables

* Light/Dark theme toggle

* Answer feedback (like/dislike)

// Backend

* Node.js & Express REST API

* Serves mock/static JSON session and chat data

* Session management (create new, view history)

* Structured tabular responses for questions

# Getting Started

// Prerequisites

* Node.js (v18+ recommended)
* npm

// Installation

1. Clone the Repository

   # bash
   git clone https://github.com/yourusername/ChatBot.git
   cd ChatBot

2. Setup Backend

   # bash
   cd backend
   npm install
   npm start

3. Setup Frontend

   # bash
   cd ../frontend
   npm install
   npm start

* Backend runs on http://localhost:5000

* Frontend runs on http://localhost:3000

// Folder Structure

ChatBot/
│
├── backend/
│   ├── server.js
│   ├── mockData.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Sidebar.js
│   │   │   ├── ChatWindow.js
│   │   │   ├── TableResponse.js
│   │   │   └── ThemeToggle.js
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   ├── tailwind.config.js
│   └── postcss.config.js
│
└── README.md

// API Endpoints (Backend)

* GET /api/sessions — List all chat sessions

* GET /api/new-chat — Create new session

* GET /api/:sessionid — Get chat history for session

* POST /api/:chatid — Submit a question, receive tabular answer


// Customization

* Modify mock data in backend/mockData.js to create more sessions or example answers.

* Add features or style using React and Tailwind CSS in frontend/src/components.
