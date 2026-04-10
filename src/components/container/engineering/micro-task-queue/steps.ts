import type { MicroStep } from "./visualizer";

export const microTaskSteps: MicroStep[] = [
  {
    message: "Starting execution. Global Execution Context is pushed.",
    stack: ["GEC"],
    webApis: [],
    microQueue: [],
    taskQueue: [],
    output: []
  },
  {
    message: "First line: Ichigo enters the battle.",
    stack: ["GEC", "log('Ichigo...')"],
    webApis: [],
    microQueue: [],
    taskQueue: [],
    output: []
  },
  {
    message: "Log prints and is popped.",
    stack: ["GEC"],
    webApis: [],
    microQueue: [],
    taskQueue: [],
    output: ["Ichigo: Bankai!"]
  },
  {
    message: "setTimeout(0ms) is called. Kon is handed to Web APIs.",
    stack: ["GEC", "setTimeout()"],
    webApis: ["Timer (0ms)"],
    microQueue: [],
    taskQueue: [],
    output: ["Ichigo: Bankai!"]
  },
  {
    message: "Kon moves instantly from Web API to Task Queue.",
    stack: ["GEC"],
    webApis: [],
    microQueue: [],
    taskQueue: ["callback(Kon)"],
    output: ["Ichigo: Bankai!"]
  },
  {
    message: "Promise is resolved. Success callback moves to Microtask Queue.",
    stack: ["GEC", "Promise..."],
    webApis: [],
    microQueue: ["then(Zangetsu)"],
    taskQueue: ["callback(Kon)"],
    output: ["Ichigo: Bankai!"]
  },
  {
    message: "Final line: Aizen reveals his plan.",
    stack: ["GEC", "log('Aizen...')"],
    webApis: [],
    microQueue: ["then(Zangetsu)"],
    taskQueue: ["callback(Kon)"],
    output: ["Ichigo: Bankai!"]
  },
  {
    message: "Aizen's log prints. Main execution finishes.",
    stack: ["GEC"],
    webApis: [],
    microQueue: ["then(Zangetsu)"],
    taskQueue: ["callback(Kon)"],
    output: ["Ichigo: Bankai!", "Aizen: ...under the impression?"]
  },
  {
    message: "GEC is popped. The stack is empty. Time for the Event Loop!",
    stack: [],
    webApis: [],
    microQueue: ["then(Zangetsu)"],
    taskQueue: ["callback(Kon)"],
    output: ["Ichigo: Bankai!", "Aizen: ...under the impression?"]
  },
  {
    message: "Event Loop Logic: Always check Microtask Queue first. Zangetsu wins priority.",
    stack: ["then(Zangetsu)"],
    webApis: [],
    microQueue: [],
    taskQueue: ["callback(Kon)"],
    output: ["Ichigo: Bankai!", "Aizen: ...under the impression?"]
  },
  {
    message: "Zangetsu prints and callback is popped.",
    stack: [],
    webApis: [],
    microQueue: [],
    taskQueue: ["callback(Kon)"],
    output: ["Ichigo: Bankai!", "Aizen: ...under the impression?", "Zangetsu: I am the blade."]
  },
  {
    message: "Microtask Queue is empty. Now check Task Queue. Kon finally moves to stack.",
    stack: ["callback(Kon)"],
    webApis: [],
    microQueue: [],
    taskQueue: [],
    output: ["Ichigo: Bankai!", "Aizen: ...under the impression?", "Zangetsu: I am the blade."]
  },
  {
    message: "Kon prints. Execution complete.",
    stack: [],
    webApis: [],
    microQueue: [],
    taskQueue: [],
    output: ["Ichigo: Bankai!", "Aizen: ...under the impression?", "Zangetsu: I am the blade.", "Kon: Stop ignoring me!"]
  }
]
