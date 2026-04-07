import { createFileRoute, Link } from '@tanstack/react-router'
import CodeText from "@/components/code-text"
import Quote from "@/components/quote"
import { Kbd, KbdGroup } from "@/components/ui/kbd"
import { H1, H2, H3, H4, P, Section } from "@/components/typography"

export const Route = createFileRoute('/introduction')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="max-w-3xl mx-auto py-16 border-x">
      {/* Introduction */}
      <Link to="/introduction"><H1 className="font-heading">Introduction</H1></Link>
      <Section>
        <Link to="/introduction" hash="why-created"><H3 id="why-created">Why I created this site ?</H3></Link>
        <P>The reason is simple, to learn and practice <CodeText>JavaScript</CodeText>. The core problem of my was that I started <CodeText>React.js</CodeText> before even mastering and understading <CodeText>JS</CodeText> properly. But now I want to master it and this site will serve as notes, so in future I don&apos;t have to go through tutorials and docs again and again.</P>
      </Section>
      <Section>
        <Link to="/introduction" hash="who-am-i"><H3 id="who-am-i">Who I am ?</H3></Link>
        <P>I&apos;am just a regular developer who&apos;s constantly learning and trying to adapting new things<i className="text-muted-foreground"> ~Tech.</i></P>
      </Section>

      <Link to="/introduction" hash="getting-started"><H2>Getting Started</H2></Link>
      <Section id='getting-started'>
        <P>Let&apos;s start our talk with very basics of <CodeText>JavaScript</CodeText>. In early days when <CodeText>Node.js</CodeText> was not there, we used to run <CodeText>JS</CodeText> in <CodeText>browser</CodeText> only. People used to run <CodeText>JS</CodeText> in chrome browser to teach or play with it.</P>
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
        <P>Things aren&apos;t that easy to work with devtool console everytime. Around Sept, 2008 google launched <a href="https://v8.dev/" target="_blank" rel="noreferrer"><CodeText className="hover:text-primary active:translate-y-px">V8 engine</CodeText></a>. And it changed whole tech market.</P>
      </Section>

      <Section>
        <Link to="/introduction" hash="v8-engine"><H4 id="v8-engine">What is V8 Engine ?</H4></Link>
        <P>It&apos;s an open source high-performance JavaScript and WebAssembly engine developed by Google. Currently used in Chrome and <CodeText>Node.js</CodeText>. In informal language we can say some developers take out the v8 engine from chrome and published a as standalone engine which used anywhere. Now this is where <CodeText>Node.js</CodeText> comes in picture.</P>
      </Section>

      <Section>
        <Link to="/introduction" hash="node-js"><H4 id="node-js">What is Node.js?</H4></Link>
        <P>Node.js is a free, open-source, cross-platform, back-end JavaScript runtime environment that runs the V8 JavaScript engine. It was developed by Ryan Dahl in 2009. Right now the it has become backbone of modern web development. It is used for building server-side applications, APIs, and microservices along with frontend part also.</P>
        <P>After that so many new technologies came into the market like <CodeText>React.js</CodeText>, <CodeText>Vue.js</CodeText>, <CodeText>Angular.js</CodeText>, <CodeText>Express</CodeText> etc. Right now javascript is used in very broader sense. It is used in frontend, backend, mobile apps, desktop apps, game development, machine learning, AI, etc.</P>
      </Section>

      <Section>
        <P>This is the whole story of <CodeText>JavaScript</CodeText>. Now let&apos;s dive into its core and fundamentals.</P>
      </Section>
    </div>
  )
}
