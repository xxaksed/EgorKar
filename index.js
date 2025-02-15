//algo #1 
nums = [10, 22, 28, 29, 30, 40, 10, 23, 5, 7]

function findPairClosNum(array, target) {
    array.sort((a, b) => a - b);
    let left = 0;
    let right = array.length - 1;
    let closestSum = Infinity;
    let closestPair = [];
    while (left < right) {
        if (Math.abs(array[left] + array[right] - target) < Math.abs(closestSum - target)) {
            closestSum = array[left] + array[right];
            closestPair = [array[left], array[right]];
        }
        if (array[left] + array[right] < target) {
            left++;
        } else {
            right--;
        }
    }
    console.log(closestPair)
    console.log(closestSum)
}

findPairClosNum(nums, 54)

//algo #2 
s = "swiss"
function findPairClosNum(array) {
    let left = 0;
    let right = array.length - 1;
    while (left < right) {
        if (array[left] !== array[right]) {
            right--
        }
        else {
            left++
            right = array.length - 1;
        }
    }
    console.log(array[left])
}

findPairClosNum(s)

//algo #3 
s1 = "bottlewater"
s2 = "erbottlewat"

function isRotation(str1, str2) {
    const concatenated = str1 + str1;
    if (concatenated.includes(str2)) {
        console.log(true)
    }
    else {
        console.log(false)
    }
}
isRotation(s1, s2)