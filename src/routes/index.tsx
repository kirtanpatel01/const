import { createFileRoute, Link } from "@tanstack/react-router"
import { H1, H2, P } from "@/components/typography"

export const Route = createFileRoute("/")({ component: App })

function App() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center">
      <div className="flex max-w-2xl flex-col items-center gap-6">
        <H1 className="rounded-none bg-accent/30 text-7xl text-primary px-8 py-4">
          Const
        </H1>
        <H2>
          ( Mastering <span className="text-muted-foreground">JavaScript </span>)
        </H2>
        
        <P className="max-w-2xl text-pretty text-lg text-muted-foreground sm:text-xl">
          This is my personal notebook to build a rock-solid foundation so I never need to rewatch tutorials again.
        </P>

        <Link 
          to="/introduction" 
          className="mt-4 inline-flex h-11 animate-in fade-in slide-in-from-bottom-2 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        >
          Read the Docs
        </Link>
      </div>
    </main>
  )
}
