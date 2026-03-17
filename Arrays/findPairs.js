// 1. Brute Force
let arr = [1,2,3, -2,4,5,-3];
function findPair(arr, target){
    let result = [];
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i]+arr[j] === target){
                result.push([arr[i], arr[j]]);
            }
        }
    }
    return result;
}
console.log(findPair(arr, 4));

// 2.Using HashMap
function findPairs(arr, target){
    let seen = new Map();
    let result = [];
    for(let num of arr){
        let complement = target - num;
        if(seen.get(complement) > 0){
            result.push([complement, num]);
            seen.set(complement, seen.get(complement) - 1);
        } else {
            seen.set(num, (seen.get(num) || 0) + 1);
        }
    }
    return result;
}
console.log(findPairs([1,5,7,-1,5], 6));