import { Link } from '@tanstack/react-router'
import { H2, H4, P, Section } from '@/components/typography'
import CodeText from '@/components/code-text'
import Quote from '@/components/quote'
import { IconArrowRight, IconDiamondsFilled } from '@tabler/icons-react'

export function EventLoop() {
  return (
    <>
      <Link to="/engineering" hash="event-loop">
        <H2>Event Loop</H2>
      </Link>

      <Section id="event-loop">
        <P>So now we have all the pieces of the puzzle:</P>
        <div className="flex flex-wrap gap-2 my-4">
          {['Call Stack', 'Web APIs', 'Task Queue', 'Microtask Queue'].map((item) => (
            <span key={item} className="px-3 py-1 bg-secondary/20 border border-dashed rounded-full text-xs font-mono">{item}</span>
          ))}
        </div>

        <P>But one big question is still unanswered: Who decides when something from the queue goes into the Call Stack?</P>
        <P>Because queues are just waiting—they don&apos;t execute themselves. This is where the <CodeText className="text-primary font-bold underline underline-offset-4 decoration-primary/30">Event Loop</CodeText> comes in.</P>

        <P className="mt-6">Think of it like a <strong>gatekeeper</strong>. Its job is incredibly simple but crucial:</P>

        <ul className="pl-8 space-y-2">
          <li className="flex items-center gap-2">
            <IconArrowRight size={16} className="text-primary" /> Keep checking if the <span className="text-primary font-medium">Call Stack</span> is empty
          </li>
          <li className="flex items-center gap-2">
            <IconArrowRight size={16} className="text-primary" /> If empty, allow tasks to enter the stack
          </li>
        </ul>

        <H4 className="mt-8 mb-2">The Hierarchy of Execution:</H4>
        <ul className="pl-10 list-decimal space-y-2 marker:text-primary font-medium">
          <li>Check Microtask Queue (Run everything)</li>
          <li>Check Task Queue (Run one task)</li>
        </ul>

        <P className="mt-8">Let&apos;s replay our final trace:</P>

        <ul className="pl-8 space-y-2">
          <li className="flex items-center gap-2 font-medium">
            <IconArrowRight size={16} className="text-primary" /> Call Stack is empty... Event Loop wakes up 👀
          </li>
        </ul>

        <div className="my-6 ml-8 p-4 border-l-2 border-primary/30 space-y-4 bg-secondary/5">
          <div className="space-y-2">
            <P className="text-xs uppercase tracking-tighter text-muted-foreground">Step 1: The Microtasks</P>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <IconArrowRight size={14} className="text-primary" /> Finds <CodeText>Promise</CodeText> in Microtask Queue
              </li>
              <li className="flex items-center gap-2">
                <IconArrowRight size={14} className="text-primary" /> Pushes it to Call Stack → Executes it
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <P className="text-xs uppercase tracking-tighter text-muted-foreground">Step 2: The Tasks</P>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <IconArrowRight size={14} className="text-primary" /> Microtask Queue is now empty
              </li>
              <li className="flex items-center gap-2 font-bold text-primary">
                <IconArrowRight size={14} /> Moves to Task Queue
              </li>
              <li className="flex items-center gap-2">
                <IconArrowRight size={14} className="text-primary" /> Finds <CodeText>setTimeout</CodeText> → Pushes to Stack → Executes it
              </li>
            </ul>
          </div>
        </div>

        <P className="mt-6">That&apos;s why the output always follows this rhythm:</P>
        <P className="bg-secondary/30 rounded-md px-3 py-2 w-fit font-mono text-primary">
          &gt; Start &gt; End &gt; Promise &gt; Timeout
        </P>

        <Quote className="mt-10 border-primary bg-primary/5 text-primary-foreground font-medium">
          The Event Loop isn&apos;t executing code — it&apos;s the heartbeat of the browser, deciding exactly <i>when</i> each piece of code gets its turn.
        </Quote>

        <P className="mt-8 pt-4 border-t border-muted italic flex items-center gap-2 text-muted-foreground">
          <IconDiamondsFilled size={14} className="text-primary" /> Memory sets the stage. Stack plays the scene. Event Loop keeps the show running.
        </P>
      </Section>
    </>
  )
}
