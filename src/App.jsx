import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Users from "./Components/Users/Users";
import UsersDetails from "./Components/UsersDetails/UsersDetails";

function App() {
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
    { id: 4, name: "David" },
    { id: 5, name: "Eve" },
  ];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Users users={users} />} />
        <Route path="/user/:id" element={<UsersDetails users={users} />} />
      </Routes>
    </Router>
  );
}

export default App;
