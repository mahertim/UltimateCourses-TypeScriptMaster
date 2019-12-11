// Object literal
const myObj = {
  myMethod() {
    console.log('Object:::', this);
  },
};
// myObj.myMethod();

// Function
function myFunction(...text: string[]) {
  console.log('Function:::', this, text);
}
const boundFunction = myFunction.bind(myObj);
boundFunction('ABC', 'DEF');
boundFunction('123', '456');
boundFunction('ABC', 'DEF');
myFunction.call(myObj, 'ABC', 'DEF');
myFunction.apply(myObj, ['ABC', 'DEF']);
