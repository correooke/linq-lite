import grouping from './grouping';

const groupLevel = (grouped, key, criterias, criteriaIndex, nestedLevel) => {
    if (nestedLevel === 0) {
      const groupingResult = grouping(grouped[key], criterias, criteriaIndex);
      return { ...grouped, [key]: groupingResult };
    }
    const groupRes = (Object.entries(grouped[key]).reduce((acc, item) => {
      const [keyInner, value] = item;
      const deepGroupLevel = groupLevel(acc, keyInner, criterias, criteriaIndex, nestedLevel - 1);
      return {...acc, ...deepGroupLevel};
    }, grouped[key]));
    
    return {...grouped, [key]: { ...grouped[key], ...groupRes }};
  }
  
  export default groupLevel;