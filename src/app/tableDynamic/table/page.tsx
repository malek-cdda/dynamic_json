"use client";
import { table } from "console";
import React, { useEffect, useState } from "react";
// Assuming dNode is an object or an array
function isEmpty(obj) {
  if (typeof obj === "object" && Object.keys(obj).length === 0) {
    return true;
  }
  if (Array.isArray(obj) && obj.length === 0) {
    return true;
  }
  return false;
}

const Home = () => {
  const [count, setCount] = useState(0);
  function createComponent(dNode: any, h: any): any {
    if (isEmpty(dNode)) {
      return [];
    }
    if (Array.isArray(dNode)) {
      return dNode.map((child) => createComponent(child, h));
    }
    let children: any = [];

    // If the node has children render them too
    if (dNode.children && dNode.children.length > 0) {
      dNode.children.forEach((c) => {
        if (typeof c === "string") {
          children.push(c);
        } else {
          children.push(createComponent(c, h));
        }
      });
    }

    const prop = {
      ...(dNode?.properties || {}),
      ...(dNode?.properties?.func && {
        onClick: () => handleClick(dNode?.properties?.func),
      }),
    };
    prop.key = Date.now() + "." + Math.random(1000);

    return h(
      dNode.tagName,
      // properties,
      // null,
      // dNode.properties,
      prop,
      children.length > 0 ? children : dNode.textNode
    );
  }
  function UIEngines(nodes: any) {
    // console.log(createComponent(nodes, React.createElement));
    return createComponent(nodes, React.createElement);
  }
  let handleClick = (fcn) => {
    setCount(count + 1);
    const funcString = eval(`(${fcn})`)();
    console.log(funcString);
  };

  const nodes = {
    tagName: "table",
    properties: {
      style: {
        textTransform: "uppercase",
        backgroundColor: "red",
        width: "100%",
        border: "1px solid yellow",
        textAlign: "left",
      },
    },
    children: [
      {
        tagName: "thead",
        children: [
          {
            tagName: "tr",
            children: [
              {
                tagName: "th",
                children: ["Name"],
              },
              {
                tagName: "th",
                children: ["Age"],
              },
              {
                tagName: "th",
                children: ["Age"],
              },
              {
                tagName: "th",
                children: ["Age"],
              },
            ],
          },
        ],
      },
      {
        tagName: "tbody",
        properties: {
          style: {
            textTransform: "lowercase",
            backgroundColor: "lightblue",
            width: "100%",
            border: "1px solid yellow",
            padding: "10px",
          },
        },
        children: [
          {
            tagName: "tr",
            properties: {
              style: {
                textTransform: "lowercase",
                backgroundColor: "lightblue",
                width: "100%",
                border: "1px solid yellow",
                padding: "10000px",
                textAlign: "left",
              },
            },
            children: [
              {
                tagName: "td",

                properties: {
                  style: {
                    textTransform: "lowercase",
                    backgroundColor: "lightblue",
                    width: "100%",
                    border: "1px solid yellow",
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: "10px",
                    padding: "10px",
                  },
                },
                children: [
                  {
                    tagName: "input",
                    properties: {
                      type: "checkbox",
                      style: {
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        backgroundColor: "red",
                      },
                    },
                  },
                  {
                    tagName: "img",
                    properties: {
                      src: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
                      alt: "google",
                      style: {
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        border: "4px solid black",
                        padding: "2px",
                      },
                    },
                  },
                  {
                    tagName: "div",
                    children: [
                      {
                        tagName: "div",
                        textNode: "good ",
                      },
                      {
                        tagName: "div",
                        textNode: " Manuf vai ",
                      },
                    ],
                  },
                ],
              },
              {
                tagName: "td",
                children: [
                  {
                    tagName: "p",
                    textNode: "good ",
                    properties: {
                      style: {
                        backgroundColor: "red",
                        textAlign: "center",
                        color: "white",
                        width: "100%",
                        border: "1px solid yellow",
                        padding: "10px",
                        height: "100%",
                      },
                    },
                  },
                ],
              },
              {
                tagName: "td",
                children: ["Age"],
              },
              {
                tagName: "td",
                properties: {
                  style: {
                    textTransform: "lowercase",
                    backgroundColor: "lightblue",
                    width: "100%",

                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: "10px",
                  },
                },
                children: [
                  {
                    tagName: "button",
                    textNode: "Delete",
                    properties: {
                      style: {
                        padding: "8px",
                        borderRadius: "8px",
                        backgroundColor: "black",
                        width: "100%",
                        border: "1px solid yellow",
                        cursor: "pointer",
                        hover: {
                          backgroundColor: "blue",
                        },
                      },
                    },
                  },
                  {
                    tagName: "button",
                    textNode: "Edit",
                    properties: {
                      style: {
                        padding: "8px",
                        borderRadius: "8px",
                        backgroundColor: "green",
                        width: "100%",
                        border: "1px solid yellow",
                        cursor: "pointer",
                        hover: {
                          backgroundColor: "blue",
                        },
                      },
                    },
                  },
                  {
                    tagName: "button",
                    textNode: "View",
                    properties: {
                      func: `function() { 
                     return  {
                      name:"no body touch me"
                     }
                    }`,
                      style: {
                        padding: "8px",
                        borderRadius: "8px",
                        backgroundColor: "red",
                        width: "100%",
                        border: "1px solid yellow",
                        cursor: "pointer",
                        hover: {
                          backgroundColor: "blue",
                        },
                      },
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  };
  const sortData = (data) => {
    if (data.children && data.children.length > 0) {
      data.children.sort((a, b) => {
        // Assuming you want to sort based on the first child's text content
        const textA =
          a?.children?.length && a?.children[0]?.textNode?.toUpperCase();
        const textB =
          b?.children?.length && b?.children[0]?.textNode?.toUpperCase();
        if (textA < textB) return -1;
        if (textA > textB) return 1;
        return 0;
      });
      // Recursively sort children
      const datas = data.children.map((child) => sortData(child));
    }
  };

  // Call the sorting function
  sortData(nodes);

  // console.log(JSON.stringify(nodes, null, 2));
  return (
    <div>
      {UIEngines(nodes)} {count}{" "}
    </div>
  );
};

export default Home;
