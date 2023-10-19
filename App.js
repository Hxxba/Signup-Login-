import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Loggedin } from './pages/Loggedin';
import { Signup } from './pages/Signup';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';

function App() {
  const [username,setName] = useState("");
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Banner/>
        <Routes>
          <Route path="/" element={<Home  />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Loggedin"element={<Loggedin />}/>
          <Route path="/*" element={<h1>Page not found </h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
