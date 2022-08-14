const fn = require('./async');

test('fetch data after 3sec', () => {
  expect(fn.fetchData(1)).resolves.toBe(1);
});
