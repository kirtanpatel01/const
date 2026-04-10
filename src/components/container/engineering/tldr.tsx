import { P, Section } from '@/components/typography'
import CodeText from '@/components/code-text'
import { IconDiamondsFilled } from '@tabler/icons-react'

export function Tldr() {
  return (
    <Section className="bg-secondary/20 text-secondary-foreground rounded-xl border border-dashed py-3 m-4">
      <P><strong>TL;DR</strong></P>
      <ul className="list-disc pl-5 space-y-2 mt-1 marker:text-primary">
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
      <P className="mt-2 border-t border-muted italic flex items-center gap-2 text-muted-foreground">
        <IconDiamondsFilled size={14} className="text-primary" /> Memory <span className="text-primary">prepares</span>, Execution <span className="text-primary">runs</span>
      </P>
    </Section>
  )
}
