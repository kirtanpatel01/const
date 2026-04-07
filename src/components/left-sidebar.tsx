import { Link } from "@tanstack/react-router"
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const items = [
  {
    title: "Introduction",
    url: "/introduction",
  },
]

export function LeftSidebar() {
  return (
    <Sidebar collapsible="none" className="sticky top-0 h-svh border-r">
      <SidebarHeader className="px-5 py-6">
        <Link to="/" className="font-heading text-3xl font-extrabold tracking-tight text-primary">
          const
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url} className="[&.active]:font-bold [&.active]:text-primary [&.active]:bg-accent">
                      {item.title}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
