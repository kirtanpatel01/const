import { Monaco } from '@/components/monacco'
import { H3, P, Section } from '@/components/typography'
import { Link } from '@tanstack/react-router'

function EqualitySection() {
  return (
    <Section>
      <Link to="/operations" hash="equality-operators">
        <H3 id='equality-operators'>Equality Operators</H3>
      </Link>
      <P>
        Equality operators compare values to see if they are the same. JavaScript has two types: loose equality (==) and strict equality (===). The key difference is that loose equality performs type coercion, while strict equality does not.
      </P>
      <P>
        Strict equality (===) is always recommended because it avoids unexpected type conversions. Type coercion can lead to confusing bugs that are hard to track down. When loose equality converts types, it can produce surprising results.
      </P>
      <Monaco initialCode={`// Loose equality (==) - type coercion happens
console.log(5 == "5"); // true (string converts to number)
console.log(0 == false); // true (false converts to 0)
console.log(null == undefined); // true (special case)

// Strict equality (===) - no type coercion
console.log(5 === "5"); // false (different types)
console.log(0 === false); // false (different types)
console.log(null === undefined); // false (different types)`} />
      <P>
        Always use strict equality (===) in modern JavaScript. It is more predictable and prevents bugs caused by unexpected type conversions. Think of it as saying "are these values exactly the same in both type and value?" rather than "can I make these values look the same?"
      </P>
    </Section>
  )
}

export default EqualitySection
