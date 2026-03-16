// 1. Brute force
let arr1 = [1, 8, 3];
let arr2 = [5, 4, 7, 6, 2];
let result = [...arr1, ...arr2].sort((a, b) => a - b);
console.log(result);

// 2. Append + Sort
function mergeArr(arr1, arr2) {
    let n = arr1.length;

    for (let i = 0; i < arr2.length; i++) {
        arr1[n + i] = arr2[i];
    }

    return arr1.sort((a, b) => a - b);
}
console.log(mergeArr(arr1, arr2));

// 3. Swap + Sort
let a1 = [1, 6, 4];
let a2 = [2, 5, 3]
function merge(arr1, arr2) {
    arr1 = [...arr1].sort((a, b) => a - b);
    arr2 = [...arr2].sort((a, b) => a - b);

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] > arr2[0]) {
            [arr1[i], arr2[0]] = [arr2[0], arr1[i]];
            arr2.sort((a, b) => a - b);
        }
    }

    return [...arr1, ...arr2];
}
console.log(merge(a1, a2));