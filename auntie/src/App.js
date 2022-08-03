import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import LoginPage from './Pages/Login';
import DiscussionBoard from './Pages/Dashboard';
import MainProfile from './components/Profilemain';
import Questions from './Pages/Questions';
import Auntee from './Pages/Auntee';



function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path= "/login" element={<LoginPage/>} />
      <Route path= "/survey" element={<Questions/>} />
      <Route path="/dashboard" element={<DiscussionBoard/>} />
      <Route path="/profilemain" element={<MainProfile/>} />
      <Route path="/auntee"  element={<Auntee/>}/>
    </Routes>
  </Router>
  );
}

export default App;
