"use client";
import React, { useState } from "react";

class GlobalNode {
  toggle: boolean = false;
  //   constructor() {
  //     this.toggle = false;
  //   }
  toggleState() {
    this.toggle = !this.toggle;
    console.log(this.toggle);
  }
  modal() {
    return this.toggle ? `modal` : `none`;
  }
}

const Home = () => {
  const value = new GlobalNode(); // Use useState to maintain state
  const [value1, value2] = useState("");
  let values;
  const fnc = () => {
    value.toggleState();
    values = value.modal();
    value2(values);
  };
  const data = value.modal();
  console.log(data);
  return (
    <div>
      {value1}
      <button onClick={fnc}>Toggle</button>
    </div>
  );
};

export default Home;
