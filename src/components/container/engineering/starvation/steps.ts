import type { StarveStep } from "./visualizer";

export const starvationSteps: StarveStep[] = [
  {
    message: "Starting execution. Global context is pushed. Isagi enters the field.",
    isStuck: false,
    microTasks: [],
    taskQueue: [],
    output: []
  },
  {
    message: "A UI update (Task) is dispatched. It goes to the Task Queue to wait.",
    isStuck: false,
    microTasks: [],
    taskQueue: ["UI: Redraw game board"],
    output: ["Isagi: Entering Flow State."]
  },
  {
    message: "Bachira's recursive devour() function is called. The first microtask enters the queue.",
    isStuck: false,
    microTasks: ["Bachira: Devouring..."],
    taskQueue: ["UI: Redraw game board"],
    output: ["Isagi: Entering Flow State."]
  },
  {
    message: "The main script is done. The Event Loop checks the Microtask Queue and picks Bachira.",
    isStuck: false,
    microTasks: ["Bachira: Devouring..."],
    taskQueue: ["UI: Redraw game board"],
    output: ["Isagi: Entering Flow State."]
  },
  {
    message: "Bachira executes, prints to console, and immediately calls itself again, adding a NEW microtask.",
    isStuck: false,
    microTasks: ["Bachira: Devouring... (2)"],
    taskQueue: ["UI: Redraw game board"],
    output: ["Isagi: Entering Flow State.", "Bachira: Devouring..."]
  },
  {
    message: "The Event Loop MUST drain the Microtask Queue entirely before checking the Task Queue. It sees more work and stays.",
    isStuck: false,
    microTasks: ["Bachira: Devouring... (3)"],
    taskQueue: ["UI: Redraw game board"],
    output: ["Isagi: Entering Flow State.", "Bachira: Devouring...", "Bachira: Devouring..."]
  },
  {
    message: "Bachira is 'devouring' all the execution time. The Microtask Queue is never empty.",
    isStuck: true,
    microTasks: ["Bachira: Devouring... (Infinite)"],
    taskQueue: ["UI: Redraw game board"],
    output: ["Isagi: Entering Flow State.", "Bachira: Devouring...", "Bachira: Devouring...", "Bachira: Devouring..."]
  },
  {
    message: "The Task Queue is starved! The UI never redraws, the buttons stop responding, and the page is now frozen.",
    isStuck: true,
    microTasks: ["Bachira: Devouring... (Infinite)"],
    taskQueue: ["UI: Redraw game board"],
    output: ["Isagi: Entering Flow State.", "Bachira: Devouring...", "Bachira: Devouring...", "Bachira: Devouring...", "Bachira: Devouring...", "Bachira: Devouring..."]
  }
]
