import React, { useState } from "react";

const Greeting = () => {
    const [name, setName] = useState("");
  return (
    <div className="greeting-container">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name..."
      />
      {name && <h2>Hello, {name}!</h2>}
    </div>
  )
}

export default Greeting