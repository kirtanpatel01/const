import { cn } from "@/lib/utils"

function Quote({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={cn(
      "my-4 py-1 border-l-2 pl-3 italic relaxed gap-2 text-sm tracking-wider",
      className
    )}>{children}</div>
  )
}

export default Quote