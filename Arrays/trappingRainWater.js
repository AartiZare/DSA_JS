// 1. Brute force
let height = [0,1,0,2,1,0,1,3,2,1,2,1];
function trap(heights){
    let n = heights.length;
    let water = 0;
    for(let i=0; i<n; i++){
        let leftMax = 0, rightMax = 0;
        for(let j=0; j<=i; j++){
            leftMax = Math.max(leftMax, heights[j]);
        }
        for(let j=i; j<n; j++){
            rightMax = Math.max(rightMax, heights[j]);
        }
        water += Math.min(leftMax, rightMax) - heights[i];
    }
    return water;
}
console.log(trap(height));

// 2. Optimal Two Pointer
function trapNew(height) {
    let left = 0, right = height.length - 1;
    let leftMax = 0, rightMax = 0;
    let water = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                water += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                water += rightMax - height[right];
            }
            right--;
        }
    }

    return water;
}
console.log(trapNew(height));