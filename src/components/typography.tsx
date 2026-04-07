import React from "react"
import { cn } from "@/lib/utils"

export function H1({ className, ...props }: React.ComponentProps<"h1">) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight text-balance font-heading border-y border-dashed px-4 py-2",
        className
      )}
      {...props}
    />
  )
}

export function H2({ className, ...props }: React.ComponentProps<"h2">) {
  return (
    <h2
      className={cn(
        "scroll-m-20 border-b border-dashed px-4 py-1 text-3xl font-semibold tracking-tight first:mt-0 font-heading",
        className
      )}
      {...props}
    />
  )
}

export function H3({ className, ...props }: React.ComponentProps<"h3">) {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight font-heading",
        className
      )}
      {...props}
    />
  )
}

export function H4({ className, ...props }: React.ComponentProps<"h4">) {
  return (
    <h4
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight font-heading",
        className
      )}
      {...props}
    />
  )
}

export function P({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      className={cn("max-w-7xl leading-7 not-first:mt-3", className)}
      {...props}
    />
  )
}

export function Section({ className, ...props }: React.ComponentProps<"section">) {
  return (
    <section
      className={cn("my-6 px-4", className)}
      {...props}
    />
  )
}
