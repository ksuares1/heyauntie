import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import DiscussionBoard from './Pages/Dashboard';
import MainProfile from './components/Profilemain';
import Questions from './Pages/Questions';
// import DirectMessaging from './Pages/AunteeMessages';
import LoginAccount from './Pages/AccountPage';
import SignUpForm from './Pages/Createanaccount';
import AunteeChatMessage from './Pages/AunteeChat';
import CommunityLounge from './Pages/CommunityChat';


function App() {
  return (
    <>
       <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registrationform" element={<SignUpForm/>}/> 
          <Route path="/aunteechat" element={<AunteeChatMessage/>}/> 
          <Route path="/communitylounge" element={<CommunityLounge/>}/>
          <Route path="/login" element={<LoginAccount/>}/>
          <Route path="/survey" element={<Questions />} />
          <Route path="/dashboard" element={<DiscussionBoard />} />
          <Route path="/profilemain" element={<MainProfile />} />
        </Routes>
      </Router>
      </>
  );
}

export default App;
