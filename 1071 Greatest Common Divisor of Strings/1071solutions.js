/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */

// 不是最长公共子序列问题，不要复杂化
// let gcdOfStrings = function(str1, str2) {
//   // 长度一致
//   if (str1.length === str2.length) {
//     if (str1 !== str2) {
//       return ''
//     } else {}
//     return str1
//   }
//
//   // 不等长
//   let gcd = str1.length < str2.length ? str1 : str2
//   while (gcd) {
//     let reg = new RegExp(`^(${gcd})*$`)
//     if (reg.test(str1) && reg.test(str2)) {
//       return gcd
//     }
//     gcd = gcd.slice(0, -1)
//   }
//
//   return ''
// };


// 高效算法：欧几里德算法
let gcdOfStrings = function(str1, str2) {
  // 验证结构是否相同，例如ABCABC + ABC
  if (str1 + str2 !== str2 + str1) return ''

  // 欧几里德算法（辗转相除法求最大公约数）
  // 递归方式
  // const gcd = (a, b) => b === 0 ? a : gcd(b, a % b)
  // 非递归
  const gcd = function(a, b) {
    while (b !== 0) {
      let temp = b
      b = a % b
      a = temp
    }
    return a
  }

  // 从任一字符串截取该长度即可
  const len =  gcd(str1.length, str2.length)
  return str1.slice(0, len)
}


let str1 = 'ABABAB'
let str2 = 'ABAB'
console.log(gcdOfStrings(str1, str2));
