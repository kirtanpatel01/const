import { Link } from '@tanstack/react-router'
import { H2, P, Section } from '@/components/typography'
import CodeText from '@/components/code-text'
import Quote from '@/components/quote'
import { Monaco } from '@/components/monacco'
import { MicroVisualizer } from './visualizer'
import { microTaskSteps } from './steps'

export function MicrotaskQueue() {
  return (
    <>
      <Link to="/engineering" hash="micro-task-queue">
        <H2 id="micro-task-queue">Microtask Queue</H2>
      </Link>

      <Section>
        <P>
          In the previous section, we saw how the Task Queue handles our callbacks. But in modern JavaScript, not all tasks are treated equally. Some tasks have a "VIP pass" that lets them skip the line. This secret line is called the <CodeText className="text-primary font-bold">Microtask Queue</CodeText>.
        </P>

        <Monaco
          initialCode={`console.log("Ichigo: Bankai!");\n\nsetTimeout(() => {\n  console.log("Kon: Stop ignoring me!");\n}, 0);\n\nPromise.resolve().then(() => {\n  console.log("Zangetsu: I am the blade.");\n});\n\nconsole.log("Aizen: ...under the impression?");`}
        />

        <P>
          If you look at this code, both the <CodeText>setTimeout</CodeText> and the <CodeText>Promise</CodeText> are ready almost instantly. But if you run it, you will notice that Zangetsu speaks before Kon, every single time. This happens because the Event Loop follows a very strict priority rule.
        </P>

        <MicroVisualizer steps={microTaskSteps} />

        <P>
          As the visualization shows, the Event Loop works like a very biased guard. Every time the Call Stack becomes empty, it first looks at the Microtask Queue. If there is anything there, it executes the *entire* queue before even glancing at the Task Queue. This is why Promises always finish before timers, even if the timer has 0 delay.
        </P>

        <Quote>
          Microtasks include things like Promise callbacks, <CodeText>MutationObserver</CodeText>, and <CodeText>queueMicrotask()</CodeText>. Standard tasks include <CodeText>setTimeout</CodeText>, <CodeText>setInterval</CodeText>, and DOM events.
        </Quote>

        <P className="mt-4">
          Understanding this priority is the key to writing predictable asynchronous code. If you keep adding new items to the Microtask Queue, you can actually "starve" the Task Queue, preventing things like UI updates or setTimeouts from ever running.
        </P>

        <div className="my-8 overflow-hidden rounded-xl border border-dashed bg-zinc-50 dark:bg-zinc-900/40">
          <table className="w-full text-left text-sm">
            <thead className="border-b bg-white dark:bg-zinc-900/80">
              <tr>
                <th className="px-6 py-4 font-semibold text-zinc-900 dark:text-zinc-100">Queue Type</th>
                <th className="px-6 py-4 font-semibold text-zinc-900 dark:text-zinc-100">Common Sources</th>
                <th className="px-6 py-4 font-semibold text-zinc-900 dark:text-zinc-100">Priority</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-dashed">
              <tr className="hover:bg-zinc-100 dark:hover:bg-white/5 transition-colors">
                <td className="px-6 py-4 font-medium text-pink-600 dark:text-pink-400">Microtask Queue</td>
                <td className="px-6 py-4 text-zinc-600 dark:text-zinc-400">
                  <div className="flex flex-wrap gap-1.5">
                    <code className="bg-pink-500/10 px-1.5 py-0.5 rounded text-xs">Promises</code>
                    <code className="bg-pink-500/10 px-1.5 py-0.5 rounded text-xs">async/await</code>
                    <code className="bg-pink-500/10 px-1.5 py-0.5 rounded text-xs">queueMicrotask()</code>
                    <code className="bg-pink-500/10 px-1.5 py-0.5 rounded text-xs">MutationObserver</code>
                  </div>
                </td>
                <td className="px-6 py-4 text-zinc-500 italic">High (Runs right after stack)</td>
              </tr>
              <tr className="hover:bg-zinc-100 dark:hover:bg-white/5 transition-colors">
                <td className="px-6 py-4 font-medium text-amber-600 dark:text-amber-400">Task Queue</td>
                <td className="px-6 py-4 text-zinc-600 dark:text-zinc-400">
                   <div className="flex flex-wrap gap-1.5">
                    <code className="bg-amber-500/10 px-1.5 py-0.5 rounded text-xs">setTimeout</code>
                    <code className="bg-amber-500/10 px-1.5 py-0.5 rounded text-xs">setInterval</code>
                    <code className="bg-amber-500/10 px-1.5 py-0.5 rounded text-xs">DOM Events</code>
                    <code className="bg-amber-500/10 px-1.5 py-0.5 rounded text-xs">setImmediate</code>
                  </div>
                </td>
                <td className="px-6 py-4 text-zinc-500 italic">Low (Waits for microtasks)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <P>
          In short, always remember the "biased guard" rule. The Event Loop will drain the entire Microtask Queue before it even considers the first item in the Task Queue. This is why some things in your app might feel faster than others.
        </P>
      </Section>
    </>
  )
}
