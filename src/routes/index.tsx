import { createFileRoute } from "@tanstack/react-router"
import CodeText from "@/components/code-text"
import Quote from "@/components/quote"
import ThemeToggle from "@/components/theme-toggle"
import { Kbd, KbdGroup } from "@/components/ui/kbd"

export const Route = createFileRoute("/")({ component: App })

function App() {
  return (
    <div className="max-w-3xl mx-auto py-16 border-x">
      <div className="absolute top-4 right-4 flex items-center gap-2">
        <Kbd>d</Kbd>
        <ThemeToggle />
      </div>

      {/* Introduction */}
      <h1 className="font-heading">Introduction</h1>
      <section>
        <h3>Why I created this site ?</h3>
        <p>The reason is simple, to learn and practice <CodeText>JavaScript</CodeText>. The core problem of my was that I started <CodeText>React.js</CodeText> before even mastering and understading <CodeText>JS</CodeText> properly. But now I want to master it and this site will serve as notes, so in future I don&apos;t have to go through tutorials and docs again and again.</p>
      </section>
      <section>
        <h3>Who I am ?</h3>
        <p>I&apos;am just a regular developer who&apos;s constantly learning and trying to adapting new things<i className="text-muted-foreground"> ~Tech.</i></p>
      </section>

      <h2>Getting Started</h2>
      <section>
        <p>Let&apos;s start our talk with very basics of <CodeText>JavaScript</CodeText>. In early days when <CodeText>Node.js</CodeText> was not there, we used to run <CodeText>JS</CodeText> in <CodeText>browser</CodeText> only. People used to run <CodeText>JS</CodeText> in chrome browser to teach or play with it.</p>
        <div className="flex items-center gap-2 mx-1 my-2">
          <Quote>Have you tried ?</Quote>
          <div className="flex item-center space-x-4">
            <KbdGroup>
              <Kbd>F12</Kbd>
            </KbdGroup>
            <span>or</span>
            <KbdGroup>
              <Kbd>Ctrl</Kbd> + <Kbd>Shift</Kbd> + <Kbd>I</Kbd>
            </KbdGroup>
            <span>or</span>
            <KbdGroup>
              <Kbd>Cmd</Kbd> + <Kbd>Opt</Kbd> + <Kbd>I</Kbd>
            </KbdGroup>
          </div>
        </div>
        <p>Things aren&apos;t that easy to work with devtool console everytime. Around Sept, 2008 google launched <a href="https://v8.dev/" target="_blank" rel="noreferrer"><CodeText className="hover:text-primary active:translate-y-px">V8 engine</CodeText></a>. And it changed whole tech market.</p>
      </section>

      <section>
        <h4>What is V8 Engine ?</h4>
        <p>It&apos;s an open source high-performance JavaScript and WebAssembly engine developed by Google. Currently used in Chrome and <CodeText>Node.js</CodeText>. In informal language we can say some developers take out the v8 engine from chrome and published a as standalone engine which used anywhere. Now this is where <CodeText>Node.js</CodeText> comes in picture.</p>
      </section>

      <section>
        <h4>What is Node.js?</h4>
        <p>Node.js is a free, open-source, cross-platform, back-end JavaScript runtime environment that runs the V8 JavaScript engine. It was developed by Ryan Dahl in 2009. Right now the it has become backbone of modern web development. It is used for building server-side applications, APIs, and microservices along with frontend part also.</p>
        <p>After that so many new technologies came into the market like <CodeText>React.js</CodeText>, <CodeText>Vue.js</CodeText>, <CodeText>Angular.js</CodeText>, <CodeText>Express</CodeText> etc. Right now javascript is used in very broader sense. It is used in frontend, backend, mobile apps, desktop apps, game development, machine learning, AI, etc.</p>
      </section>

      <section>
        <p>This is the whole story of <CodeText>JavaScript</CodeText>. Now let&apos;s dive into its core and fundamentals.</p>
      </section>
    </div>
  )
}
