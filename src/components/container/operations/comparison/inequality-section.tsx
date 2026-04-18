import { Monaco } from '@/components/monacco'
import { H3, P, Section } from '@/components/typography'
import { Link } from '@tanstack/react-router'

function InequalitySection() {
  return (
    <Section>
      <Link to="/operations" hash="inequality-operators">
        <H3 id='inequality-operators'>Inequality Operators</H3>
      </Link>
      <P>
        Inequality operators check if two values are not equal. Like equality operators, JavaScript has both loose (!= ) and strict (!==) versions. Strict inequality (!==) is the opposite of strict equality (===), and loose inequality (!=) is the opposite of loose equality (==).
      </P>
      <P>
        You should use strict inequality (!==) in the same way you use strict equality. It ensures you are checking the type as well as the value, making your comparisons safe and predictable.
      </P>
      <Monaco initialCode={`// Loose inequality (!=) - type coercion happens
console.log(5 != "5"); // false (string converts, they are equal)
console.log(0 != false); // false (false converts to 0)

// Strict inequality (!==) - no type coercion
console.log(5 !== "5"); // true (different types, so not equal)
console.log(0 !== false); // true (different types, so not equal)

const playerLevel = 25;
const maxLevel = "50";

if (playerLevel !== maxLevel) {
  console.log("Level and maxLevel are different"); // This logs
}`} />
      <P>
        In the example above, if we had used loose inequality (!=), it might have produced unexpected results due to type coercion. With strict inequality (!==), we are guaranteed that both type and value are compared correctly.
      </P>
    </Section>
  )
}

export default InequalitySection
