import CodeText from '@/components/code-text'
import { Monaco } from '@/components/monacco'
import { H2, P, Section } from '@/components/typography'
import { Link } from '@tanstack/react-router'

function Assignment() {
  return (
    <div>
      <Link to="/operations" hash="mathematical-operators">
        <H2 id="mathematical-operators">Mathematical Operators</H2>
      </Link>
      <Section>
        <P>
          In JavaScript, mathematical operators are symbols that perform arithmetic operations on numbers. They allow you to perform calculations and manipulate numerical data in your code. The basic mathematical operators are:
        </P>
        <div className="mt-2 font-medium">
          &ndash; Addition (+)
          <br /> &ndash; Subtraction (-)
          <br /> &ndash; Multiplication (*)
          <br /> &ndash; Division (/)
          <br /> &ndash; Modulus (%)
        </div>

        <Monaco initialCode={`console.log(2 + 5); // Addition
console.log(10 - 3); // Subtraction
console.log(4 * 6); // Multiplication
console.log(15 / 3); // Division
console.log(17 % 5); // Modulus`} />

        <P>
          There&apos;s no need for more explanation here. These operators work just like they do in math class. You can use them to calculate totals, find differences, determine products, and more. <span className="underline decoration-primary underline-offset-2">The modulus operator is particularly useful for finding remainders, which can be helpful in scenarios like determining if a number is even or odd.</span>
        </P>
      </Section>

      <Link to="/operations" hash="assignment-operators">
        <H2 id="assignment-operators">Assignment Operators</H2>
      </Link>
      <Section>
        <P>
          Assignment operators are used to assign values to variables. The most basic assignment operator is the equals sign (=), which assigns the value on the right to the variable on the left.
        </P>
        <Monaco initialCode={`let score = 10; // Assignment using =
console.log(score); // 10
score = 15; // Reassigning a new value
console.log(score); // 15`} />
        <P>
          However, there are also compound assignment operators that combine an arithmetic operation with assignment. These include:
        </P>
        <div className="mt-2 font-medium">
          &ndash; Addition Assignment (+=)
          <br /> &ndash; Subtraction Assignment (-=)
          <br /> &ndash; Multiplication Assignment (*=)
          <br /> &ndash; Division Assignment (/=)
          <br /> &ndash; Modulus Assignment (%=)
        </div>
        <P>
          These operations are useful for making code more concise and readable when you need to update a variable&apos;s value based on its current value and an arithmetic operation. If we see the inner working of these operations then those are same as this <CodeText>let num = num + 10;</CodeText> Let&apos;s debug this little bit more deeper!
        </P>
        <Monaco initialCode={`let num = 5;
num += 10; // Equivalent to num = num + 10
console.log(num); // 15

// Like this other operators are also same
let score = 20;
score -= 5; // Equivalent to score = score - 5
console.log(score); // 15

let product = 4;
product *= 3; // Equivalent to product = product * 3
console.log(product); // 12

let quotient = 20;
quotient /= 4; // Equivalent to quotient = quotient / 4
console.log(quotient); // 5

let remainder = 17;
remainder %= 5; // Equivalent to remainder = remainder % 5
console.log(remainder); // 2`} />
        <P>
          In the example above, we see how each compound assignment operator works by performing the corresponding arithmetic operation and then assigning the result back to the variable. This makes it easier to update variables without having to repeat the variable name on both sides of the assignment.
        </P>
      </Section>

      <Link to="/operations" hash="increment-and-decrement-operators">
        <H2 id="increment-and-decrement-operators">Increment and Decrement Operators</H2>
      </Link>
      <Section>
        <P>
          The increment (++) and decrement (--) operators are special types of assignment operators that are used to increase or decrease a variable&apos;s value by 1, respectively. They can be used in two forms: prefix and postfix.
        </P>
        <P>
          The difference is in when the value changes. Postfix uses the current value first and then updates it. Prefix updates the value first and then uses the new value. In real code, postfix is often used when reading items from a list, while prefix is useful when you want the updated value immediately.
        </P>
        <Monaco initialCode={`const orders = ["Order-101", "Order-102", "Order-103"];
let currentIndex = 0;

// Postfix: use the current index first, then move to the next order
console.log(orders[currentIndex++]); // orders[0] = Order-101
console.log(orders[currentIndex++]); // orders[1] = Order-102
console.log(currentIndex); // 2

let ticketNumber = 100;

// Prefix: move to the next ticket number first, then use it
console.log(++ticketNumber); // 101
console.log(++ticketNumber); // 102
console.log(ticketNumber); // 102`} />
        <P>
          Think of postfix as checking the current order on a conveyor belt and then shifting to the next one. Prefix is like advancing a ticket counter before handing out the next number. That small difference matters inside loops, pagination, and sequential ID generation.
        </P>
      </Section>
    </div>
  )
}

export default Assignment
