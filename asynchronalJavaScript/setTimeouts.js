// Asynchronous JavaScript

// Asynchronous JavaScript makes it possible to language waiting for long-running actions without freezing
// the program during these actions. JavaScript environments typically implement this style of programming using
// callbacks, functions that are called when the actions complete.

// Use 'setTimout' function to execute a callback
// after a delay in milliseconds. The arguments in
// setTimeout are in order:
// - A callback function
// - A delay in milliseconds

console.log("Started to wait");
// Because 'setTimeout' is asynchronous,
// JavaScript will not pause at the function call
// until the delay is over. I t will continue executing
// the lines that follow this functions.
// Once the delay has ellapsed, JavaScript will finally come back
// and execute the callback. By then, the entire exript will have finished running.
setTimeout(() => {
  console.log("wait 2 seconds");
}, 2000);

// This code does not wait for the setTimeout to complete
// its delay
console.log("Done waiting");

let greeting = "Good Morning!";
console.log("Before setTimout: ", greeting);

setTimeout(function() {
  greeting = "Yo!";
  console.log("In the callback: ", greeting);
}, 1000);

console.log("After setTimout: ", greeting);