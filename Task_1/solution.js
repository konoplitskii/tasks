/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//my
var twoSum1 = function(nums, target) {
    const res = [];
    for (let i = 0; i < nums.length; i++) {
      for (let j = i +1; j < nums.length; j++) {
        if(nums[i] + nums[j] === target) {
          res.push(i, j)
        }
        
      }
    }

    return res;
};


//other

var twoSum = function(nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const compliment = target - nums[i];

        if(map.has(compliment)) {
          return [i, map.get(compliment)]
        } else {
          map.set(nums[i], i)
        }
    }
};



console.log('twoSum',twoSum([2,7,11,15], 9))

console.log('twoSum',twoSum([12,7,11,2], 9))

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
