"use client";

import { data } from "@/data/urlData";
import React, { useEffect, useId, useRef, useState } from "react";
type componentProps = {
  name?: string;
  type: string;
  id?: number;
  toggle?: boolean;
  tag?: string;
  text?: string;
  open?: boolean | string;
  style?: {};
};
type jsonPropsData = {
  url?: string;
  components?: componentProps[];
}[];

const Home = ({ params }: { params: any }) => {
  const [json, setJson] = useState<jsonPropsData>(data || []);

  function handleOnClick(toggleData: componentProps) {
    //  match specific component
    const isMatchComponent = json[0].components?.find(
      (item) => item.name === toggleData.open
    );
    // console.log(isMatchComponent?.toggle);
    let updateMatchComponent = {
      ...isMatchComponent,
      toggle: !isMatchComponent?.toggle,
    };
    // update json data
    let updateJsonData: jsonPropsData | Object[] = json.map((item) => {
      const value = item.components?.map((component) => {
        if (component.id === updateMatchComponent.id) {
          return updateMatchComponent;
        } else {
          return component;
        }
      });
      return { ...item, components: value || [] };
    });
    setJson(updateJsonData);
  }
  const globalClickHandler = (data: componentProps) => {
    return React.createElement(
      data?.type,
      {
        onClick: () => handleOnClick(data),
        style: data.style,
      },
      data.text // Fix: Add 'text' property to 'componentProps' type definition
    );
  };
  console.log(json);
  return (
    <div>
      {json[0]?.components?.map((item: any, index: number) => (
        <div key={index}>
          {item?.type === "button" && globalClickHandler(item)}
          {item?.type === "modal" && item.toggle === true && (
            <div style={item.style}>{item.text}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Home;
