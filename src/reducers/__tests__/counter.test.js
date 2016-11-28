import { addToCounter } from '../counter';

jest.mock('../../constants/IdeasConstants');

test('can add values to counter', () => {
  expect(addToCounter(1, 2)).toBe(3);
  expect(addToCounter(3, 6)).toBe(9);
});

test('cannot exceed IDEAS_COUNT', () => {
  expect(addToCounter(1, 10)).toBe(9);
});
