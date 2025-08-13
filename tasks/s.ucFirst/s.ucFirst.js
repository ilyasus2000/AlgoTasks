function ucFirst(s) {
  if (!s) return s

  let arr = s.split('')
  arr[0] = arr[0].toUpperCase()
  return arr.join('')
}

module.exports = ucFirst
