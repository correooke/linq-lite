import { groupToTree, selectFunc, walker } from './utils';

const linq = ({ from, groupBy, select }) => {
  const r = [];
  const tree = groupToTree(from, groupBy);
  walker(tree, selectFunc(groupBy, select, r));
  
  return r;
}

export default linq;
