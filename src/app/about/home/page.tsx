"use client";
import { table } from "console";
import React from "react";
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

  const prop = { ...dNode?.properties } || {};
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
  return createComponent(nodes, React.createElement);
}
const Home = () => {
  // const component = [
  //   {
  //     type: "table",
  //     children: [
  //       {
  //         type: "thead",
  //         children: [
  //           {
  //             type: "tr",
  //             children: [
  //               {
  //                 type: "th",
  //                 text: "Name",
  //               },
  //               {
  //                 type: "th",
  //                 text: "Age",
  //               },
  //             ],
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // ];
  // const createTable = () => {
  //   return React.createElement(
  //     "table",
  //     { className: "table" },
  //     React.createElement(
  //       "thead",
  //       null,
  //       React.createElement(
  //         "tr",
  //         null,
  //         React.createElement("th", null, "Name"),
  //         React.createElement("th", null, "Age")
  //       )
  //     ),
  //     React.createElement(
  //       "tbody",
  //       null,
  //       React.createElement(
  //         "tr",
  //         null,
  //         React.createElement("td", null, "John"),
  //         React.createElement("td", null, "30")
  //       ),
  //       React.createElement(
  //         "tr",
  //         null,
  //         React.createElement("td", null, "Mary"),
  //         React.createElement("td", null, "28")
  //       )
  //     )
  //   );
  // };
  // const createTables = () => {
  //    const dataTable = component.map((item, index) => {

  //    })
  // }
  const nodes = {
    tagName: "table",
    properties: {
      style: {
        textTransform: "uppercase",
        backgroundColor: "red",
        width: "100%",
        border: "1px solid yellow",
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
            backgroundColor: "blue",
            width: "100%",
            border: "1px solid yellow",
          },
        },
        children: [
          {
            tagName: "tr",
            children: [
              {
                tagName: "th",
                textNode: "YOU CAN CREATE REACT COMPONENTS OUT OF JSON",
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
    ],
  };

  return <div>{UIEngines(nodes)}</div>;
};

export default Home;
