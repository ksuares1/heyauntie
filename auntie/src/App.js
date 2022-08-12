import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import DiscussionBoard from "./Pages/Dashboard";
import Questions from "./Pages/Questions";
import LoginAccount from "./Pages/AccountPage";
import SignUpForm from "./Pages/Createanaccount";
import Chat from "./Pages/Chat";
import CommunityLounge from "./Pages/CommunityChat";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registrationform" element={<SignUpForm />} />
          <Route path="/communitylounge" element={<CommunityLounge />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/login" element={<LoginAccount />} />
          <Route path="/survey" element={<Questions />} />
          <Route path="/dashboard" element={<DiscussionBoard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
