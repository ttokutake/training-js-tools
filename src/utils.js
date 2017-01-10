// @flow

import util from 'util';

export function tell(obj: any): void {
  process.stdout.write(`${util.inspect(obj)}\n`);
}

export function asItIs(obj: any): any {
  return obj;
}
