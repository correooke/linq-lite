import { isFunc } from './../validations';

const selectFunc = (groupBy, select, result) => (nodes, arr) => {
    const [skipCero, ...validNodes] = nodes;
    const pos = selColumn => groupBy.indexOf(selColumn);
    const objNode = select.reduce((a, c, i) => (
      !isFunc(c) ? 
      { ...a, [groupBy[pos(c)]]: validNodes[pos(c)]} : 
      { ...a, [c().colName()]: c().exec(arr)}
    ), {});
    result.push(objNode);
  };

  export default selectFunc;