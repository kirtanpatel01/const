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

  // Build TOC on route change
  useEffect(() => {
    // Reset active ID when pathname changes
    setActiveId("")

    // Use requestAnimationFrame to ensure DOM is fully painted
    const buildToc = () => {
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
    }

    // Wait for next paint, then check again to ensure content is rendered
    requestAnimationFrame(() => {
      requestAnimationFrame(buildToc)
    })
  }, [pathname])

  // Set up scroll listener to track active heading
  useEffect(() => {
    const headings = Array.from(document.querySelectorAll("main h2, main h3")) as HTMLElement[]
    
    if (headings.length === 0) return

    const handleScroll = () => {
      let active = ""
      
      // Find the heading closest to the top of the viewport
      for (let i = headings.length - 1; i >= 0; i--) {
        if (headings[i].getBoundingClientRect().top <= 100) {
          active = headings[i].id
          break
        }
      }
      
      setActiveId(active)
    }

    // Listen to scroll events with throttling
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", onScroll)
    
    // Initial check
    handleScroll()

    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [tocRoutes]) // Re-setup when TOC changes

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
