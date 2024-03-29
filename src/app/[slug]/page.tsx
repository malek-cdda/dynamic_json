"use client";

import { data } from "@/data/urlData";
import React, { useState } from "react";
export type componentProps = {
  name?: string;
  type: string;
  id?: number;
  toggle?: boolean;
  tag?: string;
  text?: string;
  open?: boolean | string;
  style?: {};
};
export type jsonPropsData = {
  url?: string;
  components?: componentProps[];
}[];

const Home = ({ params }: { params: any }) => {
  // page wise data seperate here
  const filterData: any = data.find((item) => item.url === `/${params.slug}`);
  const [json, setJson] = useState<jsonPropsData>(filterData);
  // global click function to organis component
  function handleOnClick(toggleData: componentProps) {
    //  match specific component
    const isMatchComponent = json?.components?.find(
      (item: any) => item.name === toggleData.open
    );
    // update component
    let updateMatchComponent = {
      ...isMatchComponent,
      toggle: !isMatchComponent?.toggle,
    };
    // update json data
    const value = json?.components?.map((component: any) => {
      if (component.id === updateMatchComponent.id) {
        return updateMatchComponent;
      } else {
        return component;
      }
    });
    let updateObject = { ...json, components: value || [] };
    // console.log(updateObject);
    setJson(updateObject);
  }
  // click function here
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

  return (
    <div>
      {json?.components?.map((item: any, index: number) => (
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
