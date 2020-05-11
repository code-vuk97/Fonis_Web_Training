import convertToFahrenheit from './convertToFahrenheit';

describe('convert celsius to fahrenheit', () => {
  it('should return a number', () => {
    expect(typeof convertToFahrenheit(0)).toBe('number');
  })

  it('should return a value of -22', () => {
    expect(convertToFahrenheit(-30)).toBe(-22);
  })

  it('should return a value of 14', () => {
    expect(convertToFahrenheit(-10)).toBe(14);
  })

  it('should return a value of 32', () => {
    expect(convertToFahrenheit(0)).toBe(32);
  });

  it('should return a value of 68', () => {
    expect(convertToFahrenheit(20)).toBe(68);
  });

})