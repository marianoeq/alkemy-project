import React, { useState } from "react";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import NavBar from "./components/NavBar/NavBar";
import FormRegisterExpense from "./components/FormRegisterExpense/FormRegisterExpense";
import MainPage from "./components/MainPage/MainPage";
import NotFound from "./components/NotFound/NotFound";
import Footer from "./components/Footer/Footer";

function App() {

  const [data, setData] = useState({
    concept: "",
    amount: 0,
    date: "",
    type: "",
  });
  const sessionID = sessionStorage.getItem("id");
  const navigate = useNavigate();

  function handleChange(event) {
    event.preventDefault();
    let name = event.target.name;
    let value = event.target.value;
    setData((prevData) => {
      return { ...prevData, [name]: value };
    });
  }

  //POST REQUEST
  const handlePost = async (event) => {
    event.preventDefault();
    const res = await axios.post(`/expense`, data);
    alert("Transaction submitted");
    setData("");
    navigate("/");
    return res;
  };

  //PUT REQUEST
  const handleEdit = async (event, id) => {
    event.preventDefault();
    const res = await axios.put(`/${id}`, data);
    navigate("/");
    setData("");
    return res;
  };

  return (
    
      <div className="App">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<MainPage />} />

          <Route
            exact
            path="/formregisterexpense"
            element={
              <FormRegisterExpense
                nameButton={"Submit"}
                handleSubmit={handlePost}
                handleChange={handleChange}
                data={data}
                isEditable={true}
              />
            }
          />
          <Route
            exact
            path="/formeditexpense"
            element={
              <FormRegisterExpense
                nameButton={"Edit"}
                handleSubmit={(e) => handleEdit(e, sessionID)}
                handleChange={handleChange}
                data={data}
                isEditable={false}
              />
            }
          />

          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </div>
   
  );
}

export default App;
