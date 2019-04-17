/**
 * BubbleSort
 * sort integer by order
 * @param {number[]} array source array
 * @param {Boolean} [ordered=true]
 * @returns {number[]} ordered number
 */
const bubblesort = (array: number[], ordered: Boolean = true): number[] => {
  const arr = [...array];
  let isSwapped: Boolean = false;

  for (let i = 1; i < arr.length; i++) {
    isSwapped = false;

    for (let j = 0; j < arr.length - i; j++) {
      if (ordered ? arr[j] > arr[j + 1] : arr[j] < arr[j + 1]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
        isSwapped = true;
      }
    }

    if (!isSwapped) return arr;
  }

  return arr;
};

export default bubblesort;
