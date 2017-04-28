// @flow

// Todo: I want to align "import (as) from" and "const =" forcely!
import {hello}   from './constants';
import {inspect} from './utils';

const integer1: number = 1;
const string1 : string = 'string';

inspect(hello);
inspect(integer1);
inspect(string1);

const obj1: {a: number, b: number} = {a: 1, b: 2};

inspect(obj1);

const obj2: Object = {
  a  : 1,
  bc : 2,
  def: 3,

  ghij: 4,
};

inspect(obj2);

const cond: boolean = true;
if(cond) {
  inspect('ok!');
}

while(cond) {
  inspect('ok!');
  break;
}

switch(cond) {
  case true:
    inspect('ok');
    break;
  default:
    inspect('ng');
}

// default config
const array1: number[] = [1, 2, 3];
const array2: number[] = [
  4,
  5,
  6,
];
inspect(array1);
inspect(array2);

// Todo: I want to align tuples by comma!
const tuple1: [number, number] = [1, 2];
const tuple2: [number, number] = [33, 44];

inspect(tuple1);
inspect(tuple2);
