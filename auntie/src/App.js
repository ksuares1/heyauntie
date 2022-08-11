import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import DiscussionBoard from "./Pages/Dashboard";
import Questions from "./Pages/Questions";
import LoginAccount from "./Pages/AccountPage";
import SignUpForm from "./Pages/Createanaccount";
import AunteeChatMessage from "./Pages/AunteeChat";
import CommunityLounge from "./Pages/CommunityChat";
import { CometChatUI } from "./cometChat/components/CometChatUI/index";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registrationform" element={<SignUpForm />} />
          <Route path="/aunteechat" element={<AunteeChatMessage />} />
          <Route path="/communitylounge" element={<CommunityLounge />} />
          <Route path="/login" element={<LoginAccount />} />
          <Route path="/survey" element={<Questions />} />
          <Route path="/dashboard" element={<DiscussionBoard />} />
          <Route path="/latest" element={<CometChatUI />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
