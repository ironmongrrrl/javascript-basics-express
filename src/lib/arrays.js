const getNthElement = (index, array) => {
 return array[index % array.length]
 };

const arrayToCSVString = array => {
  return array.toString();
};

const csvStringToArray = string => {
  return string.split(",");
};

const addToArray = (element, array) => {
 array.push(element);
};

const addToArray2 = (element, array) => {
 let array2 = array.concat(element);
 return array2;
};

const removeNthElement = (index, array) => {
  array.splice(index, 1);
  return array;
};

const numbersToStrings = numbers => {
  return numbers.toString()
                .split(",")
};

const uppercaseWordsInArray = (strings) => {
  return strings.toString()
                .toUpperCase()
                .split(",")
};

const reverseWordsInArray = (strings) => {
 return strings.map((strings) => {
  return strings.split("").reverse().join("")
});
  }

const onlyEven = (numbers) => {
  return numbers.filter((numbers) => numbers % 2 === 0);
}

const removeNthElement2 = (index, array) => {
  copyArray = array.slice(0, array.length);
  copyArray.splice(index, 1);
  return copyArray;
    }

 // OPTION 1 //
const elementsStartingWithAVowel = (strings) => {
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let items = [];
  for (i = 0; i < vowels.length; i +=1) {  
    for (j = 0; j < strings.length; j++) {
      if (strings[j].charAt(0) === vowels[i]) {
        items.push(strings[j])
      }
    }
  }   
  return items 
}

// OPTION 2//
/*const elementsStartingWithAVowel = (strings) => {
  let rex = /^[aeiou]/;
  return strings.filter(strings => rex.test(strings));
};*/

const removeSpaces = string => {
  let reggy = string.replace(/\s/g, "");
  return reggy;
};

const sumNumbers = numbers => {
  const add = (x, y) => x + y;
  return numbers.reduce(add);
};

const sortByLastLetter = strings => {
  strings.sort((x, y) => 
  x.charCodeAt(x.length - 1) - y.charCodeAt(y.length - 1));
  return strings;
}  

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
