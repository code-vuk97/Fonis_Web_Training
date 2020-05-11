import filterPractice from './filter-practice';

describe('filterPractice([1, 1, 2, 5, 1, 9, 9, 6])', () => {
  it('should return [1, 2, 5, 9, 6]', () => {
    expect(filterPractice([1, 1, 2, 5, 1, 9, 9, 6])).toEqual([1, 2, 5, 9, 6]);
  });
});
