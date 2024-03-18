"use client";
import React from "react";

const Home = () => {
  // const fnc = async () => {
  //   const fetchData = await fetch(
  //     "https://jsonplaceholder.typicode.com/photos"
  //   );
  //   const data = await fetchData.json();
  //   console.log(data);
  //   return data.map((item) => {
  //     return React.createElement("div", null, item.id);
  //   });
  // };
  const data = {
    id: 1,
    api: "https://jsonplaceholder.typicode.com/photos",
    method: "get",
    data: "photos",
    // renderType:'ssr',
    components: [
      {
        index: 1,
        tag: "div",
        properties: {
          style: {
            backgroundColor: "green",
            // display: "flex",

            flexDirection: "row",
          },
        },

        children: [
          {
            tag: "span",
            properties: {
              style: {
                backgroundColor: "yellow",
                display: "flex",

                flexDirection: "row",
              },
            },
            children: [
              {
                textNode: "good ",
                tag: "span",
                text: "id",
              },
              {
                tag: "img",

                properties: {
                  // src: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
                  text: "url",
                  alt: "google",
                  style: {
                    width: "150px",
                    height: "150px",
                    borderRadius: "50%",
                    border: "4px solid black",
                    padding: "2px",
                  },
                },
              },
            ],
          },
        ],
      },
    ],
  };
  // object check is empty or not empty
  function isEmpty(obj) {
    if (typeof obj === "object" && Object.keys(obj).length === 0) {
      return true;
    }
    if (Array.isArray(obj) && obj.length === 0) {
      return true;
    }
    return false;
  }
  // create component function recursive
  function createComponent(dNode: any, h: any, i): any {
    if (isEmpty(dNode)) {
      return [];
    }
    if (Array.isArray(dNode)) {
      return dNode.map((child) => createComponent(child, h, i));
    }
    let children: any = [];

    // If the node has children render them too
    if (dNode.children && dNode.children.length > 0) {
      dNode.children.forEach((c) => {
        if (typeof c === "string") {
          children.push(c);
        } else {
          children.push(createComponent(c, h, i));
        }
      });
    }
    // console.log(i[dNode.text]);
    const prop = {
      ...(dNode?.properties || {}),
      src: i[dNode?.properties?.text],
      ...(dNode?.properties?.func &&
        {
          // onClick: () => handleClick(dNode?.properties?.func),
        }),
    };
    prop.key = Date.now() + "." + Math.random(1000);
    // text for any div or other
    let text = i[dNode.text];
    return h(dNode.tag, prop, children.length > 0 ? children : text);
  }

  const UIEngines = async (dNode) => {
    const fetchData = await fetch(
      "https://jsonplaceholder.typicode.com/photos"
    );
    const data = await fetchData.json();
    return data.map((i) =>
      createComponent(dNode.components[0], React.createElement, i)
    );
  };
  return <div>{UIEngines(data)}</div>;
};

export default Home;
