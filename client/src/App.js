import React, { useState } from "react";
import "./App.css";
import './index.css';

function App() {
  const [skills, setSkills] = useState("");
  const [result, setResult] = useState([]);

  const handleSubmit = () => {
    // Temporary dummy recommendations
    const jobs = [
      "Frontend Developer",
      "Backend Developer",
      "Data Analyst",
      "AI Engineer"
    ];

    setResult(jobs);
  };

  return (
    <div className="App">
      <h1>AI Skill & Job Matcher</h1>

      <input
        type="text"
        placeholder="Enter your skills (e.g. Java, Python)"
        value={skills}
        onChange={(e) => setSkills(e.target.value)}
      />

      <button onClick={handleSubmit}>Get Recommendations</button>

      <div>
        {result.map((job, index) => (
          <p key={index}>{job}</p>
        ))}
      </div>
    </div>
  );
}

export default App;