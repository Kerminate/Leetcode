/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const rom = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }
  let sum = 0
  for (let i = 0; i < s.length - 1; i++) {
    if (rom[s[i]] < rom[s[i + 1]]) {
      sum -= rom[s[i]]
    } else {
      sum += rom[s[i]]
    }
  }
  sum += rom[s[s.length - 1]]
  return sum
}

console.log(romanToInt('XCIX'))
console.log(romanToInt('X'))
