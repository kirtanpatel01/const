import type { TaskStep } from "./visualizer";

export const taskQueueSteps: TaskStep[] = [
  {
    message: "The program begins. Global Execution Context is pushed to the stack.",
    stack: ["GEC"],
    webApis: [],
    queue: [],
    output: []
  },
  {
    message: "First line executes: Light starts his internal monologue.",
    stack: ["GEC", "log('Potato chip...')"],
    webApis: [],
    queue: [],
    output: []
  },
  {
    message: "Log prints and is removed from the stack.",
    stack: ["GEC"],
    webApis: [],
    queue: [],
    output: ["Light: I'll take a potato chip..."]
  },
  {
    message: "setTimeout with 0ms is called. It gets pushed to the stack.",
    stack: ["GEC", "setTimeout()"],
    webApis: [],
    queue: [],
    output: ["Light: I'll take a potato chip..."]
  },
  {
    message: "Even with 0ms, it is a Web API. It gets offloaded immediately.",
    stack: ["GEC"],
    webApis: ["Timer (0ms)"],
    queue: [],
    output: ["Light: I'll take a potato chip..."]
  },
  {
    message: "The timer finishes instantly and the callback moves to the queue.",
    stack: ["GEC"],
    webApis: [],
    queue: ["callback()"],
    output: ["Light: I'll take a potato chip..."]
  },
  {
    message: "Next line: L starts observing. The callback MUST wait in the queue.",
    stack: ["GEC", "log('L: Watching...')"],
    webApis: [],
    queue: ["callback()"],
    output: ["Light: I'll take a potato chip..."]
  },
  {
    message: "Log prints. The main execution finishes and GEC is popped.",
    stack: ["GEC"],
    webApis: [],
    queue: ["callback()"],
    output: ["Light: I'll take a potato chip...", "L: 👁️‍🗨️ Watching closely."]
  },
  {
    message: "GEC is popped. The stack is now empty and idle.",
    stack: [],
    webApis: [],
    queue: ["callback()"],
    output: ["Light: I'll take a potato chip...", "L: 👁️‍🗨️ Watching closely."]
  },
  {
    message: "Only now the Event Loop pushes the callback into the stack.",
    stack: ["callback()"],
    webApis: [],
    queue: [],
    output: ["Light: I'll take a potato chip...", "L: 👁️‍🗨️ Watching closely."]
  },
  {
    message: "The callback executes. Light finally eats the chip.",
    stack: ["callback()", "log('AND EAT IT!')"],
    webApis: [],
    queue: [],
    output: ["Light: I'll take a potato chip...", "L: 👁️‍🗨️ Watching closely."]
  },
  {
    message: "Log prints. The callback finishes and the stack is clear.",
    stack: [],
    webApis: [],
    queue: [],
    output: ["Light: I'll take a potato chip...", "L: 👁️‍🗨️ Watching closely.", "Light: AND EAT IT!"]
  }
]
