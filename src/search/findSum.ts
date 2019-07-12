/**
 * FindSum
 * find two items plus match the result(sum)
 * @class FindSum
 */
export default class FindSum {
  arr: number[];
  constructor(arr: number[]) {
    this.arr = arr;
  }

  /**
   * Random Source Array
   * Easy solution
   * @param {number} sum
   * @returns {Boolean}
   * @memberof FindSum
   */
  findPairWithSum(sum: number): Boolean {
    for (let i = 0; i < this.arr.length; i++) {
      for (let j = i + 1; j < this.arr.length; j++) {
        if (this.arr[i] + this.arr[j] === sum) {
          return true;
        }
      }
    }
    return false;
  }

  /**
   * findPairWithSumByGauß
   * If source array is sorted
   * @param {number} sum
   * @returns {Boolean}
   * @memberof FindSum
   */
  findPairWithSumByGauß(sum: number): Boolean {
    if (this.arr[0] > sum) {
      return false;
    }
    for (let i = 0; i < this.arr.length; i++) {
      if (this.arr[i] + this.arr[i + 1] === sum) {
        return true;
      }
    }
    return false;
  }

  /**
   * findPairWithSumByHash
   * Random HashTable
   * @param {number} sum
   * @returns {Boolean}
   * @memberof FindSum
   */
  findPairWithSumByHash(sum: number): Boolean {
    let map: any = {};
    for (let i = 0; i < this.arr.length; i++) {
      if (map[sum - this.arr[i]]) {
        return true;
      } else {
        map[this.arr[i].toString()] = this.arr[i];
      }
    }
    return false;
  }
}
