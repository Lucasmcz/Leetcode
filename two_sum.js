/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var a = nums.filter(Number.isInteger).length;
    let x = 0;
    let y = 0;
    for(i = 0;i <= a-1;i++){
       for(j = 0; j <= a-1;j++){
        if(nums[i] + nums[j] == target && i != j){
           return[i,j]
        }
       }
        }
    };
    
