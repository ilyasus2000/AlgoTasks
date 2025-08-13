const lengthCalculator = require('./s.length')

test('Length is correct', () => {
  expect(lengthCalculator('Hello')).toBe(5)
  expect(lengthCalculator('Ilyas')).toBe(5)
  expect(lengthCalculator('ILOVEYOU')).toBe(8)
})
