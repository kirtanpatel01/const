import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar"
import { useRouterState } from "@tanstack/react-router"

export function RightSidebar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname })

  // Define Table of Contents per page
  const toc = pathname === "/introduction" ? [
    { 
      title: "Introduction", 
      url: "#",
      items: [
        { title: "Why I created this site?", url: "#why-created" },
        { title: "Who I am?", url: "#who-am-i" },
      ]
    }, 
    { 
      title: "Getting Started", 
      url: "#getting-started",
      items: [
        { title: "What is V8 Engine?", url: "#v8-engine" },
        { title: "What is Node.js?", url: "#node-js" },
      ]
    },
  ] : []

  return (
    <Sidebar side="right" collapsible="none" className="sticky top-0 h-svh border-l">
      <SidebarContent>
        {toc.length > 0 && (
          <SidebarGroup>
            <SidebarGroupLabel className="font-heading font-semibold text-primary">On This Page</SidebarGroupLabel>
            <SidebarGroupContent className="mt-2">
              <SidebarMenu>
                {toc.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild className="font-medium">
                      <a href={item.url}>
                        {item.title}
                      </a>
                    </SidebarMenuButton>
                    {item.items && item.items.length > 0 && (
                      <SidebarMenuSub>
                        {item.items.map((subItem) => (
                          <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton asChild>
                              <a href={subItem.url}>{subItem.title}</a>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    )}
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
      </SidebarContent>
    </Sidebar>
  )
}
