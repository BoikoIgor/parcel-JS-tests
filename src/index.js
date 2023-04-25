// function fizzBuzz(n) {
//   // Write your code here
//   for (let i = 1; i <= n; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log('FizzBuzz');
//     } else if (i % 3 === 0) {
//       console.log('Fizz');
//     } else if (i % 5 === 0) {
//       console.log('Buzz');
//     } else {
//       console.log(i);
//     }
//   }
// }
// fizzBuzz(15);
// let arr = [20, 4, 3, 1, 9];
// let arr = [4, 4, 5, 18, 1];
// let newArr = [];
// let k = 4;
// let sum = 0;
// let total = 0;
// function getMaximumScore(arr, k) {
//   let score = 0;

//   for (let i = 0; i < k; i++) {
//     let maxIndex = 0;

//     // find the index of the element with maximum value
//     for (let j = 1; j < arr.length; j++) {
//       if (arr[j] > arr[maxIndex]) {
//         maxIndex = j;
//       }
//     }

//     score += arr[maxIndex]; // add the maximum value to the score
//     arr[maxIndex] = Math.ceil(arr[maxIndex] / 3); // replace the element with the integer ceiling of one-third of its value
//   }

//   console.log(score);
// }

// getMaximumScore(arr, k);
// let a = [3, 3, 4, 7, 8];
// let d = 5;
// function getTripletCount(a, d) {
//   // Write your code here
//   let count = 0;
//   for (let i = 1; i <= a.length - 2; i++) {
//     for (let j = i + 1; j <= a.length - 1; j++) {
//       for (let k = j + 1; k <= a.length; k++) {
//         if ((a[i - 1] + a[j - 1] + a[k - 1]) % d === 0) {
//           count++;
//         }
//       }
//     }
//   }
//   console.log(count);
// }
// getTripletCount(a, d);

function getLatestKRequests(requests, K) {
  // Write your code here
  let indices = requests.map((_, index) => index);
  indices.sort((a, b) => b - a);
  return indices.slice(0, k).map(index => requests[index]);
}

let requests = ['11', '22', '33', '44', '55'];
let k = 3;
console.log(getLatestKRequests(requests, k));
