import { Link } from '@tanstack/react-router'
import { H3, P, Section } from '@/components/typography'
import CodeText from '@/components/code-text'
import Quote from '@/components/quote'
import { Monaco } from '@/components/monacco'
import varAnime from "@/snippets/engineering/var-anime.js?raw"
import letAnime from "@/snippets/engineering/let-anime.js?raw"

export function MemoryCreationPhase() {
  return (
    <Section>
      <Link to="/engineering" hash="memory-creation-phase">
        <H3 id="memory-creation-phase">Memory Creation Phase</H3>
      </Link>
      <P>
        In this phase, the JavaScript engine scans the entire code and allocates memory for all the variables and functions. It creates a scope for the code, which is a region where the variables and functions are accessible. Now this phase has its own rules which are little bit weird.
      </P>
      <P>
        But first let&apos;s understand what happens in this phase. As I said ealier it allocates memory for all the variables and functions.
        <ul className="pl-4">
          <li><strong>Variable:</strong> It initialize every variable with <CodeText>undefined</CodeText></li>
          <li><strong>Function:</strong> It initialize every function with its <CodeText>body</CodeText></li>
        </ul>
      </P>
      <P>
        Other than these two things will simply get ignored in this phase. Wait! Instead of <i className="text-zinc-600">"two thnigs"</i> I should phrase it with <CodeText>Declarations</CodeText>.
      </P>
      <P>
        Yeah Declarations! Now you might be wondering what is <CodeText>Declaration</CodeText> ? We'll cover it in future topics for now keep it in mind that there're three types of declarations:
        <ol className="pl-8 list-decimal">
          <li>
            <strong>Variable Declaration: </strong>
            <CodeText>var</CodeText>, <CodeText>let</CodeText>, <CodeText>const</CodeText>
          </li>
          <li>
            <strong>Function Declaration: </strong>
            <CodeText>function</CodeText>
          </li>
          <li>
            <strong>Class Declaration: </strong>
            <CodeText>class</CodeText>
          </li>
        </ol>
      </P>
      <P>
        Whenever you use anyone of these keywords the memory phase will catch it and place it in memory. Now all the variables asigned with <CodeText>undefined</CodeText> and all the functions are asigned with its body<i className="text-zinc-600">(Inner block code)</i>.
        <Quote>
          I'm not sure about classes but as far as I remember it's also treated as <CodeText>let</CodeText> keyword but it has also a body with defined scope so most probably it should be assigned with its body correct me if I'm wrong :)
        </Quote>
      </P>
      <Monaco initialCode={varAnime} />
      <P>Now if you run the above code you&apos;ll get anime as undefined. Since we&apos;ve used <CodeText>var</CodeText> keyword to declare the anime variable it got initialized with <CodeText>undefined</CodeText> in memory phase which is globally available. Even though we accessed the variable before declaration it's still available because of the memory phase. This is called as <CodeText className="text-primary">Hoisting</CodeText>.</P>
      <P><strong>Hoisting: </strong>A simple definition can be phrase as all the variables and functions gets allocate in the memory with undefined and function body respectively.</P>
      <P>
        Now let&apos;s change the approach and use <CodeText>let</CodeText> keyword instead of <CodeText>var</CodeText>.
      </P>
      <Monaco initialCode={letAnime} />
      <P>
        Boom! We got an error. But <CodeText>let</CodeText> is still hoisted.
        During the memory phase, JavaScript allocates memory for it, but does not initialize it with <CodeText>undefined</CodeText>.
        Instead, it stays in a special state called the <CodeText className="text-primary">Temporal Dead Zone (TDZ)</CodeText>, where accessing it throws an error. It&apos;s also same for <CodeText>const</CodeText> keyword!
      </P>

      <Quote>
        Now if anyone tells you that <CodeText>let</CodeText> and <CodeText>const</CodeText> are not hoisted. Then you can simply say that they&apos;re lying. They&apos;re hoisted but they&apos;re not initialized with <CodeText>undefined</CodeText>. B&apos;coz if anything is not hoisted then it won&apos;t be accessible. But we are getting access error not <span className="text-red-500">"... is not defined"</span> error.
      </Quote>
      <P>Now this was all for <CodeText>Memory Creation Phase</CodeText>. Let&apos;s move to <CodeText className="text-primary">Code Execution Phase</CodeText>.</P>
    </Section>
  )
}
