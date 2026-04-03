let arr = [10, 15, 18, 20 ,25];
let target = 20;
function binarySearch(arr, target){
    let left = 0;
    let right = arr.length-1;
    while(left <= right){
        let mid = Math.floor((left+right)/2);
        if(arr[mid] === target){
            return mid;
        }else if(arr[mid] > target){
            right = mid - 1;
        }else{
            left = mid + 1;
        }
    }
    return -1;
}
console.log(binarySearch(arr, target));