import { useState } from "react";

type Obj = {
  [key: string]: any;
};
const GetState = (states) => {
  // !state management
  //? Create an object to hold all the state values
  const initialState: Obj = {};
  //? Populate the initialState object based on the data
  states.forEach((item: { name: string; value: any }) => {
    console.log(item, "come from state");
    initialState[item.name] = item.value;
  });
  // ?!  initialize state
  const [state, setState] = useState(initialState);

  //?!  function to update state values
  const setStateValue = (name: string, newValue: any) => {
    setState((prevState: Obj) => ({
      ...prevState,
      [name]: newValue,
    }));
  };
  return [state, setStateValue];
};
export default GetState;
