let arr = [1,2,3,4];
function plusOne(arr){
    for(let i=arr.length-1; i>=0; i--){
        if(arr[i] < 9){
            arr[i]++;
            return arr;
        }
        arr[i] = 0;
    }
    arr.unshift(1);
    return arr;
}
console.log(plusOne(arr))