import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useState } from "react"

interface Step {
  message: string
  stack: string[]
  output: string[]
}

interface StepVisualizerProps {
  steps: Step[]
}

export function StepVisualizer({ steps }: StepVisualizerProps) {
  const [step, setStep] = useState(0)

  const current = steps[step]

  const next = () => setStep((s) => Math.min(steps.length - 1, s + 1))
  const prev = () => setStep((s) => Math.max(0, s - 1))

  return (
    <div className='w-full border border-dashed rounded-xl my-4 overflow-hidden bg-background/50 flex flex-col md:flex-row h-[500px]'>
      {/* Console Side */}
      <div className='flex-1 border-r border-dashed p-4 flex flex-col gap-4'>
        <div className='flex flex-col gap-1'>
          <span className='text-sm  tracking-wider text-muted-foreground font-bold'>Controller</span>
          <div className='flex items-center gap-2'>
            <Button size="sm" variant="outline" onClick={prev} disabled={step === 0}>Previous</Button>
            <Button size="sm" variant="outline" onClick={next} disabled={step === steps.length - 1}>Next</Button>
            <span className='ml-auto text-xs font-mono text-muted-foreground'>Step {step + 1} / {steps.length}</span>
          </div>
        </div>

        <div className='flex flex-col gap-1 flex-1'>
          <span className='text-sm  tracking-wider text-muted-foreground font-bold'>Message</span>
          <div className='bg-secondary/20 rounded-lg p-3 text-sm min-h-[60px] flex items-center border border-primary/5 italic'>
            {current.message}
          </div>
        </div>

        <div className='flex flex-col gap-1 flex-1'>
          <span className='text-sm  tracking-wider text-muted-foreground font-bold'>Console Output</span>
          <div className='bg-zinc-950 rounded-lg p-3 font-mono text-xs flex-1 overflow-auto border border-white/5 space-y-1'>
            {current.output.length === 0 && <span className='text-zinc-600 italic'>No output yet...</span>}
            {current.output.map((out, i) => {
              const isError = out.toLowerCase().includes('error')
              return (
                <div key={i} className={cn('flex gap-2', isError ? 'text-red-400' : 'text-green-400')}>
                  <span className='text-zinc-700'>&gt;</span> {out}
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Visual Side */}
      <div className='flex-1 p-4 flex flex-col items-center justify-end relative bg-grid-white/[0.02]'>
        <div className='absolute top-4 left-4 flex flex-col gap-1'>
          <span className='text-sm  tracking-wider text-muted-foreground font-bold'>Visualization</span>
          <span className='text-xs font-bold'>Call Stack</span>
        </div>

        {/* Stack Container */}
        <div className='w-full max-w-[200px] h-[300px] border-x-2 border-b-2 border-primary/20 rounded-b-xl p-2 flex flex-col-reverse gap-2 relative'>
          {[...current.stack].map((item, i) => (
            <div 
              key={`${item}-${i}`} 
              className={cn(
                "w-full py-3 px-4 rounded-md border flex items-center justify-center font-mono text-xs shadow-sm transition-all animate-in fade-in slide-in-from-bottom-2 duration-300",
                item === "GEC" 
                  ? "bg-primary/20 border-primary/30 text-primary-foreground font-bold" 
                  : "bg-secondary border-primary/10 text-secondary-foreground"
              )}
            >
              {item}
            </div>
          ))}
          
          {current.stack.length === 0 && (
            <div className='absolute inset-0 flex items-center justify-center text-muted-foreground/20 text-sm  tracking-widest font-bold'>
              Empty Stack
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
