const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  return a / b;
};

const power = (a, b) => {
  return Math.pow(a, b);
};

const round = a => {
  return Math.round(a);
};

const roundUp = a => {
  return Math.ceil(a);
};

const roundDown = a => {
  return Math.floor(a);
};

const absolute = a => {
  return Math.abs(a);
};

let quotient = (a, b) => {
   if(a <= 0 || b <= 0) {
     quotient = Math.ceil(a / b);
   } else {
     quotient = Math.floor(a / b);
   } 
   {
   return quotient;
   }
};

const remainder = (a, b) => {
  return(a % b);
};

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  power,
  round,
  roundUp,
  roundDown,
  absolute,
  quotient,
  remainder
};
