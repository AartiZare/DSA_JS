// Brute force
let arr = [101,5, 200, 3, 4,1,2];
function longestConsecutive(arr){
    let longest = 0;
    for(let i=0; i<arr.length; i++){
        let current = arr[i];
        let count = 1;
        while(arr.includes(current+1)){
            count++;
            current++;
        }
        longest = Math.max(longest, count);
    }
    return longest;
}
console.log(longestConsecutive(arr));

// Using sort
function longestConsecutiveUsingSort(arr){
    if(arr.length === 0)
        return 0;

    arr.sort((a,b) => a-b);
    
    let longest = 1;
    let count = 1;

    for(let i=0; i<arr.length; i++){
        if(arr[i] === arr[i-1]) continue;
        if(arr[i] === arr[i-1]+1){
            count++;
        }else{
            count = 1;
        }
        longest = Math.max(longest, count);
    }
    return longest;
}
console.log(longestConsecutiveUsingSort(arr));

// Optimal
function longestConsecutiveWithSet(arr){
    const set = new Set(arr);
    let longest = 0;
    for(let num of set){
        if(!set.has(num-1)){
            let current = num;
            let count = 1;
            while(set.has(current+1)){
                current++;
                count++;
            }
            longest = Math.max(count, longest);
        }
    }
    return longest;
}
console.log(longestConsecutiveWithSet(arr));