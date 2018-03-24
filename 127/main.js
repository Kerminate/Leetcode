/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  let len = wordList.length
  const map = new Map()
  map.set(beginWord, [])
  for (let i = 0; i < len; i++) {
    map.set(wordList[i], [])
    if (judge(beginWord, wordList[i]) === 1) {
      map.get(beginWord).push(wordList[i])
    }
  }
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (i === j) continue
      if (judge(wordList[i], wordList[j]) === 1) {
        map.get(wordList[i]).push(wordList[j])
        map.get(wordList[j]).push(wordList[i])
      }
    }
  }
  let set = new Set()
  let arr = []
  let step = 1
  set.add(beginWord)
  arr.push(beginWord)
  let num = arr.length
  while (num !== 0) {
    let size = arr.length
    for (let i = 0; i < size; i++) {
      let cur = arr.shift()
      if (cur === endWord) return step
      let list = map.get(cur)
      for (let j = 0; j < list.length; j++) {
        if (!set.has(list[j])) {
          set.add(list[j])
          arr.push(list[j])
        }
      }
    }
    step++
    num = arr.length
  }
  return 0

  function judge (str1, str2) {
    let num = 0
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) num++
    }
    return num
  }
}

console.log(ladderLength('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']))
// console.log(ladderLength('a', 'c', ['a', 'b', 'c']))
