// 1. Simple left rotation
let arr = [1,2,3,4,5];
function leftRotation(arr){
    let copy = arr[0];
    for(let i=0; i<arr.length; i++){
        arr[i] = arr[i+1];
    }
    arr[arr.length-1] = copy;
    return arr;
}
console.log(leftRotation(arr));

// 2. Left rotation by K
function rotate(arr, k){
    let n = arr.length;
    k = k%n;
    function reverse(start, end){
        [arr[start], arr[end]] = [arr[end], arr[start]];
    }
    reverse(0, n-1);
    reverse(0, k-1);
    reverse(k, n-1)
}

rotate(arr, 2);
console.log(arr);