import React, { useEffect, useState } from "react";
import { Button, DropDownComponent, Search } from "./styled-components";

const DropDownSearch = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [filteredOptions, setFilteredOptions] = useState<string[]>([]);
  const options: string[] = [
    "About",
    "Base",
    "Blog",
    "Contact",
    "Custom",
    "Support",
    "Tools",
  ];
  useEffect(() => {
    setFilteredOptions(options);
  }, []);
  function toggleDropdown() {
    setShowDropdown(!showDropdown);
  }

  function handleFocus() {
    setShowDropdown(true);
  }

  function handleBlur() {
    setTimeout(() => {
      setShowDropdown(false);
    }, 200);
  }
  //   for give any value in input field value change here
  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const searchTerm = event.target.value;
    console.log(searchTerm);
    setSearchTerm(searchTerm);

    const filteredOptions = options.filter((option) =>
      option.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredOptions(filteredOptions);
  }
  // click option and show options dropdown value
  function handleOptionClick(option: string) {
    setSelectedOption(option);
    setSearchTerm(option);
    setShowDropdown(true);
  }

  return (
    <div>
      <Search
        type="text"
        placeholder="Search.."
        value={searchTerm}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleInputChange}
        style={{
          border: "none",
          borderBottom: "1px solid #ccc",
          outline: "none",
          padding: "8px 7px",
          width: "100%",
          borderRadius: "10px",
        }}
      />
      {showDropdown && (
        <DropDownComponent>
          {filteredOptions.length ? (
            filteredOptions.map((option, index) => (
              <Button key={index} onClick={() => handleOptionClick(option)}>
                {option}
              </Button>
            ))
          ) : (
            <Button>No options found</Button>
          )}
        </DropDownComponent>
      )}
    </div>
  );
};

export default DropDownSearch;
