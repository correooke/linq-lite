const grouping = (objects, criterias, criteriaIndex) => {
    const reduceFunc = (acc, item, i) => {
      const criteria = criterias[criteriaIndex];
      const fieldName = item[criteria];
      const groupedArray = acc[fieldName] ? acc[fieldName] : [];
      
      // Se genera un nuevo array con el elemento dentro del grupo correspondiente
      const obj = {[fieldName]: [...groupedArray, item ] }; 
      const r = {...acc, ...obj };
      
      return r;
    }
    
    return objects.reduce(reduceFunc, {});
  }

  export default grouping;
  