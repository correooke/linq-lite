const walker = (grouped, addLine, lineAcc = []) => {
    debugger;
    if (Array.isArray(grouped))
      return addLine(lineAcc, grouped);
    
    const keys = Object.keys(grouped);
    
    return keys.forEach(k => {
      walker(grouped[k], addLine, [...lineAcc, k]);
    }, []);
  }

  export default walker;