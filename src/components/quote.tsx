function Quote({ children }: { children: React.ReactNode }) {
  return (
    <div className="py-1 border-l-2 pl-3 italic flex items-center gap-2">{children}</div>
  )
}

export default Quote