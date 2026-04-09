import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarMenuButton,
} from "@/components/ui/sidebar"
import { useRouterState } from "@tanstack/react-router"
import { useEffect, useState } from "react"

export function RightSidebar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname })
  console.log(pathname)

  const [tocRoutes, setTocRoutes] = useState<{ title: string; url: string; items?: { title: string; url: string }[] }[]>([])
  const [activeId, setActiveId] = useState<string>("")

  useEffect(() => {
    let observer: IntersectionObserver | null = null

    // We add a tiny delay to allow the new route's DOM to firmly mount
    const timer = setTimeout(() => {
      // Find all h2 and h3 elements strictly within the `<main>` tag to avoid pulling sidebar elements
      const headings = Array.from(document.querySelectorAll("main h2, main h3")) as HTMLElement[]
      
      const newToc: typeof tocRoutes = []
      let currentH2: typeof tocRoutes[0] | null = null

      headings.forEach((heading) => {
        // Fallback to text hash if id is missing, but prefer existing id
        const urlId = heading.id || heading.innerText.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')
        if (!heading.id) heading.id = urlId
        
        const url = `#${urlId}`
        const title = heading.innerText.trim()

        if (heading.tagName.toLowerCase() === "h2") {
          currentH2 = { title, url, items: [] }
          newToc.push(currentH2)
        } else if (heading.tagName.toLowerCase() === "h3") {
          if (currentH2) {
            currentH2.items?.push({ title, url })
          } else {
            // Edge case: if an H3 exists before any H2
            newToc.push({ title, url })
          }
        }
      })

      setTocRoutes(newToc)

      // Set up Intersection Observer to track which heading is currently active on screen
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveId(entry.target.id)
            }
          })
        },
        { rootMargin: "0px 0px -97% 0px" } // Triggers slightly before hitting top
      )

      headings.forEach((heading) => {
        observer?.observe(heading)
      })

    }, 100)

    return () => {
      clearTimeout(timer)
      if (observer) observer.disconnect()
    }
  }, [pathname])

  return (
    <Sidebar side="right" collapsible="none" className="sticky top-0 h-svh bg-sidebar/5">
      <SidebarContent>
        {tocRoutes.length > 0 && (
          <SidebarGroup>
            <SidebarGroupLabel className="font-heading font-semibold text-primary">On This Page</SidebarGroupLabel>
            <SidebarGroupContent className="mt-2">
              <SidebarMenu>
                {tocRoutes.map((item) => {
                  const isActive = activeId === item.url.replace("#", "")
                  return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton 
                      className={`font-heading transition-opacity duration-200 ${isActive ? "text-primary opacity-100" : "text-muted-foreground opacity-60 hover:opacity-100"}`} 
                      asChild
                    >
                      <a href={item.url}>{item.title}</a>
                    </SidebarMenuButton>
                    {item.items && item.items.length > 0 && (
                      <SidebarMenuSub>
                        {item.items.map((subItem) => {
                          const isSubActive = activeId === subItem.url.replace("#", "")
                          return (
                          <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton 
                              className={`transition-opacity duration-200 ${isSubActive ? "text-primary opacity-100" : "text-muted-foreground opacity-60 hover:opacity-100"}`} 
                              asChild
                            >
                              <a href={subItem.url}>{subItem.title}</a>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        )})}
                      </SidebarMenuSub>
                    )}
                  </SidebarMenuItem>
                )})}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
      </SidebarContent>
    </Sidebar>
  )
}
