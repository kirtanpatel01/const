import { Link } from '@tanstack/react-router'
import { H2, P, Section } from '@/components/typography'
import CodeText from '@/components/code-text'
import Quote from '@/components/quote'
import { Monaco } from '@/components/monacco'
import { StepVisualizer } from './step-visualizer'
import { loggingSteps, functionCallSteps, overflowSteps } from './steps'

export function CallStack() {
  return (
    <>
      <Link to="/engineering" hash="call-stack">
        <H2 id="call-stack">Call Stack</H2>
      </Link>

      <Section>
        <P>
          In previous sections we talked about execution context. But we haven&apos;t discussed how JavaScript actually executes the code. I said that JS engine executes the JS file line by line but now let&apos;s understand how that works.
        </P>
        <P>
          So, in JavaScript every line of code must go into the call stack to be executed. Now what is a call stack? It's just a stack which stores your code in a LIFO (Last In, First Out) manner. Means ? The last pushed code will be the first code to be executed. That we&apos;ll understand later for now, let&apos;s start with a simple example.
        </P>

        <Monaco
          initialCode={`console.log("I am Justice!");\n\nconsole.log("Shinzo wo Sasageyo!");\n\nconsole.log("Bankai, Tensa Zangetsu!")\n\nconsole.log("Rasengan!");`}
        />

        <P>The output is too easy to predict right ? Well yes! But let&apos;s understand how it internally works. The Global Execution Context is created first. Click <b>Next</b> to see the magic ✨</P>

        <StepVisualizer steps={loggingSteps} />

        <P>Till now we took simple oneline log statements. But what happens when we have multiple function calls ? That&apos;s where you&apos;ll see the LIFO principle of call stack in action.</P>

        <Monaco
          initialCode={`function rumbling() {\n  console.log("TATAKAE!");\n}\n\nfunction erenYeager() {\n  rumbling();\n  console.log("Freedom!");\n}\n\nfunction foundingTitan() {\n  erenYeager();\n  console.log("It is done.");\n}\n\nfoundingTitan();`}
        />

        <StepVisualizer steps={functionCallSteps} />

        <P>
          If you followed the visualizer above, you might have noticed something strange. We called <CodeText>foundingTitan()</CodeText> first, but it was actually the last one to finish. On the other hand, <CodeText>rumbling()</CodeText> was the last function called, but it was the first one to print its output and leave the stack. This is the fundamental way JavaScript manages multiple function calls.
        </P>
        <P>
          Think of the Call Stack like a stack of plates in a cafeteria 🍽️. When you add a new plate, it goes on top of the pile. To get to the bottom plate, you have to remove every other plate that was placed on top of it. In our example, when <CodeText>foundingTitan()</CodeText> calls <CodeText>erenYeager()</CodeText>, the engine has to pause and wait for <CodeText>erenYeager()</CodeText> to do its job. This chain continues until we hit the top of the stack.
        </P>
        <P>
          This behavior is what we call <CodeText className="text-primary font-bold">LIFO</CodeText> (Last In, First Out). The rule is simple: the last function that gets pushed onto the stack is always the first one that the engine executes and removes. This ensures that JavaScript maintains a strict, predictable order of execution and never loses track of where it needs to return once a function call is complete.
        </P>

        <Quote>
          In JavaScript, the depth of your stack is a map of how your program is currently thinking and what it&apos;s waiting for.
        </Quote>

        <P className='mt-8 font-bold text-lg'>Stack Overflow: When the stack breaks</P>
        <P>
          The Call Stack has a physical limit. It can only hold a certain amount of memory before it gives up. The most common way to hit this limit is through something called recursion—which is just a fancy word for a function calling itself.
        </P>

        <Monaco
          initialCode={`function shadowClone() {\n  shadowClone();\n}\n\nshadowClone();`}
        />

        <StepVisualizer steps={overflowSteps} />

        <P>
          In the code above, <CodeText>shadowClone()</CodeText> keeps calling itself over and over. It never reaches a point where it can stop and pop itself off the stack. Within milliseconds, thousands of frames are pushed onto the stack, and the browser has to kill the process to save your computer from freezing. This is exactly why you see the <CodeText className="text-destructive font-bold">Uncaught RangeError: Maximum call stack size exceeded</CodeText> in your console.
        </P>
      </Section>
    </>
  )
}
