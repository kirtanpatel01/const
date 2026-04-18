import { Monaco } from '@/components/monacco'
import { H3, P, Section } from '@/components/typography'
import { Link } from '@tanstack/react-router'

function LogicalSection() {
  return (
    <Section>
      <Link to="/operations" hash="logical-operators">
        <H3 id='logical-operators'>Logical Operators</H3>
      </Link>
      <P>
        In real code, comparisons are often used together with logical operators to check multiple conditions at once. You might check if a value is within a range, if a user has the right permissions, or if a game state is valid.
      </P>
      <P>
        Understanding how to combine comparisons with logical operators (&&, ||, !) makes your conditions clear and your code more maintainable. Always read your conditions out loud to make sure they say what you intend.
      </P>
      <Monaco initialCode={`// Range checking
const userAge = 18;
const minAge = 13;
const maxAge = 65;

if (userAge >= minAge && userAge <= maxAge) {
  console.log("User is in valid age range");
}

// Permission checking
const isAdmin = true;
const isModerator = false;

if (isAdmin || isModerator) {
  console.log("User has moderation rights");
}

// Game state example
const playerHealth = 50;
const playerMana = 25;
const enemyHealth = 10;

if (playerHealth > 30 && playerMana >= 20) {
  console.log("Can cast power spell");
}

if (enemyHealth <= 0 || playerHealth <= 0) {
  console.log("Battle ended");
}`} />
      <P>
        These patterns show how comparisons become the building blocks of your program logic. The more you practice combining them, the more naturally they will flow in your code.
      </P>
    </Section>
  )
}

export default LogicalSection
