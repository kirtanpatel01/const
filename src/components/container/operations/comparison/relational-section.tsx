import { Monaco } from '@/components/monacco'
import { H3, P, Section } from '@/components/typography'
import { Link } from '@tanstack/react-router'

function RelationalSection() {
  return (
    <Section>
      <Link to="/operations" hash="relational-operators">
        <H3 id='relational-operators'>Relational Operators</H3>
      </Link>
      <P>
        Relational operators compare the size or relationship between two values. They include less than (&lt;), greater than (&gt;), less than or equal to (&lt;=), and greater than or equal to (&gt;=). These operators always return a boolean and work primarily with numbers.
      </P>
      <P>
        When comparing strings with relational operators, JavaScript compares them lexicographically (alphabetically). This means "a" is less than "b", and "apple" is less than "banana". Be careful when comparing strings and numbers mixed together, as type coercion can occur.
      </P>
      <Monaco initialCode={`// Numeric comparisons
const playerScore = 1500;
const achievementScore = 1000;

console.log(playerScore > achievementScore); // true
console.log(playerScore < achievementScore); // false
console.log(playerScore >= achievementScore); // true
console.log(playerScore <= achievementScore); // false

// String comparisons (lexicographic)
const swordA = "Zangetsu";
const swordB = "Mugetsu";

console.log(swordA > swordB); // true (Z comes after M)
console.log(swordA < swordB); // false

// Practical example: level gating
const playerLevel = 30;
const dungeonRequirement = 25;

if (playerLevel >= dungeonRequirement) {
  console.log("You can enter the dungeon");
}`} />
      <P>
        Relational operators are commonly used in game logic, age verification, score thresholds, and many other scenarios where you need to compare values on a scale. They are straightforward and work as you would expect from math.
      </P>
    </Section>
  )
}

export default RelationalSection
