interface Person {
  name: string;
  age: number;
}

type MyPartial<T> = {
  [P in keyof T]?: T[P];
};

// updates a Person given a partial Person
function updatePerson(person: Person, prop: Partial<Person>) {
  return { ...person, ...prop };
}

// updates any object given a partial that shares the type of the object
function update(t: object, prop: Partial<typeof t>): typeof t {
  return { ...t, ...prop };
}

const person: Person = {
  name: 'Todd',
  age: 27,
};

console.log(person);
const newPerson = updatePerson(person, { name: 'ABC' });
console.log(newPerson);

console.log(person);
const newerPerson = update(person, { age: 25 });
console.log(newerPerson);
