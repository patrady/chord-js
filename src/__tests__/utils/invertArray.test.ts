import { invertArray } from '../../utils';

describe('invertArray', () => {
  const arr = [1, 2, 3, 4, 5];

  it('inverts the order', () => {
    expect(invertArray(arr, 0)).toEqual([1, 2, 3, 4, 5]);
    expect(invertArray(arr, 1)).toEqual([2, 3, 4, 5, 1]);
    expect(invertArray(arr, 2)).toEqual([3, 4, 5, 1, 2]);
    expect(invertArray(arr, 3)).toEqual([4, 5, 1, 2, 3]);
    expect(invertArray(arr, 4)).toEqual([5, 1, 2, 3, 4]);
    expect(invertArray(arr, 5)).toEqual([1, 2, 3, 4, 5]);
  });
});
