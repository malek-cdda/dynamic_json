const jsonToFunction = (json, name) => {
  const j = JSON.stringify(json);
  const fs = JSON.parse(j);
  const declareF = fs[name];
  const fcn = eval(`(${declareF})`);
  return fcn;
};
export default jsonToFunction;
