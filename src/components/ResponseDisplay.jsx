import React from "react";

const ResponseDisplay = ({ response, selectedFilters }) => {
  if (!response) return null;

  const renderFilteredData = () => {
    let filteredData = {};
    if (selectedFilters.includes("alphabets")) {
      filteredData["Alphabets"] = response.alphabets;
    }
    if (selectedFilters.includes("numbers")) {
      filteredData["Numbers"] = response.numbers;
    }
    if (selectedFilters.includes("highest_lowercase_alphabet")) {
      filteredData["Highest Lowercase Alphabet"] = response.highest_lowercase_alphabet;
    }
    return filteredData;
  };

  const filteredData = renderFilteredData();

  return (
    <div>
      <h2>Filtered Response</h2>
      <pre>{JSON.stringify(filteredData, null, 2)}</pre>
    </div>
  );
};

export default ResponseDisplay;
