const twoSum = require('./solution')

test('finds indices that sum to target', () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1])
})

test('returns null if no pair', () => {
  expect(twoSum([1, 2, 3], 100)).toBeNull()
})
