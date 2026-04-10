import { Link } from '@tanstack/react-router'
import { H2, P, Section } from '@/components/typography'
import CodeText from '@/components/code-text'
import Quote from '@/components/quote'
import { Monaco } from '@/components/monacco'
import { IconArrowRight } from '@tabler/icons-react'

export function TaskQueue() {
  return (
    <>
      <Link to="/engineering" hash="task-queue">
        <H2>Task Queue (Callback Queue)</H2>
      </Link>

      <Section id="task-queue">
        <P>So the browser handled <CodeText>setTimeout</CodeText> and the timer finished. Now the callback is ready to run, but here’s the catch:</P>
        <Quote className="border-amber-500/50 bg-amber-500/5">
          It <strong>STILL</strong> doesn’t go directly into the call stack.
        </Quote>

        <P className="mt-4">Wait… why? Let’s break it again with a <CodeText>0ms</CodeText> delay:</P>

        <Monaco
          initialCode={`console.log("Start");\n\nsetTimeout(() => {\n  console.log("Timeout");\n}, 0);\n\nconsole.log("End");`}
        />

        <P>Delay is 0… so it should run instantly, right?</P>
        <P className="bg-secondary/30 rounded-md px-3 py-2 w-fit font-mono">
          Output:
          <br />
          &gt; Start
          <br />
          &gt; End
          <br />
          &gt; Timeout
        </P>

        <P className="mt-4">Even with <CodeText>0ms</CodeText>, it didn&apos;t run immediately. That&apos;s because Web APIs send the callback to a waiting area first:</P>
        <P className="text-center py-4 my-2 bg-primary/10 border border-dashed border-primary/30 rounded-lg font-bold text-primary tracking-widest uppercase">
          Task Queue (Callback Queue)
        </P>

        <P className="mt-4">Think of it like a <strong>line outside a club</strong> 🕺. Everyone is waiting, but no one can enter yet. The flow now looks like this:</P>

        <ul className="pl-8 space-y-2">
          <li className="flex items-center gap-2">
            <IconArrowRight size={16} className="text-primary" /> Call Stack runs <CodeText>console.log("Start")</CodeText>
          </li>
          <li className="flex items-center gap-2">
            <IconArrowRight size={16} className="text-primary" /> <CodeText>setTimeout</CodeText> goes to Web APIs
          </li>
          <li className="flex items-center gap-2">
            <IconArrowRight size={16} className="text-primary" /> Timer finishes → Callback pushed to <span className="text-primary font-bold">Task Queue</span>
          </li>
          <li className="flex items-center gap-2">
            <IconArrowRight size={16} className="text-primary" /> Call Stack runs <CodeText>console.log("End")</CodeText>
          </li>
        </ul>

        <P className="mt-6">Now the callback is just… waiting. It cannot enter the stack by itself. It needs <strong>permission</strong>. And who gives that permission?</P>
        <P className="flex items-center gap-2 text-primary font-bold text-lg">
          <IconArrowRight size={20} /> Event Loop <span className="text-sm font-normal text-muted-foreground opacity-50">(Coming next...)</span>
        </P>

        <div className="mt-8 p-4 bg-secondary/20 rounded-xl border border-dashed space-y-3">
          <P className="font-bold">Key Takeaways:</P>
          <ul className="pl-6 list-disc space-y-2 marker:text-primary">
            <li>Web APIs handle the background work</li>
            <li>Completed callbacks go to the <strong>Task Queue</strong></li>
            <li>They wait there until the Call Stack is completely empty</li>
          </ul>
        </div>

        <Quote className="mt-6 italic border-primary/50 text-muted-foreground">
          <CodeText className="text-primary not-italic">setTimeout(0)</CodeText> doesn&apos;t mean &quot;run now&quot; — it means &quot;run later when possible&quot;.
        </Quote>
      </Section>
    </>
  )
}
