import React, {useState} from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import NavBar from "./components/NavBar/NavBar";
import FormRegisterExpense from "./components/FormRegisterExpense/FormRegisterExpense";
import MainPage from "./components/MainPage/MainPage";
/* import NotFound from "./components/NotFound/NotFound"; */

function App() {

  const [data, setData] = useState({
    concept: "",
    amount: 0,
    date: "",
    type: "",
  });

  function handleChange(event) {
    event.preventDefault();
    let name = event.target.name;
    let value = event.target.value;
    setData((prevData) => {
      return { ...prevData, [name]: value };
    });
  }

  function handleEdit(e){
    e.preventDefault();
    console.log(data)
  }

    async function handlePost(event) {
      event.preventDefault();
      const res = await axios.post(`http://localhost:3000/expense`, data);
      alert("Transaction submitted");
      return res;
    } 
  
  
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route exact path="/formregisterexpense" element={<FormRegisterExpense nameButton={"Submit"} handleSubmit={handlePost} handleChange={handleChange} data={data}/>} />
          <Route exact path="/formeditexpense" element={<FormRegisterExpense nameButton={"Edit"} handleSubmit={()=>handleEdit()} data={data}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
