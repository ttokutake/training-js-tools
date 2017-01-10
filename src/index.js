// Todo: I want to align "import (as) from" and "const =" forcely!
import {hello} from './constants';
import {tell}  from './utils';

const integer1 = 1;
const string1  = 'string';

tell(hello);
tell(integer1);
tell(string1);

const obj1 = {a: 1, b: 2};

tell(obj1);

const obj2 = {
  a  : 1,
  bc : 2,
  def: 3,

  ghij: 4,
};

tell(obj2);

const cond = true;
if(cond) {
  tell('ok!');
}

while(cond) {
  tell('ok!');
  break;
}

switch(cond) {
  case true:
    tell('ok');
    break;
  default:
    tell('ng');
}

// default config
const array1 = [1, 2, 3];
const array2 = [
  4,
  5,
  6,
];
tell(array1);
tell(array2);

// Todo: I want to align tuples by comma!
const tuple1 = [1, 2];
const tuple2 = [33, 44];

tell(tuple1);
tell(tuple2);
