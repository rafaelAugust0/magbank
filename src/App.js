import React, {useState} from "react";
import {Route, Routes, Navigate} from 'react-router-dom'
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
  const [name, setName] = useState();
  const [account, setAccount] = useState();
  const isLogged = name && account;
  const fakeAuth = {
    login(name, account, cb) {
      setName(name);
      setAccount(account)
      setTimeout(cb, 100)
    },
    logout(cb) {
      setName();
      setAccount();
      setTimeout(cb, 100)
    }
  };


  const PrivateRoute = ({Component, logged }) => {
    return logged ? <Component name={name} account={account} /> : <Navigate to='/login'/>
  }

  return (
    <>
      <Navbar handleCreateAcc={() => setShowModal(true)}
        logged={isLogged}
        auth={fakeAuth}
      />
      
      <Routes>
        <Route path="/" element={<Home handleClick={() => setShowModal(true)} />} />
        <Route path="/login" element={<Login auth={fakeAuth}/>} />
        <Route path="/dashboard" element={
          <PrivateRoute Component={Dashboard} logged={isLogged} />
        } 
        />
        <Route path="/dashboard/payments" element={
          <PrivateRoute Component={Payments} logged={isLogged}/>
        }
        />
        <Route path="/dashboard/history" element={
          <PrivateRoute Component={History} logged={isLogged}/>
        }
        />
      </Routes>

      <Footer />
      <AccountModal show={showModal} handleClose={() => setShowModal(false)} />
    </>
  )
}

export default App;
