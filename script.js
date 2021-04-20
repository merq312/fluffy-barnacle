const myFunction = (number) => {
  let output = ''

  if (number >= 1 && number <= 3) {
    output = 'Number is between 1 and 3'
  } else if (number >= 4 && number <= 6) {
    output = 'Number is between 4 and 6'
  } else if (number >= 7 && number <= 9) {
    output = 'Number is between 7 and 9'
  }

  return output
}

module.exports = myFunction
