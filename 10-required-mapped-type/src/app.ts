interface Person {
  name: string;
  age?: number;
}

// available in typescript as Required<T> without defining it ourself
type MyRequired<T> = {
  [P in keyof T]-?: T[P];
};

function printAge(person: Required<Person>) {
  return `${person.name} is ${person.age}`;
}

const person: Required<Person> = {
  name: 'Todd',
  age: 27,
};

console.log(person);
const age = printAge(person);
console.log(age);

const person2: Person = {
  name: 'Tim',
};

console.log(person2);
// const age2 = printAge(person2); // does not work because person2 is not a Required<Person>
person2.age = 25;
console.log(person2);
// const age2 = printAge(person2); // still does not work because person2 is still not a Required<Person>
