
// binary search in an iterative way

function binarySearch(arr, target){
  let left = 0;
  let right = arr.length-1;
  
  while(left <= right){
    let mid = Math.floor((right + left) / 2)
 
    if(arr[mid] === target){
      return mid;
    } else if(arr[mid] < target){
      left = mid + 1
    } else if(arr[mid] > target){
      right = mid - 1
    }
  }
  return -1;
}
// ===============================================================================

// binary search in a recursive way

function binarySearch(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) {
    return -1;
  }
  let mid = Math.floor((right + left) / 2);

  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] < target) {
    return binarySearch(arr, target, mid + 1, right);
  } else {
    return binarySearch(arr, target, left, mid - 1);
  }
}