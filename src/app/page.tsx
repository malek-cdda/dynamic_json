"use client";
import CustomHooks from "@/components/hooks/customeHooks";
import styles from "./page.module.css";
import React from "react";

export default function Home() {
  // const data = {
  //   type: "button",
  //   text: "Click me",
  //   onClick: `handleClick.bind(null,"open")`,
  //   style: {
  //     backgroundColor: "red",
  //     color: "white",
  //     cursor: "pointer",
  //   },
  // };
  // const handleClick = (action: string) => {
  //   console.log("Button clicked", action);
  // };
  // const buttons = React.createElement(
  //   "button",
  //   {
  //     onClick: eval(`(${data.onClick})`),
  //     style: data.style,
  //   },
  //   data.text
  // );
  const data = [
    {
      type: "sidebarToggle",
      toggle: true,
    },
    {
      type: "modalToggle",
      toggle: true,
      data: {
        id: "123",
        name: "modal",
      },
    },
  ];
  const returnComponent = data.map((item, index) => {
    switch (item.type) {
      case "sidebarToggle":
        return <Sidebar key={index} item={item} />;
        break;
      case "modalToggle":
        return <Modal key={index} item={item} />;
        break;
      default:
        break;
    }
  });
  // const [value, setValue] = CustomHooks(buttons);
  return <main className={styles.main}>{returnComponent}</main>;
}

const Sidebar = ({
  item,
}: {
  item: {
    type: string;
    toggle: boolean;
    data?: Object;
  };
}) => {
  const [value, setValue] = CustomHooks(item?.toggle);
  return (
    <aside className={styles.sidebar}>
      <button onClick={() => setValue(!value)}>Toggle</button>
    </aside>
  );
};

const Modal = ({
  item,
}: {
  item: { type: string; toggle: boolean; data?: Object };
}) => {
  const [value, setValue] = CustomHooks(item?.toggle);
  return (
    <aside className={styles.sidebar}>
      <>
        <button onClick={() => setValue(!value)}>Toggle</button>
      </>
    </aside>
  );
};
