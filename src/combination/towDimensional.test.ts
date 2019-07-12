import twoDimensional from './twoDimensional';


describe('TwoDimensional', () => {
  const arr = [[1, 2], [3, 4], [5, 6]];
  const result = [
    [1, 3, 5],
    [1, 3, 6],
    [1, 4, 5],
    [1, 4, 6],
    [2, 3, 5],
    [2, 3, 6],
    [2, 4, 5],
    [2, 4, 6]
  ];
  const ret = twoDimensional(arr);
  it('success dimensional', () => {
    expect(ret).toEqual(result);
  });
});

