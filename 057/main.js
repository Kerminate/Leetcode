/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */

function Interval (start, end) {
  this.start = start
  this.end = end
}

var insert = function (intervals, newInterval) {
  const res = []
  if (intervals == null || intervals.length === 0) {
    res.push(newInterval)
    return res
  }
  const arr = []
  let flag = 1
  for (let i = 0; i < intervals.length; i++) {
    if (flag && intervals[i].start > newInterval.start) {
      arr.push(newInterval)
      flag = 0
    }
    arr.push(intervals[i])
  }
  if (flag) arr.push(newInterval)
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i].end < arr[i + 1].start) {
      res.push(arr[i])
    } else {
      arr[i + 1].start = arr[i].start
      arr[i + 1].end = Math.max(arr[i].end, arr[i + 1].end)
    }
  }
  res.push(arr[arr.length - 1])
  return res
}

const l1 = new Interval(1, 3)
const l2 = new Interval(6, 9)
// const l3 = new Interval(6, 7)
// const l4 = new Interval(8, 10)
// const l5 = new Interval(12, 16)
const newl = new Interval(2, 5)
let i1 = [l1, l2]
console.log(insert(i1, newl))
