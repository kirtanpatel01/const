import { Link } from '@tanstack/react-router'
import { H2, P, Section } from '@/components/typography'
import CodeText from '@/components/code-text'
import Quote from '@/components/quote'
import { Monaco } from '@/components/monacco'
import { TaskVisualizer } from './visualizer'
import { taskQueueSteps } from './steps'

export function TaskQueue() {
  return (
    <>
      <Link to="/engineering" hash="task-queue">
        <H2 id="task-queue">Task Queue</H2>
      </Link>

      <Section>
        <P>
          We know that Web APIs handle the waiting for us in the background. But once a timer finishes or a network request returns data, where does that code go? It cannot jump directly into the Call Stack because that might interrupt a function that is already running.
        </P>

        <P>
          Instead, the browser moves the finished task into a staging area. This is what we call the <CodeText className="text-primary font-bold">Task Queue</CodeText> (or the Callback Queue).
        </P>

        <Monaco
          initialCode={`console.log("Light: I'll take a potato chip...");\n\nsetTimeout(() => {\n  console.log("Light: AND EAT IT!");\n}, 0);\n\nconsole.log("L: 👁️‍🗨️ Watching closely.");`}
        />

        <P>
          In this example, we set the delay to <CodeText>0ms</CodeText>. You might think this means it should run immediately, right between the other two logs. But if you run it, you&apos;ll see that the "AND EAT IT!" log still comes last. Even with zero delay, the callback is forced to go through the Task Queue.
        </P>

        <TaskVisualizer steps={taskQueueSteps} />

        <P>
          The visualization above tracks how the callback moves. Notice that as soon as <CodeText>setTimeout</CodeText> is called, the timer finishes instantly. But instead of jumping back to the stack, the callback is pushed into the Task Queue. It stays there, waiting for those few milliseconds until the rest of the main code finishes and the Call Stack is completely empty.
        </P>

        <Quote>
          The Task Queue is a FIFO (First In, First Out) structure. The first task that enters the queue is the first one that gets sent to the stack once the coast is clear.
        </Quote>

        <P className="mt-4">
          This staging area is why your `setTimeout` might sometimes take a bit longer than the time you specified. If the Call Stack is busy with a heavy loop, your callback will be stuck in the Task Queue until that work is done. It is not a guarantee of execution time; it is a guarantee of the *minimum* wait time.
        </P>
      </Section>
    </>
  )
}
