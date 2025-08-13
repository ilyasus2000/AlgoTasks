const reverse = require('./s.reverse')

test('String is reversed', () => {
  expect(reverse('Hello')).toBe('olleH')
  expect(reverse('Ilyas')).toBe('saylI')
  expect(reverse('Robot')).toBe('toboR')
  expect(reverse('Evil')).toBe('livE')
})
