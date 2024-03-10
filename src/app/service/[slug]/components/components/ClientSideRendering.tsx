"use client";

import dynamic from "next/dynamic";
import { useEffect } from "react";

import jsonToFunction from "./jsToFnc";
import GetState from "./mngState";
const primaryColor = "#f3f3f3";
type Obj = {
  [key: string]: any;
};
type ClientSideRenderringProps = {
  Element: Obj[];
  data: object;
  page: Obj;
};
export default function ClientSideRenderring({
  Element,
  data,
  page,
}: ClientSideRenderringProps) {
  const parentDiv = Element.filter((el) => el.parentIndex === undefined).sort(
    (a, b) => a.index - b.index
  );
  const childDiv = Element.filter((el) => el.parentIndex).sort(
    (a, b) => a.index - b.index
  );
  console.log(page?.states);
  // !state management
  const [state, setStateValue] = GetState(page?.states);

  // !Functions management
  const functionMap: { [key: string]: () => void } = {};
  page?.functions?.forEach((func) => {
    const wrappedFunction = jsonToFunction(func, "func");
    functionMap[func.name] = wrappedFunction;
  });

  //? call functions by function name
  function callFunction(name: string) {
    functionMap[name]();
  }

  //! hooks to run on page load
  page?.hooks?.forEach(
    (hook: { name: string; dependencies: Array<T>; hook: string }) => {
      if (hook.name === "useEffect") {
        const dependencyArray: any[] = [];
        hook.dependencies.forEach((dependency: string) => {
          dependencyArray.push(state[dependency]);
        });
        useEffect(() => {
          const hookFn = jsonToFunction(hook, "hook");
          hookFn();
        }, [dependencyArray]);
      }
    }
  );

  return (
    <div className="relative">
      {parentDiv.map((pd, i) => {
        // define parent tag
        const ParentTag = pd.tag;

        //! Function to execute the onClickFunction from JSON
        const executeOnClickFunction = () => {
          const { onClick } = pd;
          eval(`(${onClick})()`);
        };
        let selectedStyle = {};
        //!Conditional Styling
        if (pd.conditionalStyles) {
          pd.conditionalStyles.forEach((conditionalStyle) => {
            if (eval(conditionalStyle.condition)) {
              console.log("condition true");
              selectedStyle = {
                ...selectedStyle,
                ...conditionalStyle.style,
              };
            }
          });
        }
        //! condition rendering
        if (pd.conditionalRender) {
          let conditionMet = false;

          pd.conditionalRender.forEach((condition) => {
            if (condition.operator === "OR") {
              conditionMet = conditionMet || eval(condition.expression);
            } else if (condition.operator === "AND") {
              conditionMet = conditionMet && eval(condition.expression);
            } else if (condition.operator === "NOT") {
              conditionMet = !conditionMet && eval(condition.expression);
            } else if (condition.operator === "NOR") {
              conditionMet = !conditionMet || eval(condition.expression);
            } else {
              conditionMet = eval(condition.expression);
            }
          });
          if (conditionMet) {
            return pd.tag === "img" ? (
              <img
                key={i}
                src="https://media.istockphoto.com/id/1419410282/photo/silent-forest-in-spring-with-beautiful-bright-sun-rays.jpg?s=2048x2048&w=is&k=20&c=t9_zg20wVbrBoGn0tw__1fFq4ykeKs15TQQ3x-ehVC0="
                style={{ ...pd.style, ...selectedStyle }}
              />
            ) : (
              <ParentTag
                key={i}
                style={{ ...pd.style, ...selectedStyle }}
                onClick={pd.onClick && executeOnClickFunction}>
                {/* parent - {pd.index} */}
                {pd.dataProperty && state[pd.dataProperty]}
                {childDiv.map((cd, i) => {
                  // define child tag

                  const ChildTag = cd.tag;

                  let selectedStyleCd = {};
                  //!Conditional Styling
                  if (cd.conditionalStyles) {
                    cd.conditionalStyles.forEach((conditionalStyle) => {
                      if (eval(conditionalStyle.condition)) {
                        console.log("condition true children");
                        selectedStyleCd = {
                          ...selectedStyleCd,
                          ...conditionalStyle.style,
                        };
                      }
                    });
                  }
                  // dynamic import component and checking if component exists or not
                  const ChildComponent = dynamic(
                    () =>
                      import(`./${cd.component}.js`).catch(() => {
                        return {
                          default: <div>Hello world!</div>,
                        };
                      }),
                    {
                      loading: () => (
                        <p className="p-4 text-center">Loading...</p>
                      ),
                      suspense: cd.suspense,
                      ssr: false,
                    }
                  );

                  if (cd.parentIndex === pd.index)
                    return (
                      <ChildTag
                        key={i}
                        style={{ ...cd.style, ...selectedStyleCd }}>
                        {cd.component ? (
                          <ChildComponent />
                        ) : (
                          <span style={{}}>
                            {/* Child of parent - {cd.parentIndex}, Child index -{" "}
                                                        {cd.index} */}
                          </span>
                        )}
                      </ChildTag>
                    );
                })}
              </ParentTag>
            );
          }
        } else {
          return pd.tag === "img" ? (
            <img
              key={i}
              src="https://media.istockphoto.com/id/1419410282/photo/silent-forest-in-spring-with-beautiful-bright-sun-rays.jpg?s=2048x2048&w=is&k=20&c=t9_zg20wVbrBoGn0tw__1fFq4ykeKs15TQQ3x-ehVC0="
              style={{ ...pd.style, ...selectedStyle }}
            />
          ) : (
            <ParentTag
              key={i}
              style={{ ...pd.style, ...selectedStyle }}
              onClick={pd.onClick && executeOnClickFunction}>
              {/* parent - {pd.index} */}
              {pd.dataProperty && state[pd.dataProperty]}
              {childDiv.map((cd, i) => {
                // define child tag

                const ChildTag = cd.tag;

                let selectedStyleCd = {};
                //!Conditional Styling
                if (cd.conditionalStyles) {
                  cd.conditionalStyles.forEach((conditionalStyle) => {
                    if (eval(conditionalStyle.condition)) {
                      console.log("condition true");
                      selectedStyleCd = {
                        ...selectedStyleCd,
                        ...conditionalStyle.style,
                      };
                    }
                  });
                }
                // dynamic import component and checking if component exists or not

                const ChildComponent = dynamic(
                  () =>
                    import(`./${cd.component}.js`).catch(() => {
                      return {
                        default: <div>Hello world!</div>,
                      };
                    }),
                  {
                    loading: () => (
                      <p className="p-4 text-center">Loading...</p>
                    ),

                    suspense: cd.suspense,

                    ssr: false,
                  }
                );

                if (cd.parentIndex === pd.index)
                  return (
                    <ChildTag
                      key={i}
                      style={{ ...cd.style, ...selectedStyleCd }}>
                      {cd.component ? (
                        <ChildComponent />
                      ) : (
                        <span style={{}}>
                          {/* Child of parent - {cd.parentIndex}, Child index -{" "}
                                                    {cd.index} */}
                        </span>
                      )}
                    </ChildTag>
                  );
              })}
            </ParentTag>
          );
        }
      })}
    </div>
  );
}
