import React from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import FormRegisterExpense from "./components/FormRegisterExpense/FormRegisterExpense";
import MainPage from "./components/MainPage/MainPage";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div className="App">
       <Router>
        <NavBar />
        <Routes>
          <Route exact path="/formregister" element={<FormRegisterExpense />} />
          <Route exact path="/" element={<MainPage />} />
        </Routes>
      </Router> 
    
      
   

      
    </div>
  );
}

export default App;
