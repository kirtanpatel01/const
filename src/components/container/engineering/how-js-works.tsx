import { Link } from '@tanstack/react-router'
import { H3, P, Section } from '@/components/typography'
import CodeText from '@/components/code-text'
import Quote from '@/components/quote'

export function HowJsWorks() {
  return (
    <Section id="how-javascript-works">
      <Link to="/engineering" hash="how-javascript-works">
        <H3>How JavaScript works ?</H3>
      </Link>
      <P className="space-y-4">
        Now, I&apos;am not interested in explaing that basic execution of the <CodeText>JS</CodeText> file.
        <br />
        Like <i> Source Code -&gt; Parsing -&gt; Compilation(JIT) -&gt; Execution. </i>
        But I&apos;ll let you know little bit:
        <ul className="pl-4">
          <li><b>Step 1:</b> Source Code – The raw .js file is loaded into the engine.</li>
          <li><b>Step 2:</b> Parsing – The Parser breaks code into tokens and builds an Abstract Syntax Tree (AST).</li>
          <li><b>Step 3:</b> Compilation (JIT) – An interpreter (e.g., Ignition) converts the AST into Bytecode for immediate execution, while a Just-In-Time (JIT) Compiler (e.g., Turbofan) optimizes hot code paths.</li>
          <li><b>Step 4:</b> Execution – The code runs line-by-line within an Execution Context.</li>
        </ul>
        <Quote>Note: Above content is copied from Google AI Mode ;)</Quote>
      </P>
      <P>Let&apos;s understand how a js code executes!</P>
    </Section>
  )
}
