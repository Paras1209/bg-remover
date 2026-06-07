/* eslint-disable no-unused-vars */
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from "./pages/LandingPage";
import BuyCredit from "./pages/BuyCredit";
import Results from "./pages/Results";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/result" element={<Results/>} />
        <Route path="/buy" element={<BuyCredit/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App
