const ucFirst = require('./s.ucFirst')

test('First letter is uppercase', () => {
  expect(ucFirst('hello')).toBe('Hello')
  expect(ucFirst('ilyas')).toBe('Ilyas')
})
