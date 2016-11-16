const diff = require('../src/diff');

test('diff(a,b) should be a-b', () => {
  expect(diff(3, 1)).toBe(2);
});
