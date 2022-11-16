import React, {useState} from "react";
import {Route, Routes} from 'react-router-dom'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AccountModal from "./components/AccountModal";

import Home from "./views/Home";
import Login from "./views/Login";
import Dashboard from "./views/Dashboard";
import Payments from './components/Payments';
import History from './components/History';

import "./App.scss";

const App = () => {

  const [showModal, setShowModal] = useState(false);


  return (
    <>
      <Navbar handleCreateAcc={() => setShowModal(true)} />
      
      <Routes>
        <Route path="/" element={<Home handleClick={() => setShowModal(true)} />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/dashboard/payments" element={<Payments/>} />
        <Route path="/dashboard/history" element={<History/>}/>
      </Routes>

      <Footer />
      <AccountModal show={showModal} handleClose={() => setShowModal(false)} />
    </>
  )
}

export default App;
