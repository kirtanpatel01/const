import { H1 } from '@/components/typography'
import { createFileRoute, Link } from '@tanstack/react-router'
import { HowJsWorks } from '@/components/container/engineering/how-js-works'
import { GlobalExecutionContext } from '@/components/container/engineering/global-execution-context'
import { MemoryCreationPhase } from '@/components/container/engineering/memory-creation-phase'
import { CodeExecutionPhase } from '@/components/container/engineering/code-execution-phase'
import { Tldr } from '@/components/container/engineering/tldr'
import { FunctionExecutionContext } from '@/components/container/engineering/function-execution-context'
import { CallStack } from '@/components/container/engineering/call-stack'
import { WebApis } from '@/components/container/engineering/web-apis'
import { TaskQueue } from '@/components/container/engineering/task-queue'
import { MicrotaskQueue } from '@/components/container/engineering/micro-task-queue'
import { EventLoop } from '@/components/container/engineering/event-loop'
import { Starvation } from '@/components/container/engineering/starvation'

export const Route = createFileRoute('/engineering')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <Link to="/engineering">
        <H1 className="font-heading">Engineering</H1>
      </Link>
      
      <HowJsWorks />
      <GlobalExecutionContext />
      <MemoryCreationPhase />
      <CodeExecutionPhase />
      <Tldr />
      <FunctionExecutionContext />
      <CallStack />
      <WebApis />
      <TaskQueue />
      <MicrotaskQueue />
      <EventLoop />
      <Starvation />
    </div>
  )
}

