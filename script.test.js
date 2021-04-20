const myFunction = require('./script')

test('Test Case 1: Number between 1 and 3', () => {
  expect(myFunction(2)).toBe('Number is between 1 and 3')
})

test('Test Case 1: Number between 1 and 3', () => {
  expect(myFunction(4)).toBe('Number is between 4 and 6')
})

test('Test Case 1: Number between 1 and 3', () => {
  expect(myFunction(8)).toBe('Number is between 7 and 9')
})
