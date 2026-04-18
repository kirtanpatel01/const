import Assignment from '@/components/container/operations/assignment-and-math'
import Comparision from '@/components/container/operations/comparision'
import { H1 } from '@/components/typography'
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/operations')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <Link to="/operations">
      <H1>Operations</H1>
    </Link>
    <Assignment />
    <Comparision />
  </div>
}
