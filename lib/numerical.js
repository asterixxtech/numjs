'use strict';

const Mult = (a, b) => {
  console.log(a * b)
}

const Exp = (a) => {
  console.log(a * a);
};

const Squ = (a) => {
   console.log(a - a);
}

const _Exp = Exp;
export { _Exp as Exp };
const _Mult = Mult;
export { _Mult as Mult };
const _Squ = Squ;
export { _Squ as Squ }