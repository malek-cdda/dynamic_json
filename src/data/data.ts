export const Pages = [
  {
    title: "Home",

    url: "/",

    dataProperty: "data",

    apis: [
      {
        url: "/api/landingpage",
        method: "get",
        data: "landingpage",
        renderType: "ssr",
      },
    ],

    component: [
      {
        index: 1,
        tag: "img",
        style: { marginTop: "5px", border: "4px dashed" },
        dataProperty: "thumbnailUrl",
      },
      {
        index: 2,
        tag: "h2",
        style: { marginTop: "5px", border: "4px dashed" },
        dataProperty: "comapanyName",
      },
    ],
  },

  {
    title: "test",
    url: "/test",
    urls: "/test",
    dataProperty: "data",

    apis: [
      {
        url: "https://jsonplaceholder.typicode.com/users",
        method: "get",
        data: "users",
        renderType: "ssr",
      },
      {
        name: "Posts",
        url: "https://jsonplaceholder.typicode.com/photos",
        method: "get",
        data: "posts",
        renderType: "csr",
      },
    ],

    component: [
      {
        index: 1,
        tag: "img",
        style: {
          marginTop: "5px",
          border: "2px solid",
          borderColor: "red",
          borderRadius: "50%",
          height: "200px",
          width: "200px",
          padding: "4px",
          margin: "20px auto",
        },
        dataProperty: "thumbnailUrl",
      },
      {
        index: 2,
        tag: "p",
        style: {
          marginTop: "5px",
          border: "4px solid",
          borderRadius: "10px",
          padding: "10px",
          borderColor: "blue",
          height: "100px",
          width: "50%",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "10px",
        },
        dataProperty: "title",
      },
      {
        index: 3,
        tag: "p",
        style: {
          marginTop: "5px",
          border: "4px solid",
          borderRadius: "10px",
          padding: "10px",
          borderColor: "blue",
          height: "100px",
          width: "50%",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "10px",
        },

        dataProperty: "title",
      },
      {
        index: 4,
        tag: "p",
        style: {
          marginTop: "5px",
          border: "4px solid",
          borderRadius: "10px",
          padding: "10px",
          borderColor: "blue",
          height: "100px",
          width: "50%",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "10px",
        },

        dataProperty: "title",
      },
      {
        index: 5,
        tag: "p",
        style: {
          marginTop: "5px",
          border: "4px solid",
          borderRadius: "10px",
          padding: "10px",
          borderColor: "blue",
          height: "100px",
          width: "50%",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "10px",
        },

        dataProperty: "title",
      },
    ],
  },
  {
    title: "tests",
    url: "/tests",
    urls: "/tests",
    dataProperty: "data",
    apis: [
      {
        url: "https://jsonplaceholder.typicode.com/users",
        method: "get",
        data: "users",
        renderType: "ssr",
      },
      {
        name: "Posts",
        url: "https://jsonplaceholder.typicode.com/photos",
        method: "get",
        data: "posts",
        renderType: "csr",
      },
    ],
    //?Here we can declare states like this
    states: [
      {
        name: "yeasir",
        value: 5,
      },
      {
        name: "yeasir2",
        value: 2,
      },
      {
        name: "yeasir3",
        value: 10,
      },
    ],
    hooks: [
      {
        //?react hook name like useEffect, useState, useReducer etc
        //! you cant use custom hook here!!
        name: "useEffect",
        //? we can use our declared states here
        dependencies: ["yeasir", "yeasir2"],
        //? The main function that will execute when the dependencies change
        hook: `function(){
                console.log("hey there yeasir from hook")
            }`,
      },
    ],

    functions: [
      {
        name: "cosoleHost",
        func: `function() { 
                console.log(window.location.host)
            }`,
      },
      {
        name: "giveAlert",
        func: `function() { 
                alert("hey there yeasir")
            }`,
      },
    ],

    component: [
      {
        index: 1,
        tag: "img",
        style: {
          marginTop: "5px",
          border: "2px solid",
          borderColor: "red",
          borderRadius: "50%",
          height: "200px",
          width: "200px",
          padding: "4px",
          margin: "20px auto",
        },
        dataProperty: "thumbnailUrl",
      },
      {
        index: 2,
        tag: "p",
        data: "",
        content: "",
        style: {
          marginTop: "5px",
          border: "4px solid",
          borderRadius: "10px",
          padding: "10px",
          borderColor: "blue",
          height: "100px",
          width: "50%",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "10px",
        },

        dataProperty: "yeasir2",
      },
      {
        index: 3,
        tag: "p",
        data: "",
        content: "",
        style: {
          marginTop: "5px",
          border: "4px solid",
          borderRadius: "10px",
          padding: "10px",
          borderColor: "blue",
          height: "100px",
          width: "50%",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "10px",
        },

        dataProperty: "yeasir",
      },
      {
        index: 7,
        tag: "p",
        data: "",
        content: "",
        style: {
          marginTop: "5px",
          border: "4px solid",
          borderRadius: "10px",
          padding: "10px",
          borderColor: "blue",
          height: "100px",
          width: "50%",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "10px",
        },

        dataProperty: "yeasir3",
      },
      {
        index: 4,
        tag: "button",
        //? here we can add onClick function and we can update our states
        onClick: `function(){
                    setStateValue("yeasir", state["yeasir"]+1)
                }`,
        style: {
          marginTop: "5px",
          border: "4px solid",
          borderRadius: "10px",
          padding: "10px",
          borderColor: "purple",
          backgroundColor: "gray",
          height: "100px",
          width: "50%",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "10px",
        },
        dataProperty: "button",
      },
      {
        index: 4,
        tag: "button",
        //? here we can add onClick function and we can update our states
        onClick: `function(){
                    setStateValue("yeasir", state["yeasir"]+1)
                }`,
        style: {
          marginTop: "5px",
          border: "4px solid",
          borderRadius: "10px",
          padding: "10px",
          borderColor: "purple",
          backgroundColor: "gray",
          height: "100px",
          width: "50%",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "10px",
        },
        dataProperty: "button",
      },
      {
        index: 6,
        tag: "button",
        // onClick: `function(){
        //     setStateValue("yeasir", states["yeasir"]-1)
        // }`,
        onClick: `function(){
                    callFunction("giveAlert")
                }`,
        style: {
          marginTop: "5px",
          border: "4px solid",
          borderRadius: "10px",
          padding: "10px",
          borderColor: "purple",
          backgroundColor: "gray",
          height: "100px",
          width: "50%",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "10px",
        },

        dataProperty: "button",
      },
      {
        index: 8,
        tag: "button",
        // onClick: `function(){
        //     setStateValue("yeasir3", states["yeasir3"]-1)
        // }`,
        onClick: `function(){
                    callFunction("cosoleHost")
                }`,
        style: {
          marginTop: "5px",
          border: "4px solid",
          borderRadius: "10px",
          padding: "10px",
          borderColor: "purple",
          backgroundColor: "gray",
          height: "100px",
          width: "50%",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "10px",
        },

        dataProperty: "button",
      },
      {
        index: 5,
        tag: "div",
        style: {
          position: "absolute",
          bottom: "25px",
          display: "flex",
          alignItems: "center",
          justifyContent: "between",
          borderRadius: "10px",
          padding: "10px",
          backgroundColor: "#B2BEB5",
          height: "120px",
          width: "20%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "10px",
          transition: "all 0.5s ease-in-out",
        },
        //? we can conditionally set styles like this
        conditionalStyles: [
          {
            condition: "state['yeasir'] < 4",
            style: {
              right: "-505px",
            },
          },
          {
            condition: "state['yeasir'] >= 4",
            style: {
              right: "25px",
            },
          },
        ],

        //? we can conditionally render our components like this

        // conditionalRender: [
        //     {
        //         expression: "states['yeasir2'] === states['yeasir']", // First condition
        //     },
        //     {
        //         operator: "OR", // Logical operator (OR, AND, NOT, NOR)
        //         expression: "states['yeasir'] < 2", // Second condition
        //     },
        //     {
        //         operator: "AND", // Logical operator (OR, AND, NOT, NOR)
        //         expression: "states['yeasir3'] === 3", // Second condition
        //     },
        // ],
      },
      {
        index: 9,
        parentIndex: 5,
        tag: "div",
        style: {
          border: "1px solid",
          weight: "100%",
          height: "100%",
          padding: "10px",
          display: "flex",
        },
        // conditionalStyles: [
        //     {
        //         condition: "states['yeasir'] < 4",
        //         style: {
        //             backgroundColor: "red",
        //         },
        //     },
        //     {
        //         condition: "states['yeasir'] >= 4",
        //         style: {
        //             backgroundColor: "green",
        //         },
        //     },
        // ],
      },
      {
        index: 10,
        parentIndex: 9,
        tag: "div",
        style: {
          border: "1px solid",
          weight: "100%",
          height: "100%",
          padding: "10px",
          display: "flex",
          backgroundColor: "red",
        },
        // conditionalStyles: [
        //     {
        //         condition: "states['yeasir'] < 4",
        //         style: {
        //             backgroundColor: "red",
        //         },
        //     },
        //     {
        //         condition: "states['yeasir'] >= 4",
        //         style: {
        //             backgroundColor: "green",
        //         },
        //     },
        // ],
      },
    ],
  },
];
