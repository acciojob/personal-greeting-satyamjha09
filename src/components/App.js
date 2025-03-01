
import React, { useState } from "react";
import './../styles/App.css';
import Greeting from "./Greeting";

const App = () => {

  const [name, setName] = useState("")

  return (
    <div className="greeting-container">
       <h1> Personalized Greeting </h1>
       <Greeting />
    </div>
  )
}

export default App
