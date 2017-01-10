import util from 'util';

export function tell(obj) {
  process.stdout.write(`${util.inspect(obj)}\n`);
}

export function asItIs(obj) {
  return obj;
}
