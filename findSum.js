const arr = [1, 2, 3, 4, 5];

// sum = 9

// Random
// Easy
function findPairWithSum(arr, sum) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) {
        return true;
      }
    }
  }
  return false;
}

// If sorted
function findPairWithSumByGauß(arr, sum) {
  if (arr[0] > sum) {
    return false;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + arr[i + 1] === sum) {
      return true;
    }
  }
  return false;
}

// Random
// HashTable
function findPairWithSumByHash(arr, sum) {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    if (map[sum - arr[i]]) {
      return true;
    } else {
      map[arr[i].toString()] = arr[i];
    }
  }
  return false;
}

const res1 = findPairWithSum(arr, 9);
const res2 = findPairWithSumByGauß(arr, 9);
const res3 = findPairWithSumByHash(arr, 9);

console.log(res1, res2, res3);
