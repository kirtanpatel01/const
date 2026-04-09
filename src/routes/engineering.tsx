import CodeText from '@/components/code-text'
import Quote from '@/components/quote'
import { H1, H2, H3, H4, P, Section } from '@/components/typography'
import { createFileRoute, Link } from '@tanstack/react-router'
import { Monaco } from '@/components/monacco'
import varAnime from "@/snippets/engineering/var-anime.js?raw"
import letAnime from "@/snippets/engineering/let-anime.js?raw"
import funcAnime from "@/snippets/engineering/func-anime.js?raw"

import { IconArrowRight, IconDiamondsFilled } from '@tabler/icons-react'

export const Route = createFileRoute('/engineering')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <Link to="/engineering"><H1 className="font-heading">Engineering</H1></Link>
    <Section id="how-javascript-works">
      <Link to="/engineering" hash="how-javascript-works">
        <H3>How JavaScript works ?</H3>
      </Link>
      <P className='space-y-4'>
        Now, I&apos;am not interested in explaing that basic execution of the <CodeText>JS</CodeText> file.
        <br />Like <i> Source Code -&gt; Parsing -&gt; Compilation(JIT) -&gt; Execution. </i>
        But I&apos;ll let you know little bit:
        <ul className='pl-4'>
          <li><b>Step 1:</b> Source Code – The raw .js file is loaded into the engine.</li>
          <li><b>Step 2:</b> Parsing – The Parser breaks code into tokens and builds an Abstract Syntax Tree (AST).</li>
          <li><b>Step 3:</b> Compilation (JIT) – An interpreter (e.g., Ignition) converts the AST into Bytecode for immediate execution, while a Just-In-Time (JIT) Compiler (e.g., Turbofan) optimizes hot code paths.</li>
          <li><b>Step 4:</b> Execution – The code runs line-by-line within an Execution Context.</li>
        </ul>
        <Quote>Note: Above content is copied from Google AI Mode ;)</Quote>
      </P>
      <P>Let&apos;s understand how a js code executes!</P>
    </Section>

    <Link to="/engineering" hash="global-execution-context">
      <H2 id="global-execution-context">Global Execution Context</H2>
    </Link>
    <Section>
      <P>
        Whenever we run any js file it creates a global context for that file in which all the lines of code will executed one by one. For every execution there is single global context. Which is called as <CodeText>Global Execution Context</CodeText>.
        <Quote>From now on we'll call it as GEC.</Quote>
        So this context is created by javascript engine. Now this GEC is not a single entity. It has two parts:
        <ol className='pl-8 list-decimal'>
          <li>Memory Creation Phase</li>
          <li>Code Execution Phase</li>
        </ol>
      </P>
    </Section>
    <Section>
      <Link to="/engineering" hash="memory-creation-phase">
        <H3 id="memory-creation-phase">Memory Creation Phase</H3>
      </Link>
      <P>
        In this phase, the JavaScript engine scans the entire code and allocates memory for all the variables and functions. It creates a scope for the code, which is a region where the variables and functions are accessible. Now this phase has its own rules which are little bit weird.
      </P>
      <P>
        But first let&apos;s understand what happens in this phase. As I said ealier it allocates memory for all the variables and functions.
        <ul className='pl-4'>
          <li><strong>Variable:</strong> It initialize every variable with <CodeText>undefined</CodeText></li>
          <li><strong>Function:</strong> It initialize every function with its <CodeText>body</CodeText></li>
        </ul>
      </P>
      <P>
        Other than these two things will simply get ignored in this phase. Wait! Instead of <i className='text-zinc-600'>"two thnigs"</i> I should phrase it with <CodeText>Declarations</CodeText>.
      </P>
      <P>
        Yeah Declarations! Now you might be wondering what is <CodeText>Declaration</CodeText> ? We'll cover it in future topics for now keep it in mind that there're three types of declarations:
        <ol className='pl-8 list-decimal'>
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
        Whenever you use anyone of these keywords the memory phase will catch it and place it in memory. Now all the variables asigned with <CodeText>undefined</CodeText> and all the functions are asigned with its body<i className='text-zinc-600'>(Inner block code)</i>.
        <Quote>
          I'm not sure about classes but as far as I remember it's also treated as <CodeText>let</CodeText> keyword but it has also a body with defined scope so most probably it should be assigned with its body correct me if I'm wrong :)
        </Quote>
      </P>
      <Monaco initialCode={varAnime} />
      <P>Now if you run the above code you&apos;ll get anime as undefined. Since we&apos;ve used <CodeText>var</CodeText> keyword to declare the anime variable it got initialized with <CodeText>undefined</CodeText> in memory phase which is globally available. Even though we accessed the variable before declaration it's still available because of the memory phase. This is called as <CodeText className='text-primary'>Hoisting</CodeText>.</P>
      <P><strong>Hoisting: </strong>A simple definition can be phrase as all the variables and functions gets allocate in the memory with undefined and function body respectively.</P>
      <P>
        Now let&apos;s change the approach and use <CodeText>let</CodeText> keyword instead of <CodeText>var</CodeText>.
      </P>
      <Monaco initialCode={letAnime} />
      <P>
        Boom! We got an error. But <CodeText>let</CodeText> is still hoisted.
        During the memory phase, JavaScript allocates memory for it, but does not initialize it with <CodeText>undefined</CodeText>.
        Instead, it stays in a special state called the <CodeText className='text-primary'>Temporal Dead Zone (TDZ)</CodeText>, where accessing it throws an error. It&apos;s also same for <CodeText>const</CodeText> keyword!
      </P>

      <Quote>
        Now if anyone tells you that <CodeText>let</CodeText> and <CodeText>const</CodeText> are not hoisted. Then you can simply say that they&apos;re lying. They&apos;re hoisted but they&apos;re not initialized with <CodeText>undefined</CodeText>. B&apos;coz if anything is not hoisted then it won&apos;t be accessible. But we are getting access error not <span className='text-red-500'>"... is not defined"</span> error.
      </Quote>
      <P>Now this was all for <CodeText>Memory Creation Phase</CodeText>. Let&apos;s move to <CodeText className='text-primary'>Code Execution Phase</CodeText>.</P>
    </Section>

    <Section id="code-execution-phase">
      <Link to="/engineering" hash="code-execution-phase">
        <H3>Code Execution Phase</H3>
      </Link>

      <P>
        Memory phase already prepared everything. Now JavaScript starts running the code line by line.
      </P>

      <P>
        Let&apos;s see what that actually means:
      </P>

      <Monaco initialCode={`var anime;\n\nconsole.log(anime);\n\nanime = "Naruto";\n\nconsole.log(anime);`} />

      <P>
        During memory phase, <CodeText>anime</CodeText> was set to <CodeText>undefined</CodeText>.
      </P>

      <P>
        Now in execution phase:
        <ul className='pl-2'>
          <li className='flex items-center gap-2'><IconArrowRight size={16} className='text-primary' /> First line: nothing happens (already handled)</li>
          <li className='flex items-center gap-2'><IconArrowRight size={16} className='text-primary' /> Second line: <CodeText>console.log(anime)</CodeText> → prints <CodeText>undefined</CodeText></li>
          <li className='flex items-center gap-2'><IconArrowRight size={16} className='text-primary' /> Third line: value gets updated to "Naruto"</li>
          <li className='flex items-center gap-2'><IconArrowRight size={16} className='text-primary' /> Fourth line: <CodeText>console.log(anime)</CodeText> → prints <CodeText>Naruto</CodeText></li>
        </ul>
      </P>

      <P>
        This is the key idea: execution phase doesn&apos;t &quot;prepare&quot; anything &mdash; it just runs things in order.
      </P>

      <P>
        In short: memory phase sets the stage, execution phase plays the scene.
      </P>
    </Section>

    <Section className='bg-secondary/20 text-secondary-foreground rounded-xl border border-dashed py-3 m-4'>
      <P><strong>TL;DR</strong></P>
      <ul className='list-disc pl-5 space-y-2 mt-1 marker:text-primary'>
        <li>
          <span>Memory phase already created variables (with <CodeText>undefined</CodeText> or TDZ)</span>
        </li>
        <li>
          <span>Execution phase runs code <i>line by line</i></span>
        </li>
        <li>
          <span><CodeText>var</CodeText> → starts as <CodeText>undefined</CodeText>, then gets updated</span>
        </li>
        <li>
          <span><CodeText>let</CodeText>/<CodeText>const</CodeText> → only usable after declaration (TDZ before that)</span>
        </li>
        <li>
          <span>Function declarations → already usable before execution</span>
        </li>
        <li>
          <span>Most errors happen during execution, not memory</span>
        </li>
      </ul>
      <P className='mt-2 border-t border-muted italic flex items-center gap-2 text-muted-foreground'>
        <IconDiamondsFilled size={14} className='text-primary' /> Memory <span className='text-primary'>prepares</span>, Execution <span className='text-primary'>runs</span>
      </P>
    </Section>

    <Link to="/engineering" hash="function-execution-context">
      <H2>Function Execution Context</H2>
    </Link>
    <Section id="function-execution-context">
      <P>Till now everything was happening inside the global execution context. But what happens when a function is called?</P>
      <Monaco initialCode={funcAnime} />
      <P>What do you think this will print?</P>
      <P className='bg-secondary/30 rounded-md px-3 py-2 w-fit font-mono'>
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
        <ul className='pl-8 list-disc marker:text-primary'>
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

      <P>Now the error changes:<br /><CodeText className='text-red-500'>Error: Cannot access 'godOfAnime' before initialization</CodeText></P>
      <P>This is because <CodeText>let</CodeText> is in TDZ. The variable exists, but you&apos;re not allowed to touch it yet.</P>
      <P>So now we have 3 different behaviors:</P>

      <ul className="pl-10 list-disc space-y-2">
        <li className='marker:text-cyan-500'>
          <div className='flex items-center gap-2'>
            <CodeText>function</CodeText> <IconArrowRight size={16} className='text-primary' /> fully hoisted → works before declaration
          </div>
        </li>
        <li className='marker:text-red-500'>
          <div className='flex items-center gap-2'>
            <CodeText>var</CodeText> + function <IconArrowRight size={16} className='text-primary' /> hoisted as <CodeText>undefined</CodeText> <IconArrowRight size={16} className='text-primary' /> <span className='text-red-500'>not a function</span>
          </div>
        </li>
        <li className="marker:text-red-500">
          <div className='flex items-center gap-2'>
            <CodeText>let/const</CodeText> + function <IconArrowRight size={16} className='text-primary' /> TDZ <IconArrowRight size={16} className='text-primary' /> <span className='text-red-500'>cannot access</span>
          </div>
        </li>
      </ul>

      <Quote>Same idea, different behavior.</Quote>
    </Section>

    <Link to="/engineering" hash="call-stack">
      <H2>Call Stack</H2>
    </Link>

    <Section id="call-stack">
      <P>Till now we saw that every time a function runs, a new execution context is created.</P>
      <P>But here&apos;s a bigger question:</P>
      <Quote>If multiple functions are called… who runs first?</Quote>
      <P>Let&apos;s break it down with an example.</P>

      <Monaco
        initialCode={`function one() {\n  console.log("One");\n}\n\nfunction two() {\n  one();\n  console.log("Two");\n}\n\nfunction three() {\n  two();\n  console.log("Three");\n}\n\nthree();`}
      />

      <P>What do you think the output will be?</P>
      <P className='bg-secondary/30 rounded-md px-3 py-2 w-fit font-mono'>
        Output:
        <br />
        &gt; One
        <br />
        &gt; Two
        <br />
        &gt; Three
      </P>

      <P>Wait… why didn&apos;t <CodeText>three</CodeText> print first? We called it first! This is where <CodeText className="text-primary font-bold underline underline-offset-4">Call Stack</CodeText> comes in.</P>

      <P>Think of it like a stack of plates 🍽️. The last plate added is the first one removed.</P>

      <P>Now let&apos;s trace the stack lifecycle:</P>

      <ul className='pl-8 space-y-2'>
        <li className='flex items-center gap-2'>
          <IconArrowRight size={16} className='text-primary' /> <CodeText>three()</CodeText> is called → Pushed to stack
        </li>
        <li className='flex items-center gap-2'>
          <IconArrowRight size={16} className='text-primary' /> Inside <CodeText>three()</CodeText>: <CodeText>two()</CodeText> is called → Pushed to top
        </li>
        <li className='flex items-center gap-2'>
          <IconArrowRight size={16} className='text-primary' /> Inside <CodeText>two()</CodeText>: <CodeText>one()</CodeText> is called → Pushed to top
        </li>
      </ul>

      <P className='mt-4'>Current Stack State:</P>
      <div className='flex flex-col-reverse w-40 border-2 border-dashed border-primary/30 rounded-lg p-2 bg-secondary/10 mx-8 my-2'>
        <div className='bg-primary/20 p-2 rounded border border-primary/30 text-center font-mono text-xs'>three()</div>
        <div className='bg-primary/40 p-2 rounded border border-primary/30 text-center font-mono text-xs mb-1'>two()</div>
        <div className='bg-primary/60 p-2 rounded border border-primary/30 text-center font-mono text-xs mb-1 font-bold'>one()</div>
      </div>

      <P className='mt-4'>Now execution starts from the top:</P>
      <ul className='pl-8 space-y-2'>
        <li className='flex items-center gap-2 font-medium'>
          <IconArrowRight size={16} className='text-primary' /> <CodeText>one()</CodeText> runs → "One" → Popped from stack
        </li>
        <li className='flex items-center gap-2'>
          <IconArrowRight size={16} className='text-primary' /> <CodeText>two()</CodeText> resumes → "Two" → Popped from stack
        </li>
        <li className='flex items-center gap-2'>
          <IconArrowRight size={16} className='text-primary' /> <CodeText>three()</CodeText> resumes → "Three" → Popped from stack
        </li>
      </ul>

      <P className='mt-6 mb-2'><strong>The Rule:</strong></P>
      <ul className="pl-10 list-disc space-y-2 marker:text-primary">
        <li>Last function called → runs first</li>
        <li>First function called → finishes last</li>
      </ul>

      <P className='mt-4'>This is called <CodeText className="text-primary font-bold">LIFO</CodeText> (Last In, First Out).</P>

      <Quote>
        JavaScript doesn&apos;t &quot;jump around&quot; your code — it strictly follows the stack.
      </Quote>
    </Section>

    <Link to="/engineering" hash="web-apis">
      <H2>Web APIs</H2>
    </Link>

    <Section id="web-apis">
      <P>So far everything made sense. JavaScript runs one thing at a time using the call stack. But now comes a problem.</P>

      <Monaco
        initialCode={`console.log("Start");\n\nsetTimeout(() => {\n  console.log("Inside Timeout");\n}, 2000);\n\nconsole.log("End");`}
      />

      <P>What do you think this will print?</P>
      <P className='bg-secondary/30 rounded-md px-3 py-2 w-fit font-mono'>
        Output:
        <br />
        &gt; Start
        <br />
        &gt; End
        <br />
        &gt; Inside Timeout
      </P>

      <P>Wait… what? We gave 2 seconds delay. Shouldn&apos;t it wait? According to everything we learned, JS is single-threaded and runs line-by-line. So why didn&apos;t it pause?</P>

      <Quote className='text-red-500 font-medium'>
        Here&apos;s the truth: <CodeText>setTimeout</CodeText> is NOT part of JavaScript.
      </Quote>

      <P>It sounds weird, but it&apos;s true. It&apos;s provided by the browser environment. These are called <CodeText className="text-primary font-bold">Web APIs</CodeText>.</P>

      <P>Let&apos;s trace the asynchronous flow:</P>

      <ul className='pl-8 space-y-2'>
        <li className='flex items-center gap-2'>
          <IconArrowRight size={16} className='text-primary' /> <CodeText>console.log("Start")</CodeText> → Runs immediately on stack
        </li>
        <li className='flex items-center gap-2'>
          <IconArrowRight size={16} className='text-primary' /> <CodeText>setTimeout</CodeText> → Handed over to the <span className='text-primary font-medium'>Browser</span>
        </li>
        <li className='flex items-center gap-2'>
          <IconArrowRight size={16} className='text-primary' /> Browser starts a timer in the background → JS <span className='underline'>does not wait</span>
        </li>
        <li className='flex items-center gap-2'>
          <IconArrowRight size={16} className='text-primary' /> <CodeText>console.log("End")</CodeText> → Runs immediately on stack
        </li>
      </ul>

      <P className='mt-6'>Meanwhile, the browser is handling the timer separately. After 2 seconds:</P>
      <ul className='pl-8 space-y-2'>
        <li className='flex items-center gap-2'>
          <IconArrowRight size={16} className='text-primary' /> The callback becomes &quot;ready&quot;
        </li>
        <li className='flex items-center gap-2 text-muted-foreground'>
          <IconArrowRight size={16} className='text-muted' /> But it still doesn&apos;t run immediately on the stack!
        </li>
      </ul>

      <H4 className='mt-8 mb-2'>The Golden Rule of the Stack:</H4>
      <Quote className='border-primary/50 bg-primary/5'>
        Nothing enters the Call Stack unless it is completely <strong>EMPTY</strong>.
      </Quote>

      <P className='mt-4'>So Web APIs don&apos;t execute your code. They just hold it... and wait for the right moment.</P>

      <P className='mt-6 italic flex items-center gap-2 text-muted-foreground'>
        <IconDiamondsFilled size={14} className='text-primary' /> JavaScript doesn&apos;t handle <span className='text-primary'>Async</span> work — the <span className='text-primary'>Environment</span> does.
      </P>
    </Section>

    <Link to="/engineering" hash="task-queue">
      <H2>Task Queue (Callback Queue)</H2>
    </Link>

    <Section id="task-queue">
      <P>So the browser handled <CodeText>setTimeout</CodeText> and the timer finished. Now the callback is ready to run, but here’s the catch:</P>
      <Quote className="border-amber-500/50 bg-amber-500/5">
        It <strong>STILL</strong> doesn’t go directly into the call stack.
      </Quote>

      <P className="mt-4">Wait… why? Let’s break it again with a <CodeText>0ms</CodeText> delay:</P>

      <Monaco
        initialCode={`console.log("Start");\n\nsetTimeout(() => {\n  console.log("Timeout");\n}, 0);\n\nconsole.log("End");`}
      />

      <P>Delay is 0… so it should run instantly, right?</P>
      <P className='bg-secondary/30 rounded-md px-3 py-2 w-fit font-mono'>
        Output:
        <br />
        &gt; Start
        <br />
        &gt; End
        <br />
        &gt; Timeout
      </P>

      <P className="mt-4">Even with <CodeText>0ms</CodeText>, it didn&apos;t run immediately. That&apos;s because Web APIs send the callback to a waiting area first:</P>
      <P className="text-center py-4 my-2 bg-primary/10 border border-dashed border-primary/30 rounded-lg font-bold text-primary tracking-widest uppercase">
        Task Queue (Callback Queue)
      </P>

      <P className="mt-4">Think of it like a <strong>line outside a club</strong> 🕺. Everyone is waiting, but no one can enter yet. The flow now looks like this:</P>

      <ul className='pl-8 space-y-2'>
        <li className='flex items-center gap-2'>
          <IconArrowRight size={16} className='text-primary' /> Call Stack runs <CodeText>console.log("Start")</CodeText>
        </li>
        <li className='flex items-center gap-2'>
          <IconArrowRight size={16} className='text-primary' /> <CodeText>setTimeout</CodeText> goes to Web APIs
        </li>
        <li className='flex items-center gap-2'>
          <IconArrowRight size={16} className='text-primary' /> Timer finishes → Callback pushed to <span className='text-primary font-bold'>Task Queue</span>
        </li>
        <li className='flex items-center gap-2'>
          <IconArrowRight size={16} className='text-primary' /> Call Stack runs <CodeText>console.log("End")</CodeText>
        </li>
      </ul>

      <P className="mt-6">Now the callback is just… waiting. It cannot enter the stack by itself. It needs <strong>permission</strong>. And who gives that permission?</P>
      <P className="flex items-center gap-2 text-primary font-bold text-lg">
        <IconArrowRight size={20} /> Event Loop <span className="text-sm font-normal text-muted-foreground opacity-50">(Coming next...)</span>
      </P>

      <div className="mt-8 p-4 bg-secondary/20 rounded-xl border border-dashed space-y-3">
        <P className="font-bold">Key Takeaways:</P>
        <ul className="pl-6 list-disc space-y-2 marker:text-primary">
          <li>Web APIs handle the background work</li>
          <li>Completed callbacks go to the <strong>Task Queue</strong></li>
          <li>They wait there until the Call Stack is completely empty</li>
        </ul>
      </div>

      <Quote className="mt-6 italic border-primary/50 text-muted-foreground">
        <CodeText className="text-primary not-italic">setTimeout(0)</CodeText> doesn&apos;t mean &quot;run now&quot; — it means &quot;run later when possible&quot;.
      </Quote>
    </Section>

    <Link to="/engineering" hash="microtask-queue">
      <H2>Microtask Queue (Promises)</H2>
    </Link>

    <Section id="microtask-queue">
      <P>So far, everything async was going into the Task Queue. But now let’s introduce something new: <CodeText>Promise</CodeText>.</P>

      <Monaco
        initialCode={`console.log("Start");\n\nsetTimeout(() => {\n  console.log("Timeout");\n}, 0);\n\nPromise.resolve().then(() => {\n  console.log("Promise");\n});\n\nconsole.log("End");`}
      />

      <P>Now think carefully… what will be the output?</P>
      <P className='bg-secondary/30 rounded-md px-3 py-2 w-fit font-mono'>
        Output:
        <br />
        &gt; Start
        <br />
        &gt; End
        <br />
        &gt; Promise
        <br />
        &gt; Timeout
      </P>

      <P className="mt-4">Wait… why did <CodeText>Promise</CodeText> run before <CodeText>setTimeout</CodeText>? Both are async, right? This is where things change.</P>

      <Quote className="border-indigo-500/50 bg-indigo-500/5">
        Promises do <strong>NOT</strong> go into the Task Queue.
      </Quote>

      <P className="mt-4">They go into a special, higher-priority waiting area called the <CodeText className="text-primary font-bold">Microtask Queue</CodeText>.</P>

      <div className="grid md:grid-cols-2 gap-4 my-6">
        <div className="p-4 bg-secondary/10 border rounded-xl space-y-2">
          <P className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Priority: Low</P>
          <H4 className="text-primary">Task Queue</H4>
          <ul className="text-sm space-y-1 opacity-80">
            <li>• setTimeout</li>
            <li>• setInterval</li>
          </ul>
        </div>
        <div className="p-4 bg-primary/10 border border-primary/30 rounded-xl space-y-2">
          <P className="text-xs uppercase tracking-widest text-primary font-bold">Priority: High ⚡</P>
          <H4 className="text-primary font-bold">Microtask Queue</H4>
          <ul className="text-sm space-y-1">
            <li>• Promises</li>
            <li>• .then() / .catch()</li>
            <li>• queueMicrotask()</li>
          </ul>
        </div>
      </div>

      <H4 className="mt-8 mb-2">The Priority Rule:</H4>
      <Quote className="border-primary/50 text-primary font-medium">
        Microtask Queue always runs <strong>BEFORE</strong> the Task Queue.
      </Quote>

      <P className="mt-6">Let&apos;s replay what actually happened:</P>
      <ul className='pl-8 space-y-2'>
        <li className='flex items-center gap-2'>
          <IconArrowRight size={16} className='text-primary' /> <CodeText>Start</CodeText> → Runs immediately
        </li>
        <li className='flex items-center gap-2'>
          <IconArrowRight size={16} className='text-primary' /> <CodeText>setTimeout</CodeText> → Handed over → Goes to Task Queue
        </li>
        <li className='flex items-center gap-2'>
          <IconArrowRight size={16} className='text-primary' /> <CodeText>Promise</CodeText> → Goes to <span className="text-primary font-bold">Microtask Queue</span>
        </li>
        <li className='flex items-center gap-2'>
          <IconArrowRight size={16} className='text-primary' /> <CodeText>End</CodeText> → Runs immediately
        </li>
      </ul>

      <P className="mt-6">Now the Call Stack is empty. JavaScript checks:</P>
      <ul className='pl-8 space-y-2'>
        <li className='flex items-center gap-2 font-bold text-primary'>
          <IconArrowRight size={16} /> Microtask Queue first ✅
        </li>
        <li className='flex items-center gap-2 text-muted-foreground opacity-50'>
          <IconArrowRight size={16} /> Task Queue later
        </li>
      </ul>

      <P className='mt-8 italic flex items-center gap-2 text-muted-foreground border-t pt-4'>
        <IconDiamondsFilled size={14} className='text-primary' /> Not all async tasks are equal — <span className="text-primary">Promises cut the line.</span>
      </P>
    </Section>

    <Link to="/engineering" hash="event-loop">
      <H2>Event Loop</H2>
    </Link>

    <Section id="event-loop">
      <P>So now we have all the pieces of the puzzle:</P>
      <div className='flex flex-wrap gap-2 my-4'>
        {['Call Stack', 'Web APIs', 'Task Queue', 'Microtask Queue'].map((item) => (
          <span key={item} className='px-3 py-1 bg-secondary/20 border border-dashed rounded-full text-xs font-mono'>{item}</span>
        ))}
      </div>

      <P>But one big question is still unanswered: Who decides when something from the queue goes into the Call Stack?</P>
      <P>Because queues are just waiting—they don&apos;t execute themselves. This is where the <CodeText className="text-primary font-bold underline underline-offset-4 decoration-2">Event Loop</CodeText> comes in.</P>

      <P className='mt-6'>Think of it like a <strong>gatekeeper</strong>. Its job is incredibly simple but crucial:</P>

      <ul className='pl-8 space-y-2'>
        <li className='flex items-center gap-2'>
          <IconArrowRight size={16} className='text-primary' /> Keep checking if the <span className='text-primary font-medium'>Call Stack</span> is empty
        </li>
        <li className='flex items-center gap-2'>
          <IconArrowRight size={16} className='text-primary' /> If empty, allow tasks to enter the stack
        </li>
      </ul>

      <H4 className='mt-8 mb-2'>The Hierarchy of Execution:</H4>
      <ul className="pl-10 list-decimal space-y-2 marker:text-primary font-medium">
        <li>Check Microtask Queue (Run everything)</li>
        <li>Check Task Queue (Run one task)</li>
      </ul>

      <P className='mt-8'>Let&apos;s replay our final trace:</P>

      <ul className='pl-8 space-y-2'>
        <li className='flex items-center gap-2 font-medium'>
          <IconArrowRight size={16} className='text-primary' /> Call Stack is empty... Event Loop wakes up 👀
        </li>
      </ul>

      <div className='my-6 ml-8 p-4 border-l-2 border-primary/30 space-y-4 bg-secondary/5'>
        <div className='space-y-2'>
          <P className='text-xs uppercase tracking-tighter text-muted-foreground'>Step 1: The Microtasks</P>
          <ul className='space-y-2 text-sm'>
            <li className='flex items-center gap-2'>
              <IconArrowRight size={14} className='text-primary' /> Finds <CodeText>Promise</CodeText> in Microtask Queue
            </li>
            <li className='flex items-center gap-2'>
              <IconArrowRight size={14} className='text-primary' /> Pushes it to Call Stack → Executes it
            </li>
          </ul>
        </div>

        <div className='space-y-2'>
          <P className='text-xs uppercase tracking-tighter text-muted-foreground'>Step 2: The Tasks</P>
          <ul className='space-y-2 text-sm'>
            <li className='flex items-center gap-2'>
              <IconArrowRight size={14} className='text-primary' /> Microtask Queue is now empty
            </li>
            <li className='flex items-center gap-2 font-bold text-primary'>
              <IconArrowRight size={14} /> Moves to Task Queue
            </li>
            <li className='flex items-center gap-2'>
              <IconArrowRight size={14} className='text-primary' /> Finds <CodeText>setTimeout</CodeText> → Pushes to Stack → Executes it
            </li>
          </ul>
        </div>
      </div>

      <P className='mt-6'>That&apos;s why the output always follows this rhythm:</P>
      <P className='bg-secondary/30 rounded-md px-3 py-2 w-fit font-mono text-primary'>
        &gt; Start &gt; End &gt; Promise &gt; Timeout
      </P>

      <Quote className='mt-10 border-primary bg-primary/5 text-primary-foreground font-medium'>
        The Event Loop isn&apos;t executing code — it&apos;s the heartbeat of the browser, deciding exactly <i>when</i> each piece of code gets its turn.
      </Quote>

      <P className='mt-8 pt-4 border-t border-muted italic flex items-center gap-2 text-muted-foreground'>
        <IconDiamondsFilled size={14} className='text-primary' /> Memory sets the stage. Stack plays the scene. Event Loop keeps the show running.
      </P>
    </Section>

    <Link to="/engineering" hash="starvation">
      <H2>Starvation</H2>
    </Link>

    <Section id="starvation">
      <P>So far everything looks perfect. The Call Stack runs code, the Event Loop manages execution, and priorities are set. Clean system… right? Let&apos;s break it.</P>

      <Monaco
        initialCode={`function loop() {\n  Promise.resolve().then(loop);\n}\n\nloop();\n\nsetTimeout(() => {\n  console.log("Timeout");\n}, 0);`}
      />

      <P>What do you think will happen? Will the timeout ever trigger?</P>
      <P className='bg-red-500/10 text-red-500 rounded-md px-3 py-2 w-fit font-mono font-bold border border-red-500/20'>
        Result: System Freezes 🧊
      </P>

      <P className="mt-4">Wait… why didn&apos;t <CodeText>setTimeout</CodeText> run? Even with 0ms delay? Let&apos;s trace the recursion:</P>

      <div className='my-6 border-l-2 border-red-500/30 ml-8 p-4 bg-red-500/5 space-y-3'>
        <ul className='space-y-3'>
          <li className='flex items-center gap-2'>
            <IconArrowRight size={16} className='text-red-500' /> <CodeText>loop()</CodeText> runs and adds a <span className='text-red-500'>Microtask</span>
          </li>
          <li className='flex items-center gap-2'>
            <IconArrowRight size={16} className='text-red-500' /> Stack clears → Event Loop runs the Microtask
          </li>
          <li className='flex items-center gap-2'>
            <IconArrowRight size={16} className='text-red-500' /> Microtask calls <CodeText>loop()</CodeText> again → Adds another <span className='text-red-500 font-bold'>Microtask</span>
          </li>
          <li className='flex items-center gap-2 italic text-muted-foreground'>
            <IconArrowRight size={16} /> The Microtask Queue is NEVER empty...
          </li>
        </ul>
      </div>

      <Quote className='border-red-500/50 bg-red-500/5'>
        The Event Loop <strong>never gets a chance</strong> to check the Task Queue because it is stuck processing an infinite stream of Microtasks.
      </Quote>

      <P className='mt-6'>This situation is called <CodeText className="text-red-500 font-bold uppercase tracking-widest bg-red-500/10 px-2">Starvation</CodeText>.</P>

      <P>One queue consumes all execution time, leaving other tasks (and the browser&apos;s UI) completely blocked. It&apos;s not that JavaScript is slow; it&apos;s just being too loyal to its priority rules.</P>

      <Quote className='mt-8 border-primary text-primary font-medium'>
        High priority doesn&apos;t mean safe — it can block the entire universe if not handled carefully.
      </Quote>

      <P className='mt-8 pt-4 border-t border-muted italic flex items-center gap-2 text-muted-foreground'>
        <IconDiamondsFilled size={14} className='text-primary' /> This completes our journey through the JS Engine internals. Stay curious.
      </P>
    </Section>
  </div>
}

