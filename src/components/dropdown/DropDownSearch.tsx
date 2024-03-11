import React, { useEffect, useState } from "react";
import {
  Button,
  ComboSearchLabel,
  DropDownComponent,
  Search,
} from "./styled-components";

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
    setShowDropdown(!showDropdown);
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
    setShowDropdown(!showDropdown);
  }

  return (
    <div>
      <ComboSearchLabel>
        <input
          type="text"
          placeholder="Search.."
          value={searchTerm}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleInputChange}
        />
        <span onClick={() => setShowDropdown(!showDropdown)}>
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
          </svg>
        </span>
      </ComboSearchLabel>
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
