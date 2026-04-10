import { Link } from '@tanstack/react-router'
import { H2, P, Section } from '@/components/typography'
import CodeText from '@/components/code-text'
import Quote from '@/components/quote'
import { Monaco } from '@/components/monacco'
import { IconArrowRight, IconDiamondsFilled } from '@tabler/icons-react'

export function Starvation() {
  return (
    <>
      <Link to="/engineering" hash="starvation">
        <H2>Starvation</H2>
      </Link>

      <Section id="starvation">
        <P>So far everything looks perfect. The Call Stack runs code, the Event Loop manages execution, and priorities are set. Clean system… right? Let&apos;s break it.</P>

        <Monaco
          initialCode={`function loop() {\n  Promise.resolve().then(loop);\n}\n\nloop();\n\nsetTimeout(() => {\n  console.log("Timeout");\n}, 0);`}
        />

        <P>What do you think will happen? Will the timeout ever trigger?</P>
        <P className="bg-red-500/10 text-red-500 rounded-md px-3 py-2 w-fit font-mono font-bold border border-red-500/20">
          Result: System Freezes 🧊
        </P>

        <P className="mt-4">Wait… why didn&apos;t <CodeText>setTimeout</CodeText> run? Even with 0ms delay? Let&apos;s trace the recursion:</P>

        <div className="my-6 border-l-2 border-red-500/30 ml-8 p-4 bg-red-500/5 space-y-3">
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <IconArrowRight size={16} className="text-red-500" /> <CodeText>loop()</CodeText> runs and adds a <span className="text-red-500">Microtask</span>
            </li>
            <li className="flex items-center gap-2">
              <IconArrowRight size={16} className="text-red-500" /> Stack clears → Event Loop runs the Microtask
            </li>
            <li className="flex items-center gap-2">
              <IconArrowRight size={16} className="text-red-500" /> Microtask calls <CodeText>loop()</CodeText> again → Adds another <span className="text-red-500 font-bold">Microtask</span>
            </li>
            <li className="flex items-center gap-2 italic text-muted-foreground">
              <IconArrowRight size={16} /> The Microtask Queue is NEVER empty...
            </li>
          </ul>
        </div>

        <Quote className="border-red-500/50 bg-red-500/5">
          The Event Loop <strong>never gets a chance</strong> to check the Task Queue because it is stuck processing an infinite stream of Microtasks.
        </Quote>

        <P className="mt-6">This situation is called <CodeText className="text-red-500 font-bold uppercase tracking-widest bg-red-500/10 px-2">Starvation</CodeText>.</P>

        <P>One queue consumes all execution time, leaving other tasks (and the browser&apos;s UI) completely blocked. It&apos;s not that JavaScript is slow; it&apos;s just being too loyal to its priority rules.</P>

        <Quote className="mt-8 border-primary text-primary font-medium">
          High priority doesn&apos;t mean safe — it can block the entire universe if not handled carefully.
        </Quote>

        <P className="mt-8 pt-4 border-t border-muted italic flex items-center gap-2 text-muted-foreground">
          <IconDiamondsFilled size={14} className="text-primary" /> This completes our journey through the JS Engine internals. Stay curious.
        </P>
      </Section>
    </>
  )
}
