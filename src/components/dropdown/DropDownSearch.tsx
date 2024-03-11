import React, { useEffect, useState } from "react";
import {
  ActionArea,
  Button,
  ComboSearchLabel,
  DropDownComponentWrapper,
  PropertyArea,
  SearchBar,
  StorageAreaComponent,
  StorageAreaWrapper,
  FooterActionArea,
} from "./styled-components";

const DropDownSearch = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [filteredOptions, setFilteredOptions] = useState<string[]>([]);
  const [localValue, setLocalValue] = useState([]);
  const [localKeyValue, setLocalKeyValue] = useState([]);
  const options: string[] = ["localstorage", "session", "cookie"];
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
  // storage data edit delete function code here
  const [localStorageData, setLocalStorageData] = useState(
    JSON.parse(localStorage.getItem("customBrowserStorageData") || "{}")
  );
  localStorage.setItem(
    "customBrowserStorageData",
    JSON.stringify({
      name: "vvrgvr6gvrv4rv749r8v7r7v9rvrv",
      abc: "absdlfsdlkfjksdl",
    })
  );

  // update any value and key here
  const handleLocalStorageUpdateArea = (value) => {
    setLocalValue([value[0], value[1]]);
    setLocalKeyValue([value[0], value[1]]);
  };
  // dont want to update and save you cancel it
  const clearUpdateFunction = () => {
    setLocalValue([]);
    setLocalKeyValue([]);
  };
  // save then it gone inital position

  const saveAllInfo = () => {
    setSearchTerm("");
    setShowDropdown(false);
  };
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
      </ComboSearchLabel>
      {/* combobox dropdown div here  */}
      {showDropdown && (
        <DropDownComponentWrapper>
          {filteredOptions.length ? (
            filteredOptions.map((option, index) => (
              <Button key={index} onClick={() => handleOptionClick(option)}>
                {option}
              </Button>
            ))
          ) : (
            <Button>No options found</Button>
          )}
        </DropDownComponentWrapper>
      )}
      {/* storage div setup conditionally  */}
      {searchTerm === "localstorage" && (
        <StorageAreaComponent>
          <div
            style={{
              display: "flex",
              // justifyContent: "space-between",
              gap: "30px",
              width: "80%",
            }}>
            <p
              style={{
                width: "10%",
              }}>
              key
            </p>
            <p>value</p>
          </div>
          {Object.keys(localStorageData).map((key, index) => (
            <StorageAreaWrapper key={index}>
              <PropertyArea>
                {index === localKeyValue[1] ? "" : <span> {key}</span>}
                {index === localKeyValue[1] && (
                  <SearchBar
                    type="text"
                    placeholder="edit property"
                    defaultValue={key || ""}
                  />
                )}
                {index === localValue[1] ? (
                  ""
                ) : (
                  <span> {localStorageData[key]}</span>
                )}
                {index === localValue[1] && (
                  <SearchBar
                    type="text"
                    placeholder="edit property"
                    defaultValue={localStorageData[localValue[0]] || ""}
                  />
                )}
              </PropertyArea>
              <ActionArea>
                <Button
                  onClick={() => handleLocalStorageUpdateArea([key, index])}>
                  Edit
                </Button>
                <Button>Delete</Button>
              </ActionArea>
            </StorageAreaWrapper>
          ))}
          {localKeyValue?.length ? (
            <FooterActionArea>
              <button onClick={() => clearUpdateFunction()}>cancel</button>
              <button onClick={() => saveAllInfo()}>save</button>
            </FooterActionArea>
          ) : (
            ""
          )}
        </StorageAreaComponent>
      )}
      {searchTerm === "session" && (
        <StorageAreaComponent>
          <div
            style={{
              display: "flex",
              // justifyContent: "space-between",
              gap: "30px",
              width: "80%",
            }}>
            <p
              style={{
                width: "10%",
              }}>
              key
            </p>
            <p>value</p>
          </div>
          {Object.keys(localStorageData).map((key, index) => (
            <StorageAreaWrapper key={index}>
              <PropertyArea>
                {index === localKeyValue[1] ? "" : <span> {key}</span>}
                {index === localKeyValue[1] && (
                  <SearchBar
                    type="text"
                    placeholder="edit property"
                    defaultValue={key || ""}
                  />
                )}
                {index === localValue[1] ? (
                  ""
                ) : (
                  <span> {localStorageData[key]}</span>
                )}
                {index === localValue[1] && (
                  <SearchBar
                    type="text"
                    placeholder="edit property"
                    defaultValue={localStorageData[localValue[0]] || ""}
                  />
                )}
              </PropertyArea>
              <ActionArea>
                <Button
                  onClick={() => handleLocalStorageUpdateArea([key, index])}>
                  Edit
                </Button>
                <Button>Delete</Button>
              </ActionArea>
            </StorageAreaWrapper>
          ))}
          {localKeyValue?.length ? (
            <FooterActionArea>
              <button onClick={() => clearUpdateFunction()}>cancel</button>
              <button onClick={() => saveAllInfo()}>save</button>
            </FooterActionArea>
          ) : (
            ""
          )}
        </StorageAreaComponent>
      )}
      {searchTerm === "cookie" && (
        <StorageAreaComponent>
          <div
            style={{
              display: "flex",
              // justifyContent: "space-between",
              gap: "30px",
              width: "80%",
            }}>
            <p
              style={{
                width: "10%",
              }}>
              key
            </p>
            <p>value</p>
          </div>
          {Object.keys(localStorageData).map((key, index) => (
            <StorageAreaWrapper key={index}>
              <PropertyArea>
                {index === localKeyValue[1] ? "" : <span> {key}</span>}
                {index === localKeyValue[1] && (
                  <SearchBar
                    type="text"
                    placeholder="edit property"
                    defaultValue={key || ""}
                  />
                )}
                {index === localValue[1] ? (
                  ""
                ) : (
                  <span> {localStorageData[key]}</span>
                )}
                {index === localValue[1] && (
                  <SearchBar
                    type="text"
                    placeholder="edit property"
                    defaultValue={localStorageData[localValue[0]] || ""}
                  />
                )}
              </PropertyArea>
              <ActionArea>
                <Button
                  onClick={() => handleLocalStorageUpdateArea([key, index])}>
                  Edit
                </Button>
                <Button>Delete</Button>
              </ActionArea>
            </StorageAreaWrapper>
          ))}
          {localKeyValue?.length ? (
            <FooterActionArea>
              <button onClick={() => clearUpdateFunction()}>cancel</button>
              <button onClick={() => saveAllInfo()}>save</button>
            </FooterActionArea>
          ) : (
            ""
          )}
        </StorageAreaComponent>
      )}
    </div>
  );
};

export default DropDownSearch;
