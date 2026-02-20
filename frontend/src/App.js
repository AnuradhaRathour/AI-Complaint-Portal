import "./App.css";
import React, { useState } from "react";

function App() {
  const [complaint, setComplaint] = useState("");
  const [result, setResult] = useState(null);

  const submitComplaint = async () => {
    const response = await fetch("http://127.0.0.1:5000/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ complaint })
    });

    const data = await response.json();
    setResult(data);
  };

  return (
    <div className="container">
      <h2>AI Complaint Portal</h2>

      <textarea
        rows="5"
        cols="50"
        placeholder="Enter your complaint..."
        value={complaint}
        onChange={(e) => setComplaint(e.target.value)}
      />

      <br /><br />

      <button onClick={submitComplaint}>Submit</button>

      {result && (
        <div>
          <h3>Priority: {result.priority}</h3>
        </div>
      )}
    </div>
  );
}

export default App;
