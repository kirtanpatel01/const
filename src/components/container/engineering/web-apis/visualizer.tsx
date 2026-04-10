import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useState } from "react"

export interface WebApiStep {
  message: string
  stack: string[]
  webApis: string[]
  output: string[]
}

interface WebApiVisualizerProps {
  steps: WebApiStep[]
}

export function WebApiVisualizer({ steps }: WebApiVisualizerProps) {
  const [step, setStep] = useState(0)

  const current = steps[step]

  const next = () => setStep((s) => Math.min(steps.length - 1, s + 1))
  const prev = () => setStep((s) => Math.max(0, s - 1))

  return (
    <div className='w-full border border-dashed rounded-xl my-4 overflow-hidden bg-background/50 flex flex-col h-[700px] md:h-[600px]'>
      {/* Top Header */}
      <div className='border-b border-dashed p-4 flex items-center justify-between bg-muted/5'>
        <div className='flex flex-col gap-1'>
          <span className='text-sm tracking-wider text-muted-foreground font-bold uppercase'>Controller</span>
          <div className='flex items-center gap-2'>
            <Button size="sm" variant="outline" onClick={prev} disabled={step === 0}>Previous</Button>
            <Button size="sm" variant="outline" onClick={next} disabled={step === steps.length - 1}>Next</Button>
            <span className='text-xs font-mono text-muted-foreground ml-2'>Step {step + 1} / {steps.length}</span>
          </div>
        </div>
        <div className='flex flex-col gap-1 text-right'>
           <span className='text-sm tracking-wider text-muted-foreground font-bold uppercase'>Message</span>
           <div className='text-sm italic text-primary min-h-[20px]'>
             {current.message}
           </div>
        </div>
      </div>

      <div className='flex-1 flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-dashed'>
        {/* Call Stack Section */}
        <div className='flex-1 p-6 flex flex-col items-center relative bg-grid-white/[0.02]'>
           <div className='absolute top-4 left-4 flex flex-col gap-1'>
            <span className='text-sm tracking-wider text-muted-foreground font-bold uppercase'>Call Stack</span>
            <span className='text-[10px] text-muted-foreground italic font-mono'>Synchronous Execution</span>
          </div>

          <div className='w-full max-w-[180px] h-[300px] border-x-2 border-b-2 border-primary/20 rounded-b-xl mt-auto p-2 flex flex-col-reverse gap-2 relative'>
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
              <div className='absolute inset-0 flex items-center justify-center text-muted-foreground/10 text-[10px] uppercase tracking-widest font-bold'>
                Idle
              </div>
            )}
          </div>
        </div>

        {/* Web APIs Section */}
        <div className='flex-1 p-6 flex flex-col items-center relative bg-blue-500/2'>
           <div className='absolute top-4 left-4 flex flex-col gap-1'>
            <span className='text-sm tracking-wider text-blue-400 font-bold uppercase'>Web APIs</span>
            <span className='text-[10px] text-muted-foreground italic font-mono'>Browser Environment</span>
          </div>

          <div className='w-full h-full flex flex-col items-center justify-center gap-3 py-16'>
            {current.webApis.map((api, i) => (
              <div 
                key={`${api}-${i}`} 
                className='w-full max-w-[200px] p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg flex flex-col gap-2 animate-in zoom-in duration-300 relative overflow-hidden'
              >
                <div className='flex items-center justify-between'>
                   <span className='text-xs font-bold text-blue-300'>{api}</span>
                   <span className='w-2 h-2 bg-blue-400 rounded-full animate-pulse' />
                </div>
                {/* Progress bar simulation for timer */}
                <div className='h-1 w-full bg-blue-900/50 rounded-full overflow-hidden'>
                  <div className='h-full bg-blue-400 animate-[progress_2s_linear_infinite]' style={{ width: '100%' }} />
                </div>
              </div>
            ))}
            {current.webApis.length === 0 && (
              <div className='text-muted-foreground/10 text-[10px] uppercase tracking-widest font-bold mt-auto'>
                No Active Timers
              </div>
            )}
          </div>
        </div>

        {/* Console Side */}
        <div className='flex-1 p-6 flex flex-col gap-4 bg-zinc-950/20'>
           <div className='flex flex-col gap-1'>
            <span className='text-sm tracking-wider text-muted-foreground font-bold uppercase'>Console</span>
          </div>
          
          <div className='bg-zinc-950 rounded-lg p-3 font-mono text-xs flex-1 overflow-auto border border-white/5 space-y-1'>
            {current.output.length === 0 && <span className='text-zinc-600 italic'>Waiting for logs...</span>}
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
    </div>
  )
}
