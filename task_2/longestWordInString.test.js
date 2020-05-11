import longestWordInString from './longestWordInString';

describe('longest word in a string', () => {
  it('should return a number', () => {
    expect(typeof longestWordInString("The quick brown fox jumped over the lazy dog")).toBe('number');
  });

  it('should return 6', () => {
    expect(longestWordInString("The quick brown fox jumped over the lazy dog")).toBe(6);
  });

  it('should return 5', () => {
    expect(longestWordInString("May the force be with you")).toBe(5);
  });

  it('should return 8', () => {
    expect(longestWordInString("What is the average airspeed velocity of an unladen swallow")).toBe(8);
  });

  it('should return 19', () => {
    expect(longestWordInString("What if we try a super-long word such as otorhinolaryngology")).toBe(19);
  });
});
