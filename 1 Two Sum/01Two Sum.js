/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// let twoSum = function(nums, target) {
//   // 直观方法：用两层循环匹配，在最坏情况下为n平方
//   const result = []
//   for (let i = 0; i < nums.length - 1; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         result.push(i, j)
//       }
//     }
//   }
//   return result
// };


// 优化一：匹配到后直接结束循环
// let twoSum = function(nums, target) {
//   for (let i = 0; i < nums.length - 1; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i,j]
//       }
//     }
//   }
// };

// 优化二：使用哈希表：以数组的值为key，索引为value
let twoSum = function(nums, target) {
  const map = new Map()
  // 核心思想：遍历数组，如果当前元素和哈希表中的数相加等于target（即当前元素所需的“补数”是否已经存在于哈希表中）
  // 若有，返回当前元素的索引以及“补数”的索引
  // 否则，将当前元素存入哈希表
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]
    if (map.has(complement)) {
      return [map.get(complement), i]
    } else {
      map.set(nums[i], i)
    }
  }
};

let nums = [2, 7, 11, 17]
let target = 9

const re = twoSum(nums, target)
console.log(re)