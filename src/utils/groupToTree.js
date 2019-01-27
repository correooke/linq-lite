import groupLevel from './groupLevel';

const groupToTree = (objects, criterias) => {
    let level = { cero: objects };
    let i = 0;
    do {
      level = groupLevel(level, "cero", criterias, i, i);
      i++;
    } while (i < criterias.length);
    return level;
  }

  export default groupToTree;