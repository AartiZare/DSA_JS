// 1. Using new Set
let arr = [1,2,4,2,3,1,3,7];
function findDuplicates(arr){
    let seen = new Set();
    let duplicates = new Set();
    for(let num of arr){
        if(!seen.has(num)){
            seen.add(num);
        }else{
            duplicates.add(num);
        }
    }
    return [...duplicates];
}
console.log(findDuplicates(arr));

// 2. Using filter
let duplicatesUSingFilter = arr.filter((item, index) => arr.indexOf(item) !== index);
console.log(duplicatesUSingFilter);

// 3. Using Sorting
function usingSorting(arr){
    arr.sort((a,b) => a-b);
    let duplicates = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i] === arr[i-1]){
            duplicates.push(arr[i]);
        }
    }
    return duplicates;
}
console.log(usingSorting(arr));

// Using HashMap
function usingHashMap(arr){
    let map = {};
    let duplicates = [];
    for(let num of arr){
        map[num] = (map[num] || 0) + 1;
    }
    for(let key in map){
        if(map[key] > 1){
            duplicates.push(Number(key));
        }
    }
    return duplicates;
}
console.log(usingHashMap(arr));