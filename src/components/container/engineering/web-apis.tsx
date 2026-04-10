import { Link } from '@tanstack/react-router'
import { H2, H4, P, Section } from '@/components/typography'
import CodeText from '@/components/code-text'
import Quote from '@/components/quote'
import { Monaco } from '@/components/monacco'
import { IconArrowRight, IconDiamondsFilled } from '@tabler/icons-react'

export function WebApis() {
  return (
    <>
      <Link to="/engineering" hash="web-apis">
        <H2>Web APIs</H2>
      </Link>

      <Section id="web-apis">
        <P>So far everything made sense. JavaScript runs one thing at a time using the call stack. But now comes a problem.</P>

        <Monaco
          initialCode={`console.log("Start");\n\nsetTimeout(() => {\n  console.log("Inside Timeout");\n}, 2000);\n\nconsole.log("End");`}
        />

        <P>What do you think this will print?</P>
        <P className="bg-secondary/30 rounded-md px-3 py-2 w-fit font-mono">
          Output:
          <br />
          &gt; Start
          <br />
          &gt; End
          <br />
          &gt; Inside Timeout
        </P>

        <P>Wait… what? We gave 2 seconds delay. Shouldn&apos;t it wait? According to everything we learned, JS is single-threaded and runs line-by-line. So why didn&apos;t it pause?</P>

        <Quote className="text-red-500 font-medium">
          Here&apos;s the truth: <CodeText>setTimeout</CodeText> is NOT part of JavaScript.
        </Quote>

        <P>It sounds weird, but it&apos;s true. It&apos;s provided by the browser environment. These are called <CodeText className="text-primary font-bold">Web APIs</CodeText>.</P>

        <P>Let&apos;s trace the asynchronous flow:</P>

        <ul className="pl-8 space-y-2">
          <li className="flex items-center gap-2">
            <IconArrowRight size={16} className="text-primary" /> <CodeText>console.log("Start")</CodeText> → Runs immediately on stack
          </li>
          <li className="flex items-center gap-2">
            <IconArrowRight size={16} className="text-primary" /> <CodeText>setTimeout</CodeText> → Handed over to the <span className="text-primary font-medium">Browser</span>
          </li>
          <li className="flex items-center gap-2">
            <IconArrowRight size={16} className="text-primary" /> Browser starts a timer in the background → JS <span className="underline">does not wait</span>
          </li>
          <li className="flex items-center gap-2">
            <IconArrowRight size={16} className="text-primary" /> <CodeText>console.log("End")</CodeText> → Runs immediately on stack
          </li>
        </ul>

        <P className="mt-6">Meanwhile, the browser is handling the timer separately. After 2 seconds:</P>
        <ul className="pl-8 space-y-2">
          <li className="flex items-center gap-2">
            <IconArrowRight size={16} className="text-primary" /> The callback becomes &quot;ready&quot;
          </li>
          <li className="flex items-center gap-2 text-muted-foreground">
            <IconArrowRight size={16} className="text-muted" /> But it still doesn&apos;t run immediately on the stack!
          </li>
        </ul>

        <H4 className="mt-8 mb-2">The Golden Rule of the Stack:</H4>
        <Quote className="border-primary/50 bg-primary/5">
          Nothing enters the Call Stack unless it is completely <strong>EMPTY</strong>.
        </Quote>

        <P className="mt-4">So Web APIs don&apos;t execute your code. They just hold it... and wait for the right moment.</P>

        <P className="mt-6 italic flex items-center gap-2 text-muted-foreground">
          <IconDiamondsFilled size={14} className="text-primary" /> JavaScript doesn&apos;t handle <span className="text-primary">Async</span> work — the <span className="text-primary">Environment</span> does.
        </P>
      </Section>
    </>
  )
}
