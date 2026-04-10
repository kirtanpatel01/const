import { Link } from '@tanstack/react-router'
import { H2, H4, P, Section } from '@/components/typography'
import CodeText from '@/components/code-text'
import Quote from '@/components/quote'
import { Monaco } from '@/components/monacco'
import { IconArrowRight, IconDiamondsFilled } from '@tabler/icons-react'

export function MicrotaskQueue() {
  return (
    <>
      <Link to="/engineering" hash="microtask-queue">
        <H2>Microtask Queue (Promises)</H2>
      </Link>

      <Section id="microtask-queue">
        <P>So far, everything async was going into the Task Queue. But now let’s introduce something new: <CodeText>Promise</CodeText>.</P>

        <Monaco
          initialCode={`console.log("Start");\n\nsetTimeout(() => {\n  console.log("Timeout");\n}, 0);\n\nPromise.resolve().then(() => {\n  console.log("Promise");\n});\n\nconsole.log("End");`}
        />

        <P>Now think carefully… what will be the output?</P>
        <P className="bg-secondary/30 rounded-md px-3 py-2 w-fit font-mono">
          Output:
          <br />
          &gt; Start
          <br />
          &gt; End
          <br />
          &gt; Promise
          <br />
          &gt; Timeout
        </P>

        <P className="mt-4">Wait… why did <CodeText>Promise</CodeText> run before <CodeText>setTimeout</CodeText>? Both are async, right? This is where things change.</P>

        <Quote className="border-indigo-500/50 bg-indigo-500/5">
          Promises do <strong>NOT</strong> go into the Task Queue.
        </Quote>

        <P className="mt-4">They go into a special, higher-priority waiting area called the <CodeText className="text-primary font-bold">Microtask Queue</CodeText>.</P>

        <div className="grid md:grid-cols-2 gap-4 my-6">
          <div className="p-4 bg-secondary/10 border rounded-xl space-y-2">
            <P className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Priority: Low</P>
            <H4 className="text-primary">Task Queue</H4>
            <ul className="text-sm space-y-1 opacity-80">
              <li>• setTimeout</li>
              <li>• setInterval</li>
            </ul>
          </div>
          <div className="p-4 bg-primary/10 border border-primary/30 rounded-xl space-y-2">
            <P className="text-xs uppercase tracking-widest text-primary font-bold">Priority: High ⚡</P>
            <H4 className="text-primary font-bold">Microtask Queue</H4>
            <ul className="text-sm space-y-1">
              <li>• Promises</li>
              <li>• .then() / .catch()</li>
              <li>• queueMicrotask()</li>
            </ul>
          </div>
        </div>

        <H4 className="mt-8 mb-2">The Priority Rule:</H4>
        <Quote className="border-primary/50 text-primary font-medium">
          Microtask Queue always runs <strong>BEFORE</strong> the Task Queue.
        </Quote>

        <P className="mt-6">Let&apos;s replay what actually happened:</P>
        <ul className="pl-8 space-y-2">
          <li className="flex items-center gap-2">
            <IconArrowRight size={16} className="text-primary" /> <CodeText>Start</CodeText> → Runs immediately
          </li>
          <li className="flex items-center gap-2">
            <IconArrowRight size={16} className="text-primary" /> <CodeText>setTimeout</CodeText> → Handed over → Goes to Task Queue
          </li>
          <li className="flex items-center gap-2">
            <IconArrowRight size={16} className="text-primary" /> <CodeText>Promise</CodeText> → Goes to <span className="text-primary font-bold">Microtask Queue</span>
          </li>
          <li className="flex items-center gap-2">
            <IconArrowRight size={16} className="text-primary" /> <CodeText>End</CodeText> → Runs immediately
          </li>
        </ul>

        <P className="mt-6">Now the Call Stack is empty. JavaScript checks:</P>
        <ul className="pl-8 space-y-2">
          <li className="flex items-center gap-2 font-bold text-primary">
            <IconArrowRight size={16} /> Microtask Queue first ✅
          </li>
          <li className="flex items-center gap-2 text-muted-foreground opacity-50">
            <IconArrowRight size={16} /> Task Queue later
          </li>
        </ul>

        <P className="mt-8 italic flex items-center gap-2 text-muted-foreground border-t pt-4">
          <IconDiamondsFilled size={14} className="text-primary" /> Not all async tasks are equal — <span className="text-primary">Promises cut the line.</span>
        </P>
      </Section>
    </>
  )
}
