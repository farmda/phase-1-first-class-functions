function receivesAFunction(callback) {
    callback();
  }
  
  function returnsANamedFunction() {
    return function namedFunction() {
      console.log("This is a named function!");
    };
  }
  
  function returnsAnAnonymousFunction() {
    return function() {
      console.log("This is an anonymous function!");
    };
  }
  const logHello = () => console.log("Hello!");
  receivesAFunction(logHello); // should log "Hello!"
  
  const myFunction = returnsANamedFunction();
  myFunction(); // should log "This is a named function!"
  
  const myAnonymousFunction = returnsAnAnonymousFunction();
  myAnonymousFunction(); // should log "This is an anonymous function!"