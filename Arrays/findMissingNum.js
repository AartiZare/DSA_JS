let arr = [1,2,3,4,5,7];
function findMissingNum(arr){
    let n = arr.length+1;
    let expectedSum = (n*(n+1))/2;
    let actualSum = 0;
    for(let num of arr){
        actualSum = actualSum + num;
    }
    return expectedSum - actualSum;
}
console.log(findMissingNum(arr))