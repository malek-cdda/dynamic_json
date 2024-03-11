"use client";
import React from "react";

import DropDownSearch from "@/components/dropdown/DropDownSearch";

function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",

        height: "100vh",
        width: "90vw",
      }}>
      <DropDownSearch />
    </div>
  );
}

export default Home;
