function twoSum(arr, target) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let comp = target - arr[i];
    if (obj[comp] !== undefined) {
      return [obj[comp], i];
    } else {
      obj[arr[i]] = i;
    }
  }
  // console.log(obj)
  return [-1];
}

console.log(twoSum([2, 7, 11, 15], 9));