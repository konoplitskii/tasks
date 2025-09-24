
/**
 * 📝 Задача:
 * Напиши функцию isPalindrome, которая принимает строку или число
 * и возвращает true, если значение является палиндромом, и false — иначе.
 * 
 * Палиндром — это последовательность, которая читается одинаково
 * слева направо и справа налево.
 * 
 * Примеры:
 * 
 * isPalindrome("madam"); // true
 * isPalindrome("hello"); // false
 * isPalindrome(12321);   // true
 * isPalindrome(12345);   // false
 */

function isPalindrome(input) {
    const str = String(input).replace(/[^a-z0-9]/gi, '').toLowerCase();
    let left = 0;
    let right  = str.length - 1;


    while(left < right) {
      if(str[left] !== str[right]) {
        return false
      }

      left ++
      right --
    }
    return true;
}

console.log(isPalindrome("mad am")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome(12321));   // true
console.log(isPalindrome(12345));   // false


      