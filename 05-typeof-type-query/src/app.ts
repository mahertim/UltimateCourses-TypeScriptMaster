const person = {
  name: 'Todd',
  age: 27,
};

console.log(person);
console.log(typeof person);

type Person = typeof person;

const anotherPerson: Person = {
  name: 'John',
  age: 30,
  // cannot add other members
  // job = 'butler' // does not work
  // cannot set members as incorrect type
  // age: '30' // does not work
};

console.log(anotherPerson);
console.log(typeof anotherPerson);

console.log(typeof '');
console.log(typeof []);
console.log(typeof typeof ''); //typeof returns a string
