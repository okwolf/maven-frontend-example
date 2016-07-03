describe('The square function', function() {
  it('should modify input', function() {
    expect(square(3)).not.toBe(3);
  });
  it('should square 0', function() {
    expect(square(0)).toBe(0);
  });
  it('should square 1', function() {
    expect(square(1)).toBe(1);
  });
  it('should square 3', function() {
    expect(square(3)).toBe(9);
  });
});