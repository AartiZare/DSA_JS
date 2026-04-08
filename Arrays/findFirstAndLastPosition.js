let arr = [1,2,3,4,5,5,6,7,8];
function findFirstAnsLastPosition(arr, target){
   function findFirst(arr, target){
    let left = 0; 
    let right = arr.length-1;
    let ans = -1;
    while(left <= right){
      let mid = Math.floor((left+right)/2);
      if(arr[mid] === target){
          ans = mid;
          right = mid - 1;
      }else if(arr[mid] < target){
          left = mid + 1;
      }else{
          right = mid - 1;
      }
    }
       return ans;
   }
   function findLast(arr, target){
       let left = 0;
       let right = arr.length-1;
       let ans = -1;
       while(left <= right){
           let mid = Math.floor((left+right)/2);
           if(arr[mid] === target){
               ans = mid;
               left = mid + 1;
           }else if(arr[mid] < target){
               left = mid + 1;
           }else{
               right = mid - 1;
           }
       }
       return ans;
   }
   return [findFirst(arr, target), findLast(arr, target)];
}
console.log(findFirstAnsLastPosition(arr, 5));