"use client";

import { globalClickHandler, jsonPropsData } from "@/components/utils/utils";
import { data } from "@/data/urlData";
import React, { useEffect, useId, useRef, useState } from "react";

const Home = ({ params }: { params: any }) => {
  const filterData: any = data.find((item) => item.url === `/${params.slug}`);
  const [json, setJson] = useState<jsonPropsData>(filterData);

  return (
    <div>
      {json?.components?.map((item: any, index: number) => (
        <div key={index}>
          {item?.type === "button" &&
            globalClickHandler(item, setJson, filterData)}
          {item?.type === "modal" && item.toggle === true && (
            <div style={item.style}>{item.text}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Home;
