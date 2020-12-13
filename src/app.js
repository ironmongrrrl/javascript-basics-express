// SETUP // 

const express = require('express');
const app = express();
app.use(express.json());

// STRINGS IMPORT // 

const {   
  sayHello,
  uppercase,
  lowercase,
  firstCharacter,
  firstCharacters } = require('./lib/strings'); 

  // NUMBERS IMPORT // 

  const {
    add,
    subtract,
    multiply,
    divide,
    remainder
    } = require('./lib/numbers');


// STRINGS //
app.get('/strings/hello/world', (req, res) => {
  res.status(200).send( {  "result": "Hello, world!" }  );
});

// STRINGS - SAYHELLO //
app.get('/strings/hello/:string',  (req, res) => {
  res.status(200).send( { result: sayHello(req.params.string) } ); 
});

// STRINGS - UPPERCASE //
app.get('/strings/upper/:string',  (req, res) => {
  res.status(200).send( { result: uppercase(req.params.string) } ); 
});

// STRINGS - LOWERCASE //
app.get('/strings/lower/:string',  (req, res) => {
  res.status(200).send( { result: lowercase(req.params.string) } ); 
});

// STRINGS - QUERY //
app.get('/strings/first-characters/:string', (req, res) => {
  if (!req.query.length) { res.status(200).send( { result: firstCharacter(req.params.string)} );
} else { res.status(200).send( { result: firstCharacters(req.params.string, req.query.length)} ); 
}});

// NUMBERS - ADD // 
app.get('/numbers/add/:firstNum/and/:secondNum', (req, res) => {
  const firstNumber = parseInt(req.params.firstNum);
  const secondNumber = parseInt(req.params.secondNum);

  if (isNaN(firstNumber, secondNumber)) {
    res.status(400).send( { error: 'Parameters must be valid numbers.' }  );
  } else {
    res.status(200).send( { result: add(firstNumber, secondNumber) } );
  }
}); 

// TUTORIAL DID:
// return Number.isNaN(a) || Number.isNaN(b)
// ? res.sendStatus(400)
// : res.status(200).json({ result: add(a, b) });
// });

// NUMBERS - SUBTRACT //
app.get('/numbers/subtract/:firstNumber/from/:secondNumber', (req, res) => {
  const firstNumber = parseInt(req.params.firstNumber);
  const secondNumber = parseInt(req.params.secondNumber);

  if (isNaN(firstNumber, secondNumber)) { 
    res.status(400).send( { error: 'Parameters must be valid numbers.' }  );
  } else {
    res.status(200).send( { result: subtract(secondNumber, firstNumber)}  );
  }
});

// MULITPLY TESTS //
app.post('/numbers/multiply', (req, res) => {
  const numberA = parseInt(req.body.a);
  const numberB = parseInt(req.body.b);

  if (!req.body.a || !req.body.b) {
    res.status(400).send( { error: 'Parameters "a" and "b" are required.' } );
  } else if  (isNaN(numberA, numberB)) {
    res.status(400).send( { error: 'Parameters "a" and "b" must be valid numbers.' } );
  } else {
    res.status(200).send( { result: multiply(req.body.a, req.body.b) }  );
  }
});

// DIVIDE TESTS // 
app.post('/numbers/divide', (req, res) => {
  const numberA = parseInt(req.body.a);
  const numberB = parseInt(req.body.b);

if (req.body.b === 0) {
  res.status(400).send( { error: 'Unable to divide by 0.' } );
} else if (req.body.a === undefined || req.body.b === undefined) {
  res.status(400).send( { error: 'Parameters "a" and "b" are required.' } );
} else if (isNaN(numberA, numberB)) {
  res.status(400).send( { error: 'Parameters "a" and "b" must be valid numbers.' } );
} else {
  res.status(200).send( { result: divide(req.body.a, req.body.b) } );
}
});

// MODULO TESTS // 
app.post('/numbers/remainder', (req, res) => {
  const numberA = parseInt(req.body.a);
  const numberB = parseInt(req.body.b);

if (req.body.b === 0) {
  res.status(400).send( { error: 'Unable to divide by 0.' });
} else if (req.body.a === undefined || req.body.b === undefined) {
  res.status(400).send( { error: 'Parameters "a" and "b" are required.' } );
} else if (isNaN(numberA, numberB)) {
  res.status(400).send( { error: 'Parameters must be valid numbers.' } );
} else {
  res.status(200).send( { result: remainder(req.body.a, req.body.b) } );
}
});

module.exports = app;
