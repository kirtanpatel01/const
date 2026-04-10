import { Link } from '@tanstack/react-router'
import { H2, H4, P, Section } from '@/components/typography'
import CodeText from '@/components/code-text'
import Quote from '@/components/quote'
import { Monaco } from '@/components/monacco'
import { IconDiamondsFilled } from '@tabler/icons-react'
import { WebApiVisualizer } from './visualizer'
import { webApiSteps } from './steps'

export function WebApis() {
  return (
    <>
      <Link to="/engineering" hash="web-apis">
        <H2 id="web-apis">Web APIs</H2>
      </Link>

      <Section>
        <P>
          So far, everything we discussed follows a simple rule. JavaScript runs one thing at a time using the Call Stack. But when we introduce a delay, that simple logic seems to break. 
        </P>

        <Monaco
          initialCode={`console.log("Start the Rumbling!");\n\nsetTimeout(() => {\n  console.log("TATAKAE!");\n}, 2000);\n\nconsole.log("End of the world.");`}
        />

        <P>
          If you run this code, you might expect the engine to wait for 2 seconds at the second line. But in reality, it prints "Start," then "End," and only then does "TATAKAE!" show up. According to everything we know, JavaScript should stay on that second line until it finishes. So why did it just skip the delay?
        </P>

        <Quote className="text-red-500 font-medium">
          The truth is that <CodeText>setTimeout</CodeText> is not actually part of the JavaScript language.
        </Quote>

        <P>
          It sounds like a trick, but it is true. Functions like <CodeText>setTimeout</CodeText>, <CodeText>fetch</CodeText>, or even <CodeText>localStorage</CodeText> are not built into the engine itself. They are provided by the browser environment. We call these <CodeText className="text-primary font-bold">Web APIs</CodeText>. They exist outside of the Call Stack and they are the secret to how JavaScript handles asynchronous tasks without freezing up.
        </P>

        <WebApiVisualizer steps={webApiSteps} />

        <P>
          As you can see in the visualization, when the engine hits <CodeText>setTimeout</CodeText>, it doesn&apos;t wait. Instead, it offloads the timer to the Web API environment and immediately moves to the next line of code. This is why "End of the world" prints before the timer even finishes. 
        </P>

        <H4 className="mt-8 mb-2">The Golden Rule of the Stack</H4>
        <Quote className="border-primary/50 bg-primary/5">
          Nothing enters the Call Stack unless it is completely EMPTY.
        </Quote>

        <P className="mt-4">
          The Web API environments are like a waiting room. They hold your callbacks and timers in the background so the main thread can keep moving. They don&apos;t execute your code themselves. They just hold onto it and wait for the perfect moment to send it back to the stack.
        </P>

        <P className="mt-6 italic flex items-center gap-2 text-muted-foreground font-medium">
          <IconDiamondsFilled size={14} className="text-primary" /> 
          JavaScript handles the logic, but the environment handles the waiting.
        </P>
      </Section>
    </>
  )
}
