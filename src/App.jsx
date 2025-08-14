import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from "react";

import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import GigForm from './pages/GigForm';
import GigFeed from './pages/GigFeed';
import Chat from './pages/Chat';
import Header from "./components/Header";
import Home from "./pages/Home";



export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gigs"  element={<GigFeed />} />
        <Route path="/messages" element={<Chat />} />


 <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile"  element={<Profile />} />
        <Route path="/post-gig" element={<GigForm />} />
      </Routes>
    </Router>
  );
}