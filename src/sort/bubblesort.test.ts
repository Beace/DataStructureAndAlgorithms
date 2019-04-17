import BubbleSort from './bubblesort';

describe('BubbleSort', () => {
  it('empty array', () => {
    expect(BubbleSort([])).toEqual([]);
  });
  it('basic sort', () => {
    expect(BubbleSort([1, 3, 4, 1, 2])).toEqual([1, 1, 2, 3, 4]);
  });

  it('sort from big to small', () => {
    expect(BubbleSort([1, 3, 4, 1, 2], false)).toEqual([4, 3, 2, 1, 1]);
  });

  it('sort negative integer', () => {
    expect(BubbleSort([-1, 3, -4, 1, 2])).toEqual([-4, -1, 1, 2, 3]);
  });
});
