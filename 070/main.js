var climbStairs = function (n) {
  let res = Array.from({length: n}).map(() => 0)
  res[1] = 1
  res[2] = 2
  for (let i = 3; i <= n; i++) {
    res[i] = res[i - 2] + res[i - 1]
  }
  return res[n]
}

console.log(climbStairs(2))
console.log(climbStairs(3))
