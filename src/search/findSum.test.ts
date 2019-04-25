import FindSum from './findSum';


describe('FindSum', () => {
  const sourceArray = [1,2,3,4,5,6];
  const SUM = 9;
  const SUM_BIGGER = 19;
  const findSum = new FindSum(sourceArray);
  it('basic random', () => {
    expect(findSum.findPairWithSum(SUM)).toBe(true);
    expect(findSum.findPairWithSumByGauß(SUM)).toBe(true);
    expect(findSum.findPairWithSumByHash(SUM)).toBe(true);
  });

  it('do not match the sum', () => {
    expect(findSum.findPairWithSum(SUM_BIGGER)).toBe(false);
    expect(findSum.findPairWithSumByGauß(SUM_BIGGER)).toBe(false);
    expect(findSum.findPairWithSumByHash(SUM_BIGGER)).toBe(false);
  });
});
