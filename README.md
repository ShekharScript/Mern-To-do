# 📝 MERN Stack Task Manager (Todo App)

A highly responsive, production-ready Full-Stack Task Management web application built using the modern **MERN Stack** (MongoDB, Express, React, Node.js). Features include secure JWT-based token authentication via cookies, protected frontend routing, full CRUD functionality, and a seamless developer environment setup using decoupled micro-folders.

---

##  Key Features

- **🔒 Token-Based Authentication**: Secure User Registration (`/signup`) and Log In (`/login`) mechanisms utilizing **JSON Web Tokens (JWT)** passed via state-safe cookie parsers.
- **🛡️ Reusable Route Protection**: A highly robust `<Protected>` React structural wrapper component that acts as a client-side middleware to restrict unauthenticated access to the main dashboard.
- **⚡ High-Performance Architecture**: Native MongoDB client database execution loops without standard bulky ORM middleware wrappers for rapid low-latency reads and writes.

---

## 🛠️ Tech Stack Breakdown

### Frontend (Client-side)
* **Framework**: React.js (Vite Setup Ecosystem)
* **Routing Engine**: React Router DOM (v6 layout nodes)
* **Styling Layers**: Custom Vanillia CSS (Grid/Flex Layouts)

### Backend (Server-side)
* **Runtime**: Node.js
* **Framework Layer**: Express.js REST API
* **Database Target**: MongoDB Atlas (Native Multi-Cluster Environment)
* **Authentication**: `jsonwebtoken`, `cookie-parser`, `cors`
* **Configuration Module**: `dotenv` Manager

---

## 📂 Project Structure & Layout

```text
MERN-TODO/
├── backend/                  # Server-side App Core Engine
│   ├── .env                  # Local Environment configuration parameters (Git Ignored)
│   ├── dbconfig.js           # Native MongoDB connection client instantiation file
│   ├── index.js              # Primary API controller endpoints & execution setup
│   └── package.json          # Node dependencies & modular execution metadata
│
└── frontend/                 # Client-side View Component Layers
    ├── src/
    │   ├── components/       # Specialized modules (List, AddTask, Login, NavBar, etc.)
    │   ├── style/            # Structural UI files (App.css, list.css, addtask.css, etc.)
    │   ├── App.jsx           # Global route definitions & application core setup
    │   └── main.jsx          # DOM rendering entry point
    ├── vite.config.js        # Vite bundler parameters
    └── package.json          # Frontend packages & compile scripts
