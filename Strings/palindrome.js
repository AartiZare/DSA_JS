let str = "madam";
function checkPalindrome(str){
    let reversed = "";
    for(let i=str.length-1; i>=0; i--){
        reversed += str[i];
    }
    return str === reversed;
}
console.log(checkPalindrome(str));

function byTwoPointer(str){
    let left = 0;
    let right = str.length-1;
    while(left < right){
        if(str[left] !== str[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
}
console.log(byTwoPointer(str));