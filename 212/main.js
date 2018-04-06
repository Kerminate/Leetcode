/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
  const row = board.length
  const col = board[0].length
  let root = buildTrie(words)
  let res = []
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      dfs(board, i, j, root)
    }
  }
  return res

  function TrieNode () {
    this.next = Array.from({length: 26}).map(() => null)
    this.word = null
  }

  function buildTrie (str) {
    let root = new TrieNode()
    for (let word of str) {
      let p = root
      for (let letter of word) {
        let i = letter.charCodeAt() - 'a'.charCodeAt()
        if (p.next[i] == null) p.next[i] = new TrieNode()
        p = p.next[i]
      }
      p.word = word
    }
    return root
  }

  function dfs (board, i, j, p) {
    if (i < 0 || i >= row || j < 0 || j >= col) return
    let c = board[i][j]
    let code = c.charCodeAt() - 'a'.charCodeAt()
    if (c === '#' || p.next[code] == null) return
    p = p.next[code]
    if (p.word != null) {
      res.push(p.word)
      p.word = null
    }
    board[i][j] = '#'
    dfs(board, i - 1, j, p)
    dfs(board, i + 1, j, p)
    dfs(board, i, j - 1, p)
    dfs(board, i, j + 1, p)
    board[i][j] = c
  }
}

console.log(findWords([
  ['o', 'a', 'a', 'n'],
  ['e', 't', 'a', 'e'],
  ['i', 'h', 'k', 'r'],
  ['i', 'f', 'l', 'v']
], ['oath', 'pea', 'eat', 'rain']))
