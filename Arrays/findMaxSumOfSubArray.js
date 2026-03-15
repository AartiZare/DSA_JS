let arr = [1,-2,3,4,-5,9,8];
function findMaxSumOfSubArray(arr){
    let currentSum = 0;
    let maxSum = -Infinity;
    for(let i=0; i<arr.length; i++){
        currentSum = currentSum+arr[i];
        if(currentSum > maxSum){
            maxSum = currentSum;
        }
        if(currentSum < 0){
            currentSum = 0;
        }
    }
    return maxSum;
}
console.log(findMaxSumOfSubArray(arr));

// Cleaner Version
function maxSubArray(arr){
    let currentSum = arr[0];
    let maxSum = arr[0];
    for(let i=0; i<arr.length; i++){
        currentSum = Math.max(arr[i], currentSum+arr[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}
console.log(maxSubArray(arr))