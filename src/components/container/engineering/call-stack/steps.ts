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
    message: "Pushing console.log('I am Justice!') to the stack.", 
    stack: ["GEC", "log('I am Justice!')"], 
    output: [] 
  },
  { 
    message: "Executing Light Yagami's catchphrase and popping it.", 
    stack: ["GEC"], 
    output: ["I am Justice!"] 
  },
  { 
    message: "Pushing console.log('Shinzo wo Sasageyo!') to the stack.", 
    stack: ["GEC", "log('Shinzo wo Sasageyo!')"], 
    output: ["I am Justice!"] 
  },
  { 
    message: "Commander Erwin's salute is executed and popped.", 
    stack: ["GEC"], 
    output: ["I am Justice!", "Shinzo wo Sasageyo!"] 
  },
  { 
    message: "Pushing Ichigo's Bankai to the stack.", 
    stack: ["GEC", "log('Bankai, Tensa Zangetsu!')"], 
    output: ["I am Justice!", "Shinzo wo Sasageyo!"] 
  },
  { 
    message: "Bankai is activated and popped.", 
    stack: ["GEC"], 
    output: ["I am Justice!", "Shinzo wo Sasageyo!", "Bankai, Tensa Zangetsu!"] 
  },
  { 
    message: "Pushing Naruto's Rasengan to the stack.", 
    stack: ["GEC", "log('Rasengan!')"], 
    output: ["I am Justice!", "Shinzo wo Sasageyo!", "Bankai, Tensa Zangetsu!"] 
  },
  { 
    message: "Rasengan is executed and popped.", 
    stack: ["GEC"], 
    output: ["I am Justice!", "Shinzo wo Sasageyo!", "Bankai, Tensa Zangetsu!", "Rasengan!"] 
  },
  { 
    message: "Main execution finished. The Global Execution Context is popped.", 
    stack: [], 
    output: ["I am Justice!", "Shinzo wo Sasageyo!", "Bankai, Tensa Zangetsu!", "Rasengan!"] 
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
    message: "foundingTitan() is called. GEC pauses and foundingTitan() is pushed.",
    stack: ["GEC", "foundingTitan()"],
    output: []
  },
  {
    message: "Inside foundingTitan(), erenYeager() is called and pushed.",
    stack: ["GEC", "foundingTitan()", "erenYeager()"],
    output: []
  },
  {
    message: "Inside erenYeager(), rumbling() is called and pushed.",
    stack: ["GEC", "foundingTitan()", "erenYeager()", "rumbling()"],
    output: []
  },
  {
    message: "Inside rumbling(), log('TATAKAE!') is called and pushed.",
    stack: ["GEC", "foundingTitan()", "erenYeager()", "rumbling()", "log('TATAKAE!')"],
    output: []
  },
  {
    message: "TATAKAE! is printed and log() is popped.",
    stack: ["GEC", "foundingTitan()", "erenYeager()", "rumbling()"],
    output: ["TATAKAE!"]
  },
  {
    message: "rumbling() finishes and is popped from the stack.",
    stack: ["GEC", "foundingTitan()", "erenYeager()"],
    output: ["TATAKAE!"]
  },
  {
    message: "erenYeager() resumes and calls log('Freedom!').",
    stack: ["GEC", "foundingTitan()", "erenYeager()", "log('Freedom!')"],
    output: ["TATAKAE!"]
  },
  {
    message: "Freedom! is printed and log() is popped.",
    stack: ["GEC", "foundingTitan()", "erenYeager()"],
    output: ["TATAKAE!", "Freedom!"]
  },
  {
    message: "erenYeager() finishes and is popped from the stack.",
    stack: ["GEC", "foundingTitan()"],
    output: ["TATAKAE!", "Freedom!"]
  },
  {
    message: "foundingTitan() resumes and calls log('It is done.').",
    stack: ["GEC", "foundingTitan()", "log('It is done.')"],
    output: ["TATAKAE!", "Freedom!"]
  },
  {
    message: "Final log is printed and popped.",
    stack: ["GEC", "foundingTitan()"],
    output: ["TATAKAE!", "Freedom!", "It is done."]
  },
  {
    message: "foundingTitan() finishes and is popped from stack.",
    stack: ["GEC"],
    output: ["TATAKAE!", "Freedom!", "It is done."]
  },
  {
    message: "Main execution finished. GEC is popped. Stack is empty.",
    stack: [],
    output: ["TATAKAE!", "Freedom!", "It is done."]
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
    message: "shadowClone() is called and pushed onto the stack.",
    stack: ["GEC", "shadowClone()"],
    output: []
  },
  {
    message: "It creates another clone. A new frame is pushed.",
    stack: ["GEC", "shadowClone()", "shadowClone()"],
    output: []
  },
  {
    message: "More clones! The stack is growing too fast...",
    stack: ["GEC", "shadowClone()", "shadowClone()", "shadowClone()"],
    output: []
  },
  {
    message: "Too many clones. Each one takes up memory.",
    stack: ["GEC", "shadowClone()", "shadowClone()", "shadowClone()", "shadowClone()"],
    output: []
  },
  {
    message: "Memory limit reached... It's over 9000!!!",
    stack: ["GEC", "...", "shadowClone()", "shadowClone()", "shadowClone()", "shadowClone()"],
    output: []
  },
  {
    message: "CRASH! The browser ran out of chakra (memory).",
    stack: ["GEC", "...", "shadowClone()", "shadowClone()", "shadowClone()", "shadowClone()"],
    output: ["Uncaught RangeError: Maximum call stack size exceeded"]
  }
]
