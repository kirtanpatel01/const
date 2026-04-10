export const loggingSteps = [
  { 
    message: "Initial state: The Call Stack is empty.", 
    stack: [], 
    output: [] 
  },
  { 
    message: "Global Execution Context (GEC) is created and pushed onto the stack.", 
    stack: ["GEC"], 
    output: [] 
  },
  { 
    message: "Pushing console.log('Dragon Ball') to the top of the stack.", 
    stack: ["GEC", "log('Dragon Ball')"], 
    output: [] 
  },
  { 
    message: "Executing log('Dragon Ball') - it prints to console and gets popped.", 
    stack: ["GEC"], 
    output: ["Dragon Ball"] 
  },
  { 
    message: "Pushing console.log('Naruto') to the stack.", 
    stack: ["GEC", "log('Naruto')"], 
    output: ["Dragon Ball"] 
  },
  { 
    message: "Executing log('Naruto') and popping it.", 
    stack: ["GEC"], 
    output: ["Dragon Ball", "Naruto"] 
  },
  { 
    message: "Pushing console.log('Bleach') to the stack.", 
    stack: ["GEC", "log('Bleach')"], 
    output: ["Dragon Ball", "Naruto"] 
  },
  { 
    message: "Executing log('Bleach') and popping it.", 
    stack: ["GEC"], 
    output: ["Dragon Ball", "Naruto", "Bleach"] 
  },
  { 
    message: "Pushing console.log('One Piece') to the stack.", 
    stack: ["GEC", "log('One Piece')"], 
    output: ["Dragon Ball", "Naruto", "Bleach"] 
  },
  { 
    message: "Executing log('One Piece') and popping it.", 
    stack: ["GEC"], 
    output: ["Dragon Ball", "Naruto", "Bleach", "One Piece"] 
  },
  { 
    message: "Main execution finished. The Global Execution Context is popped.", 
    stack: [], 
    output: ["Dragon Ball", "Naruto", "Bleach", "One Piece"] 
  },
]

export const functionCallSteps = [
  {
    message: "Initial state: The Call Stack is empty.",
    stack: [],
    output: []
  },
  {
    message: "Global Execution Context (GEC) is created and pushed.",
    stack: ["GEC"],
    output: []
  },
  {
    message: "three() is called. GEC pauses and three() is pushed.",
    stack: ["GEC", "three()"],
    output: []
  },
  {
    message: "Inside three(), two() is called and pushed to the top.",
    stack: ["GEC", "three()", "two()"],
    output: []
  },
  {
    message: "Inside two(), one() is called and pushed to the top.",
    stack: ["GEC", "three()", "two()", "one()"],
    output: []
  },
  {
    message: "Inside one(), log('One') is called and pushed.",
    stack: ["GEC", "three()", "two()", "one()", "log('One')"],
    output: []
  },
  {
    message: "log('One') prints 'One' and is popped.",
    stack: ["GEC", "three()", "two()", "one()"],
    output: ["One"]
  },
  {
    message: "one() finishes and is popped from the stack.",
    stack: ["GEC", "three()", "two()"],
    output: ["One"]
  },
  {
    message: "two() resumes and calls log('Two').",
    stack: ["GEC", "three()", "two()", "log('Two')"],
    output: ["One"]
  },
  {
    message: "log('Two') prints 'Two' and is popped.",
    stack: ["GEC", "three()", "two()"],
    output: ["One", "Two"]
  },
  {
    message: "two() finishes and is popped from the stack.",
    stack: ["GEC", "three()"],
    output: ["One", "Two"]
  },
  {
    message: "three() resumes and calls log('Three').",
    stack: ["GEC", "three()", "log('Three')"],
    output: ["One", "Two"]
  },
  {
    message: "log('Three') prints 'Three' and is popped.",
    stack: ["GEC", "three()"],
    output: ["One", "Two", "Three"]
  },
  {
    message: "three() finishes and is popped from the stack.",
    stack: ["GEC"],
    output: ["One", "Two", "Three"]
  },
  {
    message: "Main execution finished. GEC is popped. Stack is empty.",
    stack: [],
    output: ["One", "Two", "Three"]
  }
]

export const overflowSteps = [
  {
    message: "Initial state: The Call Stack is empty.",
    stack: [],
    output: []
  },
  {
    message: "Global Execution Context (GEC) is created and pushed.",
    stack: ["GEC"],
    output: []
  },
  {
    message: "recurse() is called and pushed onto the stack.",
    stack: ["GEC", "recurse()"],
    output: []
  },
  {
    message: "recurse() calls itself. A new frame is pushed.",
    stack: ["GEC", "recurse()", "recurse()"],
    output: []
  },
  {
    message: "It calls itself again. The stack is growing...",
    stack: ["GEC", "recurse()", "recurse()", "recurse()"],
    output: []
  },
  {
    message: "And again. Each call sits on top of the previous one.",
    stack: ["GEC", "recurse()", "recurse()", "recurse()", "recurse()"],
    output: []
  },
  {
    message: "Filling up... This continues thousands of times.",
    stack: ["GEC", "...", "recurse()", "recurse()", "recurse()", "recurse()"],
    output: []
  },
  {
    message: "CRASH! The stack's physical memory limit is hit. JavaScript throws a RangeError and kills the process.",
    stack: ["GEC", "...", "recurse()", "recurse()", "recurse()", "recurse()"],
    output: ["Uncaught RangeError: Maximum call stack size exceeded"]
  }
]
