import React from "react";
import { json } from "stream/consumers";
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

export function handleOnClick(
  toggleData: componentProps,
  setJson: any,
  json: jsonPropsData
) {
  //  match specific component
  const isMatchComponent = json?.components?.find(
    (item) => item.name === toggleData.open
  );
  // console.log(isMatchComponent);
  let updateMatchComponent = {
    ...isMatchComponent,
    toggle: !isMatchComponent?.toggle,
  };
  // update json data
  const value = json?.components?.map((component) => {
    if (component.id === updateMatchComponent.id) {
      return updateMatchComponent;
    } else {
      return component;
    }
  });
  let updateObject = { ...json, components: value || [] };
  setJson(updateObject);
}
export const globalClickHandler = (data: componentProps, setJson, json) => {
  return React.createElement(
    data?.type,
    {
      onClick: () => handleOnClick(data, setJson, json),
      style: data.style,
    },
    data.text // Fix: Add 'text' property to 'componentProps' type definition
  );
};
