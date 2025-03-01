import React, { useState } from "react";

const Greeting = () => {
    
    const [name, setName] = useState("");


  return (

    <div style={{ textAlign: "center", marginTop: "50px" }}>

      <h1>Personalized Greeting</h1>

      <input
        type="text"
        placeholder="Enter your name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        data-cy="name-input"
        style={{
          padding: "8px",
          fontSize: "16px",
          marginBottom: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />

      <h2 data-cy="greeting-text">{name ? `Hello, ${name}!` : ""}</h2>

    </div>
  );
};

export default Greeting