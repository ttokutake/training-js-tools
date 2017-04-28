const {parry} = require('../src/utils');

test('parry() should return its argument', () => {
  const inputs = [
    undefined,
    null,
    0,
    '0',
    [],
    {},
  ];

  for(const input of inputs) {
    expect(parry(input)).toBe(input);
  }
});
