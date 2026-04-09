import { cn } from '@/lib/utils'
import React from 'react'

function CodeText({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <code className={cn("relative rounded bg-muted px-1 py-px font-mono text-sm", className)}>{children}</code>
  )
}

export default CodeText