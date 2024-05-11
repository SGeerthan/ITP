//import Register from'./pages/Register'
//import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Paymentmanagement from "./pages/Paymentmanagement";
import PaymentVerification from "./pages/PaymentVerification";
//import Formyup from './pages/Formyup';


const App=()=> {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Paymentmanagement />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;