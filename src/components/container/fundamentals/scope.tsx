import CodeText from '@/components/code-text'
import { Monaco } from '@/components/monacco'
import Quote from '@/components/quote'
import { H2, H3, P, Section } from '@/components/typography'
import { Link } from '@tanstack/react-router'

function Scope() {
  return (
    <div>
      <Link to="/fundamentals" hash="scope">
        <H2 id='scope'>Scope</H2>
      </Link>
      <Section>
        <P>
          Scope is the region of your code where a variable can be accessed. Understanding scope is crucial because it determines which variables are available to your code at any given moment. In JavaScript, every variable lives in a specific scope, and trying to access a variable outside its scope will result in a <CodeText>ReferenceError</CodeText>.
        </P>
        <P>
          JavaScript has three main types of scope: global scope, function scope, and block scope. The scope in which a variable is declared determines where it can be used throughout your program.
        </P>
      </Section>

      <Section>
        <Link to="/fundamentals" hash="global-scope">
          <H3 id='global-scope'>Global Scope</H3>
        </Link>
        <P>
          Variables declared in the global scope are accessible from anywhere in your code. In a browser, the global scope is the <CodeText>window</CodeText> object. Any variable declared outside of a function or block becomes a global variable.
        </P>
        <P>
          While global variables can be convenient, they can also lead to naming conflicts and make code harder to track. It is generally a good practice to limit the use of global variables and prefer local scopes whenever possible.
        </P>
        <Monaco initialCode={`// Global scope
const anime = "Jujutsu Kaisen";

function checkAnime() {
  console.log(anime); // "Jujutsu Kaisen" - accessible
}

checkAnime();
console.log(anime); // "Jujutsu Kaisen" - accessible globally`} />
        <P>
          In this example, <CodeText>anime</CodeText> is declared in the global scope, so it can be accessed both inside and outside the function. Global variables persist for the entire lifetime of your application.
        </P>
      </Section>

      <Section>
        <Link to="/fundamentals" hash="function-scope">
          <H3 id='function-scope'>Function Scope</H3>
        </Link>
        <P>
          Variables declared inside a function are only accessible within that function. When a function ends, those variables are destroyed. Function scope is created by both <CodeText>var</CodeText> and function declarations.
        </P>
        <P>
          Function scope helps organize your code by isolating variables to specific blocks of logic. This prevents accidental overwrites and makes code easier to understand and maintain.
        </P>
        <Monaco initialCode={`function getSorcerer() {
  const name = "Gojo"; // function scope
  console.log(name); // "Gojo" - accessible inside
  return name;
}

getSorcerer();
// console.log(sorcererName); // ReferenceError - not accessible outside`} />
        <P>
          The variable <CodeText>sorcererName</CodeText> is created when the function runs and destroyed when it finishes. Trying to access it outside the function causes an error.
        </P>
      </Section>

      <Section>
        <Link to="/fundamentals" hash="block-scope">
          <H3 id='block-scope'>Block Scope</H3>
        </Link>
        <P>
          Block scope is created by curly braces. Variables declared with <CodeText>let</CodeText> or <CodeText>const</CodeText> inside a block are only accessible within that block. This includes if statements, loops, and even plain blocks.
        </P>
        <P>
          Block scope is one of the main reasons <CodeText>let</CodeText> and <CodeText>const</CodeText> are preferred over <CodeText>var</CodeText>. It provides better control and prevents bugs caused by accidental variable leaking.
        </P>
        <Monaco initialCode={`if (true) {
  let titan = "Colossal"; // block scope
  const height = 60; // block scope
  console.log(titan, height); // accessible
}

// console.log(titan); // ReferenceError
// console.log(height); // ReferenceError`} />
        <P>
          Both <CodeText>titan</CodeText> and <CodeText>height</CodeText> are trapped inside the <CodeText>if</CodeText> block and cannot be accessed outside. This prevents them from polluting the outer scope.
        </P>
      </Section>

      <Section>
        <Link to="/fundamentals" hash="scope-chain">
          <H3 id='scope-chain'>Scope Chain</H3>
        </Link>
        <P>
          When you reference a variable, JavaScript looks for it in the current scope first. If it doesn't find it, it looks in the parent scope, then the parent's parent, and so on until it reaches the global scope. This is called the scope chain.
        </P>
        <P>
          Understanding the scope chain helps you predict where variables come from and why certain variables are accessible in certain places. Variables from outer scopes can be accessed from inner scopes, but not vice versa.
        </P>
        <Monaco initialCode={`const squad = "Attack Titan"; // global

function outerFunction() {
  const rank = "Warrior"; // function scope
  
  function innerFunction() {
    const weapon = "Blade"; // inner function scope
    console.log(weapon); // "Blade" - inner scope
    console.log(rank); // "Warrior" - parent scope
    console.log(squad); // "Attack Titan" - global scope
  }
  
  innerFunction();
}

outerFunction();`} />
        <P>
          The inner function can access its own variables, parent function variables, and global variables. This is the scope chain in action. Each function has access to all scopes above it.
        </P>
      </Section>

      <Section>
        <P>
          Mastering scope is one of the most important skills in JavaScript. It helps you write cleaner code, avoid bugs, and understand how data flows through your application. Always remember to use <CodeText>const</CodeText> by default, <CodeText>let</CodeText> when you need reassignment, and avoid <CodeText>var</CodeText> in modern JavaScript.
        </P>

        <Quote>
          Scope is like the visibility rules of a story. Just because a character exists in chapter 3 doesn't mean they can act in chapter 10 unless they are properly introduced there.
        </Quote>
      </Section>
    </div>
  )
}

export default Scope