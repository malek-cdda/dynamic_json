import styled from "styled-components";

export const Search = styled.input`
  border: none;
  border-bottom: 1px solid #ccc;
  outline: none;
  padding: 8px 7px;
  width: 100%;
  border-radius: 10px;
`;
export const DropDownComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  position: absolute;
  width: calc(100% - 14px);
  margin-top: 5px;
`;
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
  //  position:relative;
`;
export const ComboSearchLabel = styled.label`
  background-color: green;
  top: 20px;
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
