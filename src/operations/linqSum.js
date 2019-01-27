const linqSum = (column, colName = null) => () => (
    {
      exec: array => array.reduce((sum, c) => (sum + c[column]), 0),
      colName: () => (colName ? colName : column),
  });

export default linqSum;