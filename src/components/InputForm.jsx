import React, { useState } from "react";
import axios from "axios";

const apiUrl = 'https://bfhl-api-1-kg21.onrender.com/bfhl';
const InputForm = ({ setApiResponse }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Validate JSON
      const jsonInput = JSON.parse(input);
      if (!jsonInput.data) {
        throw new Error("Invalid JSON: Missing 'data' field");
      }

      // Call backend API
      const response = await axios.post(apiUrl, jsonInput);
      setApiResponse(response.data);
      setError("");
    } catch (err) {
      setError("Invalid JSON or API error: " + err.message);
    }
  };

  return (
    <div>
      <h2>Enter JSON Input</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='{"data": ["A", "B", "1"]}'
          rows="5"
          style={{ width: "100%" }}
        />
        <button type="submit">Submit</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default InputForm;
