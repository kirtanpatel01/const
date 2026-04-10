import { Link } from '@tanstack/react-router'
import { H2, P, Section } from '@/components/typography'
import CodeText from '@/components/code-text'
import Quote from '@/components/quote'
import { Monaco } from '@/components/monacco'
import { EventLoopVisualizer } from './visualizer'
import { eventLoopSteps } from './steps'

export function EventLoop() {
  return (
    <>
      <Link to="/engineering" hash="event-loop">
        <H2 id="event-loop">Event Loop</H2>
      </Link>

      <Section>
        <P>
          We have all the pieces now: the Call Stack, the Web APIs, and the two Queues. But these pieces don&apos;t move on their own. They need a supervisor that constantly orchestrates the flow of data. This supervisor is the <CodeText className="text-primary font-bold">Event Loop</CodeText>.
        </P>

        <P>
          The Event Loop is essentially an infinite loop that keeps running as long as your application is open. Its only job is to look at the Call Stack and the Queues, and decide which piece of code should run next.
        </P>

        <P>
          In plain English, the logic is simple. It waits for the Call Stack to be completely empty. In the example below, even if Itadori and Megumi finish their synchronous logs, the Event Loop still has work to do.
        </P>

        <EventLoopVisualizer steps={eventLoopSteps} />

        <P>
          Look at how Gojo and Sukuna are handled. Gojo expanding his Domain is a Microtask, so he gets the VIP treatment and executes the moment the stack is clear. Sukuna, however, is stuck in the Task Queue. He must wait for the "Infinite Void" to finish completely before the Event Loop finally picks him up.
        </P>

        <Quote>
          The Event Loop is what makes JavaScript feel multi-threaded even though it is strictly single-threaded. It offloads work to the environment and then schedules it back when the time is right.
        </Quote>

        <P className="mt-4 font-medium">
          Now that you see the full picture, you can finally understand why some code runs "out of order" and why a delay of 0ms still waits for the rest of your script to finish. It all comes down to the rhythm of this one single loop.
        </P>
      </Section>
    </>
  )
}
