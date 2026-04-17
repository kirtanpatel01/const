import CodeText from '@/components/code-text'
import { Monaco } from '@/components/monacco'
import Quote from '@/components/quote'
import { H2, H3, H4, P, Section } from '@/components/typography'
import { Link } from '@tanstack/react-router'

function DataTypes() {
  return (
    <div>
      <Link to="/fundamentals" hash="data-types">
        <H2 id='data-types'>Data Types</H2>
      </Link>
      <Section>
        <P>
          JavaScript has a variety of data types that allow you to store and manipulate different kinds of information. These data types can be broadly categorized into two groups: primitive data types and reference data types.
        </P>
      </Section>
      <Section>
        <Link to="/fundamentals" hash="primitive-data-types">
          <H3 id='primitive-data-types'>Primitive Data Types</H3>
        </Link>
        <P>
          Primitive data types are the most basic data types in JavaScript. They include:
        </P>
        <ul className="list-disc list-inside">
          <li><CodeText>String</CodeText>: Represents a sequence of characters, used for text.</li>
          <li><CodeText>Number</CodeText>: Represents both integer and floating-point numbers.</li>
          <li><CodeText>Boolean</CodeText>: Represents a logical entity that can be either true or false.</li>
          <li><CodeText>Null</CodeText>: Represents the intentional absence of any object value.</li>
          <li><CodeText>Undefined</CodeText>: Represents a variable that has been declared but not assigned a value.</li>
          <li><CodeText>Symbol</CodeText>: Represents a unique identifier, often used for object properties.</li>
        </ul>

        <H4 className="mt-4">String</H4>
        <Monaco initialCode={`const name = "Isagi";
console.log(name);
console.log(typeof name);`} />
        <P>
          Strings represent text in JavaScript. You can wrap them in single quotes, double quotes, or backticks. They are immutable, which means every change like uppercase conversion or concatenation creates a new string value.
        </P>
        <P>
          In real projects, strings are used for labels, messages, IDs, URLs, and user input. Learning methods like <CodeText>trim()</CodeText>, <CodeText>toLowerCase()</CodeText>, and <CodeText>includes()</CodeText> will make your everyday coding much easier.
        </P>

        <H4 className="mt-4">Number</H4>
        <Monaco initialCode={`const score = 11;
const average = 8.5;
console.log(score, average);
console.log(typeof score);`} />
        <P>
          JavaScript uses one numeric type for both integers and decimals. So values like <CodeText>10</CodeText> and <CodeText>10.5</CodeText> are both <CodeText>number</CodeText>. This keeps calculations simple, but it also means you should be careful with floating point precision.
        </P>
        <P>
          Numbers are used in counters, prices, marks, timers, and many app calculations. You should also know special numeric values like <CodeText>NaN</CodeText> and <CodeText>Infinity</CodeText>, because they appear often during parsing and division operations.
        </P>

        <H4 className="mt-4">Boolean</H4>
        <Monaco initialCode={`const isCaptain = true;
console.log(isCaptain);
console.log(typeof isCaptain);`} />
        <P>
          Boolean values are only <CodeText>true</CodeText> or <CodeText>false</CodeText>. They are the core of decision making in JavaScript and are heavily used with conditions like <CodeText>if</CodeText>, <CodeText>else</CodeText>, and loops.
        </P>
        <P>
          In practical coding, booleans often represent states such as loading, logged-in, or disabled. Keeping state variables clearly boolean makes your UI logic easier to read and less error-prone.
        </P>

        <H4 className="mt-4">Null</H4>
        <Monaco initialCode={`const selectedPlayer = null;
console.log(selectedPlayer);
console.log(typeof selectedPlayer); // historical JS behavior: "object"`} />
        <P>
          <CodeText>null</CodeText> means you are intentionally saying there is no value right now. It is useful when you want to reset something or represent an empty selection in a clear, explicit way.
        </P>
        <P>
          One important JavaScript quirk is that <CodeText>typeof null</CodeText> returns <CodeText>"object"</CodeText>. This is historical behavior from early JavaScript, so it is good to remember and handle it carefully in checks.
        </P>

        <H4 className="mt-4">Undefined</H4>
        <Monaco initialCode={`let nextMove;
console.log(nextMove);
console.log(typeof nextMove);`} />
        <P>
          <CodeText>undefined</CodeText> means a value has not been assigned yet. You usually see it in uninitialized variables, missing object properties, or function parameters that were not passed.
        </P>
        <P>
          A good rule is to assign values intentionally instead of relying on undefined states. This makes debugging simpler and avoids unexpected behavior when your code grows.
        </P>

        <H4 className="mt-4">Symbol</H4>
        <Monaco initialCode={`const idA = Symbol("player-id");
const idB = Symbol("player-id");
console.log(idA === idB); // false
console.log(typeof idA);`} />
        <P>
          A <CodeText>Symbol</CodeText> always creates a unique value, even when the description text is the same. That uniqueness makes symbols useful for creating keys that should never clash with other keys.
        </P>
        <P>
          You will mostly see symbols in advanced patterns, libraries, or meta-programming APIs. For beginners, it is enough to remember that symbols are unique identifiers and are different from strings.
        </P>
      </Section>

      <Section>
        <Link to="/fundamentals" hash="reference-data-types">
          <H3 id='reference-data-types'>Reference Data Types</H3>
        </Link>
        <P>
          Reference data types are more complex and can store collections of data or more complex entities. They include:
        </P>
        <ul className="list-disc list-inside">
          <li><CodeText>Object</CodeText>: Represents a collection of key-value pairs, where the keys are strings and the values can be of any data type.</li>
          <li><CodeText>Array</CodeText>: A special type of object that represents an ordered collection of values.</li>
          <li><CodeText>Function</CodeText>: Represents a block of code that can be executed when called.</li>
        </ul>

        <H4 className="mt-4">Object</H4>
        <Monaco initialCode={`const player = {
  fullName: "Rin",
  jersey: 10,
  isStarter: true,
};

console.log(player.fullName);
console.log(typeof player);`} />
        <P>
          Objects store related data in key-value form. They are perfect for modeling real entities like users, products, teams, or settings because you can group many properties under one variable.
        </P>
        <P>
          Since objects are reference types, copying them with plain assignment copies the reference, not the full value. That means changing one reference can affect another, so cloning patterns are important to learn.
        </P>

        <H4 className="mt-4">Arrays</H4>
        <Monaco initialCode={`const lineup = ["Isagi", "Bachira", "Chigiri"];
console.log(lineup[0]);
console.log(Array.isArray(lineup));
console.log(typeof lineup); // "object"`} />
        <P>
          Arrays are ordered collections, so each item has an index starting from zero. They are commonly used for lists like comments, notifications, products, and search results.
        </P>
        <P>
          JavaScript gives arrays many useful methods such as <CodeText>map()</CodeText>, <CodeText>filter()</CodeText>, and <CodeText>find()</CodeText>. Mastering these methods helps you write cleaner and more expressive code.
        </P>

        <H4 className="mt-4">Functions</H4>
        <Monaco initialCode={`function greet(playerName) {
  return "Welcome, " + playerName + "!";
}

console.log(greet("Nagi"));
console.log(typeof greet);`} />
        <P>
          Functions are reusable blocks of logic. They let you define behavior once and call it many times with different inputs, which keeps code organized and avoids repetition.
        </P>
        <P>
          In JavaScript, functions are first-class values. You can store them in variables, pass them as arguments, and return them from other functions. This is a core idea behind callbacks, event handlers, and modern frameworks.
        </P>
      </Section>

      <Section>
        <P>
          Understanding these data types is crucial for effective programming in JavaScript, as they determine how data is stored, manipulated, and interacted with in your code.
        </P>

        <Quote>
          If you&pos;re thinking that's all then you&apos;re wrong buddy! This is just the tip of the iceberg. We dig deeper into whole iceberg meaning we&apos;ll learn in detail about each of them and its function in later part of the dcos ;) 
        </Quote>
      </Section>

    </div>
  )
}

export default DataTypes