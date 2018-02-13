/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
  let list = []
  let fac = [1]
  let res = []
  for (let i = 0; i < n; i++) {
    list.push(i + 1)
  }
  k--
  for (let i = 1; i < n; i++) {
    let tmp = fac[i - 1] * i
    fac.push(tmp)
  }
  for (let i = n - 1; i >= 0; i--) {
    let num = Math.floor(k / fac[i])
    res.push(list[num])
    list.splice(num, 1)
    k = k % fac[i]
  }
  return res.join('')
}

console.log(getPermutation(4, 4))
