import { Link } from '@tanstack/react-router'
import { H2, P, Section } from '@/components/typography'
import CodeText from '@/components/code-text'
import Quote from '@/components/quote'

export function GlobalExecutionContext() {
  return (
    <>
      <Link to="/engineering" hash="global-execution-context">
        <H2 id="global-execution-context">Global Execution Context</H2>
      </Link>
      <Section>
        <P>
          Whenever we run any js file it creates a global context for that file in which all the lines of code will executed one by one. For every execution there is single global context. Which is called as <CodeText>Global Execution Context</CodeText>.
          <Quote>From now on we'll call it as GEC.</Quote>
          So this context is created by javascript engine. Now this GEC is not a single entity. It has two parts:
          <ol className="pl-8 list-decimal">
            <li>Memory Creation Phase</li>
            <li>Code Execution Phase</li>
          </ol>
        </P>
      </Section>
    </>
  )
}
