// This code demonstrates Execution Contexts and Hoisting in JavaScript

console.log("--- Start of Script ---");

var name = "Antigravity";
let version = "3.1";

function greet() {
  console.log("Greeting from " + name + " v" + version);
}

// Global Execution Context is active
greet();

{
  // Block Scope
  var varScoped = "I'm global-ish (hoisted to func/global)";
  let letScoped = "I'm strictly block-scoped";
  console.log(varScoped);
  console.log(letScoped);
}

console.log("Outside block - varScoped:", varScoped);
try {
  console.log("Outside block - letScoped:", letScoped);
} catch (e) {
  console.log("Outside block - letScoped: Error caught! (ReferenceError)");
}

console.log("--- End of Script ---");
