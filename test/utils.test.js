import {parry} from '../src/utils';

import jsc from 'jsverify';

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

test('parry() should really return its argument', () => {
  jsc.assertForall(jsc.number(), (number) => {
    return parry(number) === number;
  });
});
