import { useEffect, useState } from "react";

const RunEffect = (should, fn, deps, ...rest) => {
  const [state, setState] = useState({});
  useEffect(() => {
    rest.forEach((item) => {
      setState((prevState) => ({
        ...prevState,
        ...item,
      }));
    });
  }, []);
  console.log(state);
  useEffect(() => {
    if (should) {
      fn();
    }
  }, [state]);
  console.log(state);
};

export default RunEffect;
