/**
 * Definition for a point.
 * function Point(x, y) {
 *     this.x = x;
 *     this.y = y;
 * }
 */
/**
 * @param {Point[]} points
 * @return {number}
 */
var maxPoints = function (points) {
  const len = points.length
  let globalMax = 0
  for (let i = 0; i < len; i++) {
    let map = new Map()
    let pox = points[i].x
    let poy = points[i].y
    let duplicate = 1
    let localMax = 0
    for (let j = 0; j < len; j++) {
      if (i === j) continue
      if (pox === points[j].x && poy === points[j].y) duplicate++
      else if (pox === points[j].x) {
        if (map.has(Number.MAX_VALUE)) map.set(Number.MAX_VALUE, map.get(Number.MAX_VALUE) + 1)
        else map.set(Number.MAX_VALUE, 1)
        localMax = Math.max(localMax, map.get(Number.MAX_VALUE))
      } else if (poy === points[j].y) {
        if (map.has(0)) map.set(0, map.get(0) + 1)
        else map.set(0, 1)
        localMax = Math.max(localMax, map.get(0))
      } else {
        let flag = 0
        let y1 = poy - points[j].y
        let x1 = pox - points[j].x
        if (y1 * x1 < 0) flag = 1
        y1 = Math.abs(y1)
        x1 = Math.abs(x1)
        let factor = gcd(y1, x1)
        let k = y1 / factor
        let b = x1 / factor
        let str = k + '/' + b
        if (flag) str = '-' + str
        if (map.has(str)) map.set(str, map.get(str) + 1)
        else map.set(str, 1)
        localMax = Math.max(localMax, map.get(str))
      }
    }
    globalMax = Math.max(globalMax, localMax + duplicate)
  }
  return globalMax

  function gcd (a, b) {
    if (b === 0) return a
    else return gcd(b, a % b)
  }
}

let points = [
  {
    x: 0,
    y: 0
  },
  {
    x: -1,
    y: -1
  },
  {
    x: 2,
    y: 2
  }
]

console.log(maxPoints(points))
