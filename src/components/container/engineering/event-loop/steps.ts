import type { EventLoopStep } from "./visualizer";

export const eventLoopSteps: EventLoopStep[] = [
  {
    message: "The program begins. Global Execution Context is pushed to the stack.",
    checking: 'stack',
    stack: ["GEC"],
    microQueue: [],
    taskQueue: [],
    output: []
  },
  {
    message: "Itadori enters the scene. First log executes.",
    checking: 'stack',
    stack: ["GEC", "log('Itadori: I\\'ll save people.')"],
    microQueue: [],
    taskQueue: [],
    output: []
  },
  {
    message: "Log prints and is removed. Stack moves to next line.",
    checking: 'stack',
    stack: ["GEC"],
    microQueue: [],
    taskQueue: [],
    output: ["Itadori: I'll save people."]
  },
  {
    message: "Sukuna is lurking. setTimeout is called and handed to the Task Queue.",
    checking: 'stack',
    stack: ["GEC", "setTimeout()"],
    microQueue: [],
    taskQueue: [],
    output: ["Itadori: I'll save people."]
  },
  {
    message: "Gojo expands his Domain via a Promise. It enters the Microtask Queue.",
    checking: 'stack',
    stack: ["GEC", "Promise.then()"],
    microQueue: [],
    taskQueue: ["Sukuna: Control...?"],
    output: ["Itadori: I'll save people."]
  },
  {
    message: "Final synchronous line: Megumi starts his summoning ritual.",
    checking: 'stack',
    stack: ["GEC", "log('Megumi: I summon...')"],
    microQueue: ["Gojo: Infinite Void"],
    taskQueue: ["Sukuna: Control...?"],
    output: ["Itadori: I'll save people."]
  },
  {
    message: "Megumi's log prints. The main script has finished its initial run.",
    checking: 'stack',
    stack: ["GEC"],
    microQueue: ["Gojo: Infinite Void"],
    taskQueue: ["Sukuna: Control...?"],
    output: ["Itadori: I'll save people.", "Megumi: With this treasure I summon..."]
  },
  {
    message: "GEC is popped. The Call Stack is now completely empty. The loop starts its first rotation.",
    checking: 'none',
    stack: [],
    microQueue: ["Gojo: Infinite Void"],
    taskQueue: ["Sukuna: Control...?"],
    output: ["Itadori: I'll save people.", "Megumi: With this treasure I summon..."]
  },
  {
    message: "Event Loop: Is the stack empty? Yes. Checking Microtask Queue...",
    checking: 'micro',
    stack: [],
    microQueue: ["Gojo: Infinite Void"],
    taskQueue: ["Sukuna: Control...?"],
    output: ["Itadori: I'll save people.", "Megumi: With this treasure I summon..."]
  },
  {
    message: "Event Loop finds Gojo. His Domain Expansion takes priority over everything.",
    checking: 'none',
    stack: ["Infinite Void"],
    microQueue: [],
    taskQueue: ["Sukuna: Control...?"],
    output: ["Itadori: I'll save people.", "Megumi: With this treasure I summon..."]
  },
  {
    message: "Infinite Void prints and is popped from the stack.",
    checking: 'stack',
    stack: [],
    microQueue: [],
    taskQueue: ["Sukuna: Control...?"],
    output: ["Itadori: I'll save people.", "Megumi: With this treasure I summon...", "Gojo: Domain Expansion: Infinite Void."]
  },
  {
    message: "Event Loop: Is the stack empty? Yes. Checking Microtask Queue... Empty. Checking Task Queue...",
    checking: 'task',
    stack: [],
    microQueue: [],
    taskQueue: ["Sukuna: Control...?"],
    output: ["Itadori: I'll save people.", "Megumi: With this treasure I summon...", "Gojo: Domain Expansion: Infinite Void."]
  },
  {
    message: "Event Loop finally finds Sukuna. He is pushed into the stack.",
    checking: 'none',
    stack: ["Sukuna Log"],
    microQueue: [],
    taskQueue: [],
    output: ["Itadori: I'll save people.", "Megumi: With this treasure I summon...", "Gojo: Domain Expansion: Infinite Void."]
  },
  {
    message: "Sukuna finishes his remark. All as planned.",
    checking: 'stack',
    stack: [],
    microQueue: [],
    taskQueue: [],
    output: ["Itadori: I'll save people.", "Megumi: With this treasure I summon...", "Gojo: Domain Expansion: Infinite Void.", "Sukuna: Do you think you can control me?"]
  }
]
