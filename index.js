// index.js

// Function that takes a callback function as an argument and calls it
function receivesAFunction(callback) {
    callback(); // calling the callback function passed as an argument
  }
  
  // Function that returns a named function
  function returnsANamedFunction() {
    return function namedFunction() {
      console.log("This is a named function");
    };
  }
  
  // Function that returns an anonymous function
  function returnsAnAnonymousFunction() {
    return () => {
      console.log("This is an anonymous function");
    };
  }
  
  module.exports = {
    receivesAFunction,
    returnsANamedFunction,
    returnsAnAnonymousFunction
  };
  