import React, {useState} from "react";
import {Route, Routes} from 'react-router-dom'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AccountModal from "./components/AccountModal";

import Home from "./views/Home";
import "./App.scss";

const App = () => {

  const [showModal, setShowModal] = useState(false);


  return (
    <>
      <Navbar handleCreateAcc={() => setShowModal(true)} />
      
      <Routes>
        <Route path="/" element={<Home handleClick={() => setShowModal(true)} />} />
      </Routes>

      <Footer />
      <AccountModal show={showModal} handleClose={() => setShowModal(false)} />
    </>
  )
}

export default App;
