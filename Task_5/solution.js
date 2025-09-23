/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let forwardArr = [];
    let start = 1;


    for (let i = 0; i < nums.length; i++) {
        forwardArr.push(start);
        start = start * nums[i];
    }


    const res = [];
    let start2 = 1;
    for (let j = nums.length - 1; j >= 0; j--) {
        res.unshift(forwardArr[j] * start2)
        start2 = start2 * nums[j]
    }

    return res;
};

console.log(productExceptSelf([1,2,3,4])) //[24,12,8,6]
// console.log(productExceptSelf([-1,1,0,-3,3])) //[0,0,9,0,0]