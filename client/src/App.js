import React from "react";
import './index.css';

import Form from "./components/Forms/Form";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Form />
    </div>
  );
}

export default App;
