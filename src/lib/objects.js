const createPerson = (name, age) => {
  let person = {
    name: name,
    age: age,
  }
  return person;
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  return (object[property] ? true : false);
};

const isOver65 = person => {
  return (person.age > 65 ? true : false);
};

// UPDATED CODE BASED ON CODE REVIEW FROM MR G //
const getAges = people => {
  ageArray = [];   
  people.map(person => {
    ageArray.push(person.age)
  });
  return ageArray;
}

// const getAges = people => {
//   let ages = [];
//   for (i = 0; i < people.length; i++) {
//     if (people[i].age) {
//       ages.push(people[i].age);
//     }
// };
// return ages;
// }

const findByName = (name, people) => {
  return people.find( (person) => person.name === name);  
  
  // OR can use this answer below:

  // for (i = 0; i < people.length; i++) {
  //   if (people[i].name === name) {
  //     console.log(people[i]);
  //     return people[i];
  //   }
  // }
};

const findHondas = cars => {
  return cars.filter((honda) => honda.manufacturer === 'Honda');
};

const averageAge = people => {
  return (people.reduce((total, currentUser) => total + currentUser.age, 0)) / people.length;

  // OR can write it like below:
  // let totalAge = people.reduce((total, currentUser) => total + currentUser.age, 0);
  // return totalAge / people.length;
};

const createTalkingPerson = (name, age) => {
  let talkingPerson = {
    name: name,
    age: age,
    introduce: person => {
      return `Hi ${person}, my name is ${name} and I am ${age}!`;
    }
  };
  return talkingPerson;
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
