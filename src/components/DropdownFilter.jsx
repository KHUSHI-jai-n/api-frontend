import React from "react";
import Select from "react-select";

const DropdownFilter = ({ options, selectedFilters, setSelectedFilters }) => {
  const dropdownOptions = [
    { value: "alphabets", label: "Alphabets" },
    { value: "numbers", label: "Numbers" },
    { value: "highest_lowercase_alphabet", label: "Highest Lowercase Alphabet" },
  ];

  const handleChange = (selected) => {
    setSelectedFilters(selected ? selected.map((opt) => opt.value) : []);
  };

  return (
    <div>
      <h2>Filter Response</h2>
      <Select
        isMulti
        options={dropdownOptions}
        onChange={handleChange}
        placeholder="Select Filters"
      />
    </div>
  );
};

export default DropdownFilter;
