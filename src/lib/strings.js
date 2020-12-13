// TIDIED UP AFTER G's CODE REVIEW //
let sayHello = (string) => {
  return `Hello, ${string}!`;
}
sayHello();


let uppercase = (string) => {
  uppercase = string.toUpperCase();
  {
    return uppercase;
  }
};

let lowercase = (string) => {
  lowercase = string.toLowerCase();
  {
    return lowercase;
  }
};

let countCharacters = (string) => {
  countCharacters = string.length;
  {
    return countCharacters;
  }
};

let firstCharacter = (string) => {
  firstCharacter = string.charAt(0);
  {
    return firstCharacter;
  }
};

let firstCharacters = (string, n) => {
  firstCharacters = string.substring(0, n);
  {
    return firstCharacters;
  }
};

module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters
};
