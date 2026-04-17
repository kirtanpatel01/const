import CodeText from '@/components/code-text'
import { Monaco } from '@/components/monacco'
import Quote from '@/components/quote'
import { H2, H3, P, Section } from '@/components/typography'

function Logging() {
  return (
    <div>
      <H2>Logging</H2>
      <Section>
        <P>
          The most used and basic feature of any programming language is logging. Whenever we execute any function/code we want some output for debugging or to see the result/final output. This where logging comes into the picture.
        </P>
        <P>
          In JavaScript we've so many ways to log something. The most basic one is using the <CodeText>console.log()</CodeText> method. It prints the output to the console. But there are other methods like <CodeText>console.error()</CodeText>, <CodeText>console.warn()</CodeText>, <CodeText>console.info()</CodeText> etc. which are used to log different types of messages.
        </P>

        <H3>console.log()</H3>
        <Monaco initialCode={`console.log("Hello, World!");`} />
        <P>It can print any data type value you just need to pass it as an argument in log function. It prints the output as it&apos;s in the console of the browser.</P>

        <H3>console.error()</H3>
        <Monaco initialCode={`console.error("This is an error message!");`} />
        <P>
          It is used to log error messages. The output is printed in red color in the console to indicate that it is an error. It also provides a stack trace which helps in debugging the code.
        </P>
        <Quote>Here&apos;s the catch! You won&apos;t see the error message in below output console. Instead you'll be needed to open devtool's console panel where you'll see the output. This won&apos;t happen everywhere it&apos;s just this code block configuration issue :)</Quote>

        <H3>console.warn()</H3>
        <Monaco initialCode={`console.warn("This is a warning message!");`} />
        <P>
          It is used to log warning messages. The output is printed in yellow color in the console to indicate that it is a warning. It also provides a stack trace which helps in debugging the code.
        </P>
        <Quote>
          Again same thing you'll be needing to open devtool's console panel to see the output.
        </Quote>

        <H3>console.info()</H3>
        <Monaco initialCode={`console.info("This is an info message!");`} />
        <P>
          It is used to log informational messages. The output is printed in the console. It also provides a stack trace which helps in debugging the code.
        </P>

        <H3>console.table()</H3>
        <Monaco initialCode={`console.table([{character: "John", age: 30}, {character: "Jane", age: 25}]);`} />
        <P>
          It is used to log tabular data. The output is printed in a table format in the console, making it easier to read and analyze the data. It takes an array of objects as an argument and prints it in a tabular format where each object represents a row and the keys of the object represent the columns.
        </P>

        <P>
          These are some of the examples of logging in JS. Mostly you&apos;re going to use <CodeText>console.log()</CodeText> for basic logging needs.
        </P>
      </Section>
    </div>
  )
}

export default Logging