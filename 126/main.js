/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function (beginWord, endWord, wordList) {
  let wordSet = new Set(wordList)
  wordSet.add(beginWord)
  let dic = 'abcdefghijklmnopqrstuvwxyz'
  const map = new Map()
  for (let str of wordSet) {
    map.set(str, [])
    // 利用字典序遍历 使构建map从O(n^2)优化到O(n)
    diff(str)
  }
  let step = 1
  let set = new Set()
  let arr = []
  let deep = new Map()
  deep.set(beginWord, 0)
  set.add(beginWord)
  arr.push(beginWord)
  // 先通过bfs求得最短次数
  step = bfs()
  if (!step) return []
  let res = []
  arr = [endWord]
  set.clear()
  set.add(endWord)
  // 通过bfs得到的最短次数剪枝
  dfs(endWord, set, arr)
  return res

  function diff (str) {
    for (let i = 0; i < str.length; i++) {
      for (let j = 0; j < 26; j++) {
        if (dic[j] !== str[i]) {
          let mid = str.slice(0, i) + dic[j] + str.slice(i + 1)
          if (wordSet.has(mid)) {
            map.get(str).push(mid)
          }
        }
      }
    }
  }

  function bfs () {
    while (arr.length !== 0) {
      let tmp = arr.slice(0)
      for (let i = 0; i < tmp.length; i++) {
        let front = arr.shift()
        if (front === endWord) return step
        let list = map.get(front)
        for (let i = 0; i < list.length; i++) {
          if (!set.has(list[i])) {
            set.add(list[i])
            arr.push(list[i])
            // 记录最短路径节点
            deep.set(list[i], step)
          }
        }
      }
      step++
    }
    return 0
  }

  function dfs (obj, set, arr) {
    if (arr.length > step) return
    if (obj === beginWord) {
      let tmp = arr.slice(0).reverse()
      res.push(tmp)
    }
    let list = map.get(obj)
    for (let i = 0; i < list.length; i++) {
      // 判断节点是否为最短路径上的
      if (!set.has(list[i]) && deep.has(list[i]) && deep.get(list[i]) + arr.length < step) {
        set.add(list[i])
        arr.push(list[i])
        dfs(list[i], set, arr)
        set.delete(list[i])
        arr.pop()
      }
    }
  }
}

console.log(findLadders('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']))
console.log(findLadders('a', 'c', ['a', 'b', 'c']))
