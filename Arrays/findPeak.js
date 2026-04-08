let arr = [1,2,1,3,5,6,4];
function findPeak(arr){
    let left = 0;
    let right = arr.length-1;
    while(left < right){
        let mid = Math.floor((left+right)/2);
        if(arr[mid] < arr[mid+1]){
            left = mid + 1;
        }else{
            right = mid;
        }
    }
    return left;
}
console.log(findPeak(arr))