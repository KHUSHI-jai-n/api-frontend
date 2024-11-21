import React, { useState } from "react";
import InputForm from "./components/InputForm";
import DropdownFilter from "./components/DropdownFilter";
import ResponseDisplay from "./components/ResponseDisplay";

const App = () => {
  const [apiResponse, setApiResponse] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState([]);

  return (
    <div>
      <h1>ABCD123</h1>
      <InputForm setApiResponse={setApiResponse} />
      {apiResponse && (
        <DropdownFilter
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
        />
      )}
      <ResponseDisplay response={apiResponse} selectedFilters={selectedFilters} />
    </div>
  );
};

export default App;

