function twoSum(nums, target) {
  const indexByValue = new Map()
  for (let i = 0; i < nums.length; i++) {
    const need = target - nums[i]
    if (indexByValue.has(need)) return [indexByValue.get(need), i]
    indexByValue.set(nums[i], i)
  }
  return null
}
module.exports = twoSum
