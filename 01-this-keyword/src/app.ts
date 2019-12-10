// Function
function myFunction() {
  console.log('Function:::', this);
}
myFunction();

// Object literal
const myObj = {
  myMethod() {
    console.log('Object:::', this);
  },
};
myObj.myMethod();

// Classes
class MyClass {
  myInstanceMethod() {
    console.log('Instance:::', this);
  }
  static myClassMethod() {
    console.log('Class:::', this);
  }
}

const myInstance = new MyClass();
myInstance.myInstanceMethod();
MyClass.myClassMethod();
