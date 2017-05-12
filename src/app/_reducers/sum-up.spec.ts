const sumUp = (sum, number) => sum + number;

describe('pure sumUp function', () => {
  it('should add up two numbers', () => {
    const expected = 42;
    const actual = sumUp(38, 4);
    expect(actual).toBe(expected);
  });
});
