import DataTypes from '@/components/container/fundamentals/data-types'
import Logging from '@/components/container/fundamentals/logging'
import Scope from '@/components/container/fundamentals/scope'
import Variables from '@/components/container/fundamentals/variables'
import { H1, } from '@/components/typography'
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/fundamentals')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <Link to="/fundamentals">
        <H1 className="font-heading">Fundamentals</H1>
      </Link>
      <Logging />
      <DataTypes />
      <Scope />
      <Variables />
    </div>
  )
}
