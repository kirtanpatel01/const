import { HeadContent, Scripts, createRootRoute, useRouterState, ScrollRestoration } from "@tanstack/react-router"
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools"
import { TanStackDevtools } from "@tanstack/react-devtools"

import appCss from "../styles.css?url"
import { Kbd } from "@/components/ui/kbd"
import ThemeToggle from "@/components/theme-toggle"
import { SidebarProvider } from "@/components/ui/sidebar"
import { TooltipProvider } from "@/components/ui/tooltip"
import { LeftSidebar } from "@/components/left-sidebar"
import { RightSidebar } from "@/components/right-sidebar"

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Const",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname })
  const isLandingPage = pathname === "/"

  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <HeadContent />
      </head>
      <body suppressHydrationWarning className="relative">
        <TooltipProvider>
          <div className="fixed right-4 top-4 z-50 flex items-center gap-2">
            <Kbd>d</Kbd>
            <ThemeToggle />
          </div>
          
          {isLandingPage ? (
            children
          ) : (
            <SidebarProvider>
              <LeftSidebar />
              <main className="flex-1 max-w-3xl mx-auto border-x py-16">
                {children}
              </main>
              <RightSidebar />
            </SidebarProvider>
          )}

          <TanStackDevtools
            config={{ position: "bottom-right" }}
            plugins={[{ name: "Tanstack Router", render: <TanStackRouterDevtoolsPanel /> }]}
          />
        </TooltipProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}
