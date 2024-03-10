"use client";
import React, { useEffect, useState } from "react";

import DropDownSearch from "@/components/dropdown/DropDownSearch";
import { Search } from "@/components/dropdown/styled-components";

function Home() {
  return (
    <div>
      <h2>Search/Filter Dropdown</h2>
      <DropDownSearch />
    </div>
  );
}

export default Home;
