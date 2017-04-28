// @flow

import util from 'util';

export function inspect(obj: any): void {
  process.stdout.write(`${util.inspect(obj)}\n`);
}

export function parry(obj: any): any {
  return obj;
}
