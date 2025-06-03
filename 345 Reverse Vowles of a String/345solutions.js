/**
 * @param {string} s
 * @return {string}
 */
let reverseVowels = function(s) {
  const regExp = /[aeiou]/i
  const map = new Map()

  for (let i = s.length - 1; i > -1; i--) {
    if (regExp.test(s[i])) map.set(i, s[i])
  }
  // output(with g) : Map(3) { 1 => 'e', 5 => 'o', 7 => 'e' }
  // output(without g) : Map(4) { 7 => 'e', 5 => 'o', 2 => 'e', 1 => 'e' }

  const iterator = map.values()

  // let result = s;
  // for (let i = 0; i < s.length; i++) {
  //   if (map.has(i)) console.log(`Change ${result[i]} to ${iterator.next().value}`);
  // }
  //
  // for (let i = 0; i < s.length; i++) {
  //   console.log(s[i], 'replace = ', map.has(i));
  // }

  // 不能使用replace方法
  //  for (let i = 0; i < s.length; i++) {
  //   if (map.has(i)) result = result.replace(result[i], iterator.next().value)
  // }

  let result = ''
  for (let i = 0; i < s.length; i++) {
    result += map.has(i) ? iterator.next().value : s[i]
  }

  return result
};

const str = 'leetcode'
console.log(reverseVowels(str));


