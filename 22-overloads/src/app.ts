// Define that passing a string causes reverse to return a string
function reverse(str: string): string;

// Define that passing an array causes reverse to return an array
function reverse<T>(arr: T[]): T[];

// Implement both reverse functions
function reverse<T>(stringOrArray: string | T[]): string | T[] {
  if (typeof stringOrArray === 'string') {
    return stringOrArray
      .split('')
      .reverse()
      .join('');
  }
  return stringOrArray.slice().reverse();
}

console.log(reverse('Pepperoni'));

console.log(reverse(['bacon', 'pepperoni', 'chili', 'mushrooms']));

console.log(reverse([1, 2, 3, 4]));
