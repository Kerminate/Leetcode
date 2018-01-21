/**
 * @param {character[][]} board
 * @return {boolean}
 */

// 解法一 (用到了js的indexOf)
// var isValidSudoku = function (board) {
//   for (let i = 0; i < 9; i++) {
//     let arr = board[i].slice(0)
//     for (let j = 0; j < 9; j++) {
//       if (arr[j] !== '.' && arr.indexOf(arr[j]) !== j) return false
//     }
//   }
//   for (let i = 0; i < 9; i++) {
//     let arr = []
//     for (let j = 0; j < 9; j++) {
//       arr.push(board[j][i])
//     }
//     for (let j = 0; j < 9; j++) {
//       if (arr[j] !== '.' && arr.indexOf(arr[j]) !== j) return false
//     }
//   }
//   for (let i = 0; i < 9; i++) {
//     let arr = []
//     let row = Math.floor(i / 3)
//     let col = i % 3
//     for (let j = 0; j < 3; j++) {
//       for (let k = 0; k < 3; k++) {
//         arr.push(board[row * 3 + j][col * 3 + k])
//       }
//     }
//     for (let j = 0; j < 9; j++) {
//       if (arr[j] !== '.' && arr.indexOf(arr[j]) !== j) return false
//     }
//   }
//   return true
// }

// 解法二 (不用js自带的函数)
var isValidSudoku = function (board) {
  for (let i = 0; i < 9; i++) {
    let arr = Array.from({length: 9}).map(() => false)
    for (let j = 0; j < 9; j++) {
      if (board[i][j] !== '.') {
        if (arr[board[i][j] - 1] === false) {
          arr[board[i][j] - 1] = true
        } else {
          return false
        }
      }
    }
  }
  for (let i = 0; i < 9; i++) {
    let arr = Array.from({length: 9}).map(() => false)
    for (let j = 0; j < 9; j++) {
      if (board[j][i] !== '.') {
        if (arr[board[j][i] - 1] === false) {
          arr[board[j][i] - 1] = true
        } else {
          return false
        }
      }
    }
  }
  for (let i = 0; i < 9; i++) {
    let row = Math.floor(i / 3)
    let col = i % 3
    let arr = Array.from({length: 9}).map(() => false)
    for (let j = 0; j < 3; j++) {
      for (let k = 0; k < 3; k++) {
        if (board[row * 3 + j][col * 3 + k] !== '.') {
          if (arr[board[row * 3 + j][col * 3 + k] - 1] === false) {
            arr[board[row * 3 + j][col * 3 + k] - 1] = true
          } else {
            return false
          }
        }
      }
    }
  }
  return true
}

// console.log(isValidSudoku([['.','.','4','.','.','.','6','3','.'],['.','.','.','.','.','.','.','.','.'],['5','.','.','.','.','.','.','9','.'],['.','.','.','5','6','.','.','.','.'],['4','.','3','.','.','.','.','.','1'],['.','.','.','7','.','.','.','.','.'],['.','.','.','5','.','.','.','.','.'],['.','.','.','.','.','.','.','.','.'],['.','.','.','.','.','.','.','.','.']]))
// console.log(isValidSudoku([[".","8","7","6","5","4","3","2","1"],["2",".",".",".",".",".",".",".","."],["3",".",".",".",".",".",".",".","."],["4",".",".",".",".",".",".",".","."],["5",".",".",".",".",".",".",".","."],["6",".",".",".",".",".",".",".","."],["7",".",".",".",".",".",".",".","."],["8",".",".",".",".",".",".",".","."],["9",".",".",".",".",".",".",".","."]]))
