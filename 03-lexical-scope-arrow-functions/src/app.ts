class MyClass {
  public static foo = 456;
  myMethod() {
    const foo = 123;

    console.log('1', this);

    setTimeout(function() {
      // correct foo, incorrect this
      console.log('2', this, foo);
    }, 0);

    setTimeout(() => {
      // correct foo, correct this
      console.log('3', this, foo);
    }, 0);
  }
}

const myInstance = new MyClass();
myInstance.myMethod();

// gets printed second due to setTimeout() above
console.log('4', MyClass.foo);
