/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(numsRoman) {
  const s = numsRoman.split('');
  
  const maping = {
    'I' : 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  }

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    if(s[i] === 'I' && (s[i + 1] === 'V' || s[i + 1] === 'X')) {
      result +=  maping[s[i + 1]] - 1
      s.splice(i + 1, 1)
    } else if(s[i] === 'X' && (s[i + 1] === 'L' || s[i + 1 ] === 'C')) {
      result +=  maping[s[i + 1]] - 10
       s.splice(i + 1, 1)
    } else if(s[i] === 'C' && (s[i + 1] === 'D' || s[i + 1 ] === 'M')) {
      result +=  maping[s[i + 1]] - 100
       s.splice(i + 1, 1)
    } else {
      result +=  maping[s[i]]
    }
  }
  return result;
    
};






console.log(romanToInt('III')); //3
console.log(romanToInt('LVIII')); //58
console.log(romanToInt('MCMXCIV')); //1994


// - **I** может стоять перед **V (5)** и **X (10)**, чтобы получить **4** и **9**.  
// - **X** может стоять перед **L (50)** и **C (100)**, чтобы получить **40** и **90**.  
// - **C** может стоять перед **D (500)** и **M (1000)**, чтобы получить **400** и **900**.



// Алгоритм

// 1. Пройти циклом всю строку
// 2. Если в переди I перед  V и  X то -1
// 3. Если в переди X перед  L и  C то -10
// 4. Если в переди C перед  D и  M то -100
// 5. Не учитывать при переборе цикла в следующем обходе