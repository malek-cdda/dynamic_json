import styled from "styled-components";

export const Button = styled.button`
  border: none;
  outline: none;
  padding: 8px 7px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  &:hover {
    background: green;
  }
`;
export const DropDownComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;
export const ComboSearchLabel = styled.label`
  background-color: green;
  // top: 20px;
  margin-top: 20px;
  position: relative;
  input {
    width: 100%;
    padding-left: 10px;
    height: 40px;
    border: 1px solid #ccc;
    border-radius: 10px;
    outline: none;
  }
  span {
    font-size: 14px;
    font-weight: 600;
    color: white;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 10px;
    border-left: 1px solid #ccc;
    position: absolute;
    right: 0px;
    top: 56%;
    transform: translateY(-50%);
    cursor: pointer;
  }
`;
export const StorageAreaComponent = styled.div`
  // background-color: red;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
`;
export const StorageAreaWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
`;
export const PropertyArea = styled.div`
  width: 80%;
  color: white;
  border-radius: 10px;
  // padding: 10px;
  display: flex;
  gap: 30px;
  font-size: 16px;
  :first-child {
    width: 10%;
  }
  :last-child {
    font-weight: 400;
    font-size: 14px;
  }
`;
export const ActionArea = styled.div`
  width: 30%;
  color: white;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  gap: 10px;
  font-size: 16px;
`;
export const SearchBar = styled.input`
  width: 60%;
  padding-left: 10px;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 10px;
  outline: none;
`;
export const FooterActionArea = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: end;
  margin-right: 10px;
  button {
    background-color: green;
    padding: 5px 8px;
    border-radius: 6px;
    cursor: pointer;
    border: none;
  }
  :last-child {
    background-color: green;
  }
  :first-child {
    background-color: red;
  }
`;
