import CodeText from '@/components/code-text'
import EqualitySection from '@/components/container/operations/comparison/equality-section'
import InequalitySection from '@/components/container/operations/comparison/inequality-section'
import LogicalSection from '@/components/container/operations/comparison/logical-section'
import RelationalSection from '@/components/container/operations/comparison/relational-section'
import Quote from '@/components/quote'
import { H2, P, Section } from '@/components/typography'
import { Link } from '@tanstack/react-router'

function Comparision() {
  return (
    <div>
      <Link to="/operations" hash="comparison-operators">
        <H2 id='comparison-operators'>Comparison Operators</H2>
      </Link>
      <Section>
        <P>
          Comparison operators are used to compare two values and return a boolean result: <CodeText>true</CodeText> or <CodeText>false</CodeText>. These operators are fundamental in decision-making and control flow, allowing your code to react differently based on conditions.
        </P>
        <P>
          There are several comparison operators in JavaScript, each serving a specific purpose. Understanding the difference between them, especially between loose equality (==) and strict equality (===), is crucial for writing bug-free code.
        </P>
      </Section>
      <EqualitySection />
      <InequalitySection />
      <RelationalSection />
      <LogicalSection />

      <Section>
        <P>
          Comparison operators are one of the most used tools in programming. They let your code make decisions and react to different situations. Always use strict equality (===) and strict inequality (!==) to avoid bugs, and combine comparisons thoughtfully to express your logic clearly.
        </P>

        <Quote>
          A comparison is your code asking a question. Make sure the question is precise and the answer is always what you expect.
        </Quote>
      </Section>
    </div>
  )
}

export default Comparision