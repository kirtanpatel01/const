import { Link } from '@tanstack/react-router'
import { H2, P, Section } from '@/components/typography'
import CodeText from '@/components/code-text'
import Quote from '@/components/quote'
import { Monaco } from '@/components/monacco'
import { StarvationVisualizer } from './visualizer'
import { starvationSteps } from './steps'

export function Starvation() {
  return (
    <>
      <Link to="/engineering" hash="starvation">
        <H2 id="starvation">Starvation</H2>
      </Link>

      <Section>
        <P>
          The priority of the Microtask Queue is a powerful tool, but it is also a dangerous one. Because the Event Loop will not move to the Task Queue until the Microtask Queue is completely empty, it is possible to create a loop that never ends. This is what we call <CodeText className="text-primary font-bold">Starvation</CodeText>.
        </P>

        <P>
          In typical Blue Lock fashion, if one "egoist" player decides to keep the ball forever, the rest of the team never gets a chance to play.
        </P>

        <Monaco
          initialCode={`// Warning: Running this in a real browser will freeze the tab\nfunction devour() {\n  Promise.resolve().then(() => {\n    console.log("Bachira: Devoured.");\n    devour(); // Recursive Call\n  });\n}\n\ndevour();\n\nsetTimeout(() => {\n  console.log("UI: This will never log.");\n}, 0);`}
        />

        <P>
          When you call a function recursively using a Promise, you are adding a new item to the Microtask Queue before the current one even finished. Since the Microtask Queue is never empty, the Event Loop stays stuck in that one spot forever.
        </P>

        <StarvationVisualizer steps={starvationSteps} />

        <P>
          In the visualization above, you can see how the Task Queue (the amber box) is completely ignored. Because the browser handles UI updates, like redrawing a button or processing a click, using the Task Queue, your entire application becomes completely unresponsive. This is exactly why you should be very careful when chaining Promises or using recursion in an asynchronous context.
        </P>

        <Quote>
          Starvation is essentially a deadlock for the Event Loop. You haven&apos;t crashed the program, but you have prevented it from ever doing anything new.
        </Quote>

        <P className="mt-4">
          This brings our journey through the internal workings of JavaScript to an end. From the Global Execution Context to the Event Loop, you now see how every single line of code is orchestrated by a system that is both incredibly simple and brutally efficient.
        </P>
      </Section>
    </>
  )
}
