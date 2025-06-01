/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
let mergeAlternately = function(word1, word2) {
  let minLength = word1.length < word2.length ? word1.length : word2.length

  let result = ''
  for (let i = 0; i < minLength; i++) {
    result += (word1[i]+word2[i])
  }

  // 不要在循环里写这段
  word1 = word1.slice(minLength)
  word2 = word2.slice(minLength)

  result += word1
  result += word2

  return result
};

str1 = 'abc'
str2 = 'defghij'

console.log(mergeAlternately(str1, str2));