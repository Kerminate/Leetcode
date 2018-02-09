/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */

function Interval (start, end) {
  this.start = start
  this.end = end
}

var merge = function (intervals) {
  const res = []
  if (intervals == null || intervals.length === 0) return res
  intervals.sort((a, b) => {
    if (a.start !== b.start) {
      return a.start - b.start
    } else {
      return a.end - b.end
    }
  })
  for (let i = 0; i < intervals.length - 1; i++) {
    if (intervals[i].end < intervals[i + 1].start) {
      res.push(intervals[i])
    } else {
      intervals[i + 1].start = intervals[i].start
      intervals[i + 1].end = Math.max(intervals[i].end, intervals[i + 1].end)
    }
  }
  res.push(intervals[intervals.length - 1])
  return res
}

const l1 = new Interval(1, 3)
const l2 = new Interval(2, 6)
const l3 = new Interval(8, 10)
const l4 = new Interval(15, 18)
let i1 = [l1, l2, l3, l4]
console.log(merge(i1))
