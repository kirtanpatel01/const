import CodeText from '@/components/code-text'
import { Monaco } from '@/components/monacco'
import { H2, H3, P, Section } from '@/components/typography'
import { Link } from '@tanstack/react-router'

function Variables() {
  return (
    <div>
      <Link to="/fundamentals" hash="variables">
        <H2 id='variables'>Variables</H2>
      </Link>
      <Section>
        <P>
          Variables are like containers that hold data. They allow you to store and manipulate information in your code. In JavaScript, you can declare variables using three keywords: <CodeText>var</CodeText>, <CodeText>let</CodeText>, and <CodeText>const</CodeText>.
        </P>
        <P>
          The choice between these keywords depends on the use case. Generally, it is recommended to use <CodeText>const</CodeText> for variables that will not be reassigned, and <CodeText>let</CodeText> for variables that will be reassigned. The <CodeText>var</CodeText> keyword is considered outdated and should be avoided in modern JavaScript development.
        </P>
      </Section>

      {/* Now let's deep dive into each of these keywords and understand their differences and use cases in detail. */}
      <Section>
        <Link to="/fundamentals" hash="var">
          <H3 id='var'>var</H3>
        </Link>
        <P>
          The <CodeText>var</CodeText> keyword was the original way to declare variables in JavaScript. It has function scope, which means that a variable declared with <CodeText>var</CodeText> is accessible within the function it was declared in, and any nested functions. However, it does not have block scope, which can lead to unexpected behavior when used inside loops or conditional statements.
        </P>
        <P>
          Due to its quirks and potential for bugs, the use of <CodeText>var</CodeText> is generally discouraged in modern JavaScript development. Instead, it is recommended to use <CodeText>let</CodeText> and <CodeText>const</CodeText>, which provide better scoping rules and help prevent accidental variable reassignments.
        </P>
        <Monaco initialCode={`function captainArmy() {
  if (true) {
    var captainName = "Byakuya"; // function scope, not block scope
  }
  console.log(captainName); // "Byakuya" - accessible outside if block
}

captainArmy();`} />
        <P>
          In the example above, <CodeText>captainName</CodeText> is declared inside the <CodeText>if</CodeText> block with <CodeText>var</CodeText>, but it is still accessible outside that block. This happens because <CodeText>var</CodeText> has function scope, not block scope. This can be confusing and lead to bugs.
        </P>
      </Section>

      <Section>
        <Link to="/fundamentals" hash="let">
          <H3 id='let'>let</H3>
        </Link>
        <P>
          The <CodeText>let</CodeText> keyword was introduced in ES6 (ECMAScript 2015) as a modern way to declare variables. It has block scope, which means that a variable declared with <CodeText>let</CodeText> is only accessible within the block it was declared in, such as a loop or an if statement. This helps prevent unintended side effects and makes code easier to understand.
        </P>
        <P>
          Use <CodeText>let</CodeText> when you need to declare a variable that will be reassigned later in your code. For example, you might use <CodeText>let</CodeText> for loop counters or variables that will hold intermediate values during calculations.
        </P>
        <Monaco initialCode={`const soldiers = ["Eren", "Mikasa", "Armin"];

for (let i = 0; i < soldiers.length; i++) {
  console.log(soldiers[i]); // "Eren", "Mikasa", "Armin"
}

// console.log(i); // ReferenceError: i is not defined - block scope!
// Now replace the let with var keyword and try to run the code with uncommentting above line!`} />
        <P>
          Here, <CodeText>i</CodeText> is declared with <CodeText>let</CodeText> inside the <CodeText>for</CodeText> loop, so it only exists within that block. If you try to access <CodeText>i</CodeText> outside the loop, you get a <CodeText>ReferenceError</CodeText>. This block scope prevents accidental usage of loop variables elsewhere.
        </P>
      </Section>

      <Section>
        <Link to="/fundamentals" hash="const">
          <H3 id='const'>const</H3>
        </Link>
        <P>
          The <CodeText>const</CodeText> keyword was also introduced in ES6 and is used to declare variables that cannot be reassigned after their initial assignment. However, it is important to note that while the variable itself cannot be reassigned, the contents of the variable can still be modified if it is an object or an array.
        </P>
        <P>
          Use <CodeText>const</CodeText> when you want to declare a variable that should not be reassigned. This can help prevent bugs and make your code more predictable. For example, you might use <CodeText>const</CodeText> for configuration values, function references, or any data that should remain constant throughout the execution of your program.
        </P>
        <Monaco initialCode={`const notebook = {
  owner: "Light",
  kills: 0
};

notebook.kills = 100; // modify the object contents
console.log(notebook.kills); // 100 - allowed

// notebook = {}; // TypeError - cannot reassign the variable`} />
        <P>
          In this example, <CodeText>notebook</CodeText> is declared with <CodeText>const</CodeText>. You cannot reassign the variable itself, but you can change its properties. The variable reference stays the same, but the data inside it can change.
        </P>
      </Section>
    </div>
  )
}

export default Variables