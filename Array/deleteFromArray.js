let arr = [1, 2, 3, 4, 5];
let pos = 2;

// output arr = [1,2,4,5]

for (let i = pos; i < arr.length - 1; i++) {
  arr[i] = arr[i + 1];
  // if(i == arr.length) arr.pop()
}

arr.length = arr.length - 1;

console.log(arr);
