import { Link } from '@tanstack/react-router'
import { H3, P, Section } from '@/components/typography'
import CodeText from '@/components/code-text'
import { Monaco } from '@/components/monacco'
import { IconArrowRight } from '@tabler/icons-react'

export function CodeExecutionPhase() {
  return (
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
        <ul className="pl-2">
          <li className="flex items-center gap-2"><IconArrowRight size={16} className="text-primary" /> First line: nothing happens (already handled)</li>
          <li className="flex items-center gap-2"><IconArrowRight size={16} className="text-primary" /> Second line: <CodeText>console.log(anime)</CodeText> → prints <CodeText>undefined</CodeText></li>
          <li className="flex items-center gap-2"><IconArrowRight size={16} className="text-primary" /> Third line: value gets updated to "Naruto"</li>
          <li className="flex items-center gap-2"><IconArrowRight size={16} className="text-primary" /> Fourth line: <CodeText>console.log(anime)</CodeText> → prints <CodeText>Naruto</CodeText></li>
        </ul>
      </P>

      <P>
        This is the key idea: execution phase doesn&apos;t &quot;prepare&quot; anything &mdash; it just runs things in order.
      </P>

      <P>
        In short: memory phase sets the stage, execution phase plays the scene.
      </P>
    </Section>
  )
}
