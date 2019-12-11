const person = {
  name: 'Todd',
  age: 27,
};

type Person = typeof person; // {name: string; age: number;}
type PersonKeys = keyof Person; // 'name' | 'age'
type PersonTypes = Person[PersonKeys]; // string | number

// generic types of T and K extends keyof T
// T -> {name: string; age: number;}
// keyof T -> 'name' | 'age'
// thus T can only be 'name' or 'age'
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const personName = getProperty(person, 'name'); // typescript knows this is a string
const personAge = getProperty(person, 'age'); // typescript knows this is a number

console.log(personName);
console.log(personAge);

const anotherPerson: Person = {
  name: 'John',
  age: 30,
};

const anotherName = getProperty(anotherPerson, 'name'); // typescript knows this is a string
const anotherAge = getProperty(anotherPerson, 'age'); // typescript knows this is a number

console.log(anotherName);
console.log(anotherAge);
