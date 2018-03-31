/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.list = []
  this.map = new Map()
  this.length = capacity
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.map.has(key)) {
    let val = this.map.get(key)
    let index = this.list.indexOf(key)
    this.list.splice(index, 1)
    this.list.unshift(key)
    return val
  } else return -1
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.map.has(key)) {
    this.map.set(key, value)
    let index = this.list.indexOf(key)
    this.list.splice(index, 1)
    this.list.unshift(key)
  } else {
    if (this.list.length < this.length) {
      this.list.unshift(key)
      this.map.set(key, value)
    } else {
      let target = this.list.pop()
      this.map.delete(target)
      this.map.set(key, value)
      this.list.unshift(key)
    }
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = Object.create(LRUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

let cache = new LRUCache(2)

// console.log(cache)
cache.put(1, 1)
// console.log(cache)
cache.put(2, 2)
// console.log(cache)
console.log(cache.get(1))       // returns 1
// console.log(cache)
cache.put(3, 3)    // evicts key 2
console.log(cache.get(2))       // returns -1 (not found)
cache.put(4, 4)    // evicts key 1
console.log(cache.get(1))       // returns -1 (not found)
console.log(cache.get(3))       // returns 3
console.log(cache.get(4))       // returns 4
