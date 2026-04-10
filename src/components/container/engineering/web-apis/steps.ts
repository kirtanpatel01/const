import type { WebApiStep } from "./visualizer";

export const webApiSteps: WebApiStep[] = [
  {
    message: "Initial state: The Call Stack is empty.",
    stack: [],
    webApis: [],
    output: []
  },
  {
    message: "Global Execution Context (GEC) is created and pushed.",
    stack: ["GEC"],
    webApis: [],
    output: []
  },
  {
    message: "Pushing console.log('Start the Rumbling!') to the stack.",
    stack: ["GEC", "log('Start...')"],
    webApis: [],
    output: []
  },
  {
    message: "Executing the first log and popping it.",
    stack: ["GEC"],
    webApis: [],
    output: ["Start the Rumbling!"]
  },
  {
    message: "setTimeout() is called and pushed to the stack.",
    stack: ["GEC", "setTimeout()"],
    webApis: [],
    output: ["Start the Rumbling!"]
  },
  {
    message: "JS handles it over to WebAPIs and finishes setTimeout's job on stack.",
    stack: ["GEC"],
    webApis: ["Timer (2000ms)"],
    output: ["Start the Rumbling!"]
  },
  {
    message: "Pushing console.log('End of the world.') to the stack.",
    stack: ["GEC", "log('End...')"],
    webApis: ["Timer (2000ms)"],
    output: ["Start the Rumbling!"]
  },
  {
    message: "Executing the second log and popping it.",
    stack: ["GEC"],
    webApis: ["Timer (2000ms)"],
    output: ["Start the Rumbling!", "End of the world."]
  },
  {
    message: "Main execution finished. GEC is popped. Stack is empty.",
    stack: [],
    webApis: ["Timer (2000ms)"],
    output: ["Start the Rumbling!", "End of the world."]
  },
  {
    message: "After 2 seconds, the timer finishes in the Web API environment.",
    stack: [],
    webApis: ["Callback Ready"],
    output: ["Start the Rumbling!", "End of the world."]
  },
  {
    message: "The callback enters the stack (via Event Loop) and executes.",
    stack: ["callback()", "log('TATAKAE!')"],
    webApis: [],
    output: ["Start the Rumbling!", "End of the world."]
  },
  {
    message: "TATAKAE! is printed and the callback finishes.",
    stack: [],
    webApis: [],
    output: ["Start the Rumbling!", "End of the world.", "TATAKAE!"]
  }
]
