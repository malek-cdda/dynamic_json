import styled from "styled-components";

export const Search = styled.input`
  background: "red";
  border: "none",
  borderBottom: "1px solid #ccc",
  outline: "none",
  padding: "8px 7px",
  width: "100%",
  borderRadius: "10px",
`;
export const DropDownComponent = styled.div`
display: "flex",
flexDirection: "column",
alignItems: "center",
backgroundColor: "#B2BEB5",
borderRadius: "10px",
padding: "10px",
position: "absolute",
width: "calc(100% - 14px)",
marginTop: "5px",
// hover 
  &:hover {
    cursor: "pointer",
    backgroundColor: green,
  }
`;
// style={{
//     border: "none",
//     outline: "none",
//     padding: "8px 7px",
//     width: "100%",
//     borderRadius: "10px",
//     backgroundColor: "#B2BEB5",
//     color: "white",
//     cursor: "pointer",
//     marginBottom: "5px",
//   }}

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
