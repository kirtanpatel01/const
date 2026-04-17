import { Link } from '@tanstack/react-router'
import { H2, P, Section } from '@/components/typography'
import CodeText from '@/components/code-text'
import Quote from '@/components/quote'
import { Monaco } from '@/components/monacco'
import { IconArrowRight } from '@tabler/icons-react'
import funcAnime from "@/snippets/engineering/func-anime.js?raw"

export function FunctionExecutionContext() {
  return (
    <>
      <Link to="/engineering" hash="function-execution-context">
        <H2 id="function-execution-context">Function Execution Context</H2>
      </Link>
      <Section>
        <P>Till now everything was happening inside the global execution context. But what happens when a function is called?</P>
        <Monaco initialCode={funcAnime} />
        <P>What do you think this will print?</P>
        <P className="bg-secondary/30 rounded-md px-3 py-2 w-fit font-mono">
          Output:
          <br />
          &gt; One Piece
          <br />
          &gt; Naruto
        </P>
        <P>
          Wait... why didn&apos;t the function overwrite the global <CodeText>anime</CodeText>?
          Because every time a function is called, JavaScript creates a new execution context.
          This is called <CodeText className="text-primary">Function Execution Context (FEC)</CodeText>.
        </P>
        <P>
          Just like global execution context, this also has:
          <ol className="pl-8 list-decimal">
            <li>Memory Phase</li>
            <li>Execution Phase</li>
          </ol>
        </P>
        <P>
          So when <CodeText>printAnime()</CodeText> runs:
          <ul className="pl-8 list-disc marker:text-primary">
            <li>A new context is created</li>
            <li>It gets its own memory</li>
            <li>Its own variables</li>
          </ul>
        </P>
        <P>
          That&apos;s why <CodeText>var anime = "One Piece"</CodeText> stays inside the function only.
          Once the function finishes execution, its context gets destroyed. Then JavaScript goes back to the global execution context and continues from where it left.
        </P>
        <P>
          In short:
          <ul className="pl-8 list-disc marker:text-primary">
            <li>Each function call creates a new world</li>
            <li>That world runs independently</li>
            <li>Then disappears after execution</li>
          </ul>
        </P>
        <P>So far we used <CodeText>function</CodeText> keyword. But there&apos;s another way to create functions: using variable declaration. Let&apos;s break things again.</P>
        <Monaco
          initialCode={`godOfAnime();\n\nfunction godOfAnime() {\n  console.log("Dragon Ball");\n}`}
        />
        <P>No error. It works. <br />Now try the same thing with a variable declaration:</P>
        <Monaco
          initialCode={`godOfAnime();\n\nvar godOfAnime = () => {\n  console.log("Dragon Ball");\n};`}
        />
        Boom 💥 But Why ?
        <P>
          <CodeText>godOfAnime()</CodeText> tries to call whatever value is stored inside it.
          At this point, that value is <CodeText>undefined</CodeText> because of hoisting and we&apos;ve used <CodeText>var</CodeText> keyword. So JavaScript is essentially trying to call <CodeText>undefined</CodeText> as a function, which is not possible.
        </P>
        <P>Now let&apos;s make it worse:</P>
        <Monaco
          initialCode={`godOfAnime();\n\nlet godOfAnime = () => {\n  console.log("Dragon Ball");\n};`}
        />

        <P>Now the error changes:<br /><CodeText className="text-red-500">Error: Cannot access 'godOfAnime' before initialization</CodeText></P>
        <P>This is because <CodeText>let</CodeText> is in TDZ. The variable exists, but you&apos;re not allowed to touch it yet.</P>
        <P>So now we have 3 different behaviors:</P>

        <ul className="pl-10 list-disc space-y-2">
          <li className="marker:text-cyan-500">
            <div className="flex items-center gap-2">
              <CodeText>function</CodeText> <IconArrowRight size={16} className="text-primary" /> fully hoisted → works before declaration
            </div>
          </li>
          <li className="marker:text-red-500">
            <div className="flex items-center gap-2">
              <CodeText>var</CodeText> + function <IconArrowRight size={16} className="text-primary" /> hoisted as <CodeText>undefined</CodeText> <IconArrowRight size={16} className="text-primary" /> <span className="text-red-500">not a function</span>
            </div>
          </li>
          <li className="marker:text-red-500">
            <div className="flex items-center gap-2">
              <CodeText>let/const</CodeText> + function <IconArrowRight size={16} className="text-primary" /> TDZ <IconArrowRight size={16} className="text-primary" /> <span className="text-red-500">cannot access</span>
            </div>
          </li>
        </ul>

        <Quote>Same idea, different behavior.</Quote>
      </Section>
    </>
  )
}
