const fn = require('./primitive');

//let num = 1;

beforeEach(() => {
  num = 1;
});

test('1+1 === 1', () => {
  num = fn.sum(num, 1);
  expect(num).toBe(2);
});
test('1+2 === 3', () => {
  num = fn.sum(num, 2);
  expect(num).toBe(3);
});
test('1+3 === 4', () => {
  num = fn.sum(num, 3);
  expect(num).toBe(4);
});

test('객체 생성', () => {
  expect(fn.makeObj('베인', '구르기')).toEqual({
    name: '베인',
    skill: '구르기',
  });
});

test('falsy한가', () => {
  expect(fn.sum(1, -1)).toBeFalsy();
});

//text('받은 아이디의 길이가 8자리 이하인가', () => {
//  const str = 'rlaxodh';
//  expect(fn.getIdLength(str)).toBeLessThanOrEqual(8);
//});
