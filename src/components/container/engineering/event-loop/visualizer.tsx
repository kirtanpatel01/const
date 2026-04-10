import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { IconRotateClockwise2 } from "@tabler/icons-react"

export interface EventLoopStep {
  message: string
  checking: 'stack' | 'micro' | 'task' | 'none'
  stack: string[]
  microQueue: string[]
  taskQueue: string[]
  output: string[]
}

interface EventLoopVisualizerProps {
  steps: EventLoopStep[]
}

export function EventLoopVisualizer({ steps }: EventLoopVisualizerProps) {
  const [step, setStep] = useState(0)
  const current = steps[step]

  const next = () => setStep((s) => Math.min(steps.length - 1, s + 1))
  const prev = () => setStep((s) => Math.max(0, s - 1))

  return (
    <div className='w-full border rounded-2xl my-6 overflow-hidden bg-zinc-50 dark:bg-zinc-950/50 flex flex-col h-[850px] md:h-[650px] shadow-sm'>
      {/* Header Controller */}
      <div className='border-b p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-white dark:bg-zinc-900/50'>
        <div className='flex flex-col gap-1'>
          <span className='text-sm font-semibold text-zinc-500'>Event Loop Logic</span>
          <div className='flex items-center gap-3'>
            <div className='flex gap-1'>
              <Button size="sm" variant="secondary" onClick={prev} disabled={step === 0} className="h-8">Previous</Button>
              <Button size="sm" variant="secondary" onClick={next} disabled={step === steps.length - 1} className="h-8">Next</Button>
            </div>
            <span className='text-xs font-medium text-zinc-400'>Step {step + 1} of {steps.length}</span>
          </div>
        </div>
        <div className='flex-1 md:text-right'>
           <p className='text-sm text-primary font-medium leading-relaxed max-w-xl md:ml-auto'>
             {current.message}
           </p>
        </div>
      </div>

      {/* Main Grid Visualizer */}
      <div className='flex-1 grid grid-cols-1 md:grid-cols-12 gap-px bg-zinc-200 dark:bg-zinc-800/50 overflow-hidden'>
        
        {/* Left: Call Stack (Col 1-4) */}
        <div className='md:col-span-4 bg-white dark:bg-zinc-950/40 p-6 flex flex-col relative'>
          <div className='flex items-center justify-between mb-4'>
            <span className={cn('text-xs font-bold transition-colors', current.checking === 'stack' ? 'text-primary animate-pulse' : 'text-zinc-400')}>Call Stack</span>
            {current.checking === 'stack' && <div className='h-2 w-2 rounded-full bg-primary animate-ping' />}
          </div>
          
          <div className={cn(
            'flex-1 flex flex-col-reverse justify-start items-center gap-2 border-x-2 border-b-2 border-dashed rounded-b-xl p-4 mt-auto transition-colors',
            current.checking === 'stack' ? 'border-primary/40 bg-primary/[0.02]' : 'border-zinc-200 dark:border-zinc-800'
          )}>
            {current.stack.map((item, i) => (
              <div 
                key={`${item}-${i}`} 
                className={cn(
                  "w-full max-w-[180px] py-3 px-4 rounded-lg text-sm font-medium border shadow-sm transition-all animate-in fade-in slide-in-from-bottom-2 duration-300",
                  item === "GEC" 
                    ? "bg-zinc-100 dark:bg-zinc-800 border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100" 
                    : "bg-primary/10 border-primary/20 text-primary"
                )}
              >
                {item}
              </div>
            ))}
            {current.stack.length === 0 && (
              <span className='text-[10px] text-zinc-300 dark:text-zinc-700 font-medium italic'>Empty stack</span>
            )}
          </div>
        </div>

        {/* Center: Event Loop Indicator (Col 5-6) */}
        <div className='md:col-span-2 bg-zinc-50 dark:bg-zinc-950/20 flex flex-col items-center justify-center p-4'>
           <div className={cn(
             'p-6 rounded-full border-2 border-dashed transition-all duration-500 bg-white dark:bg-zinc-900 shadow-xl relative',
             current.checking !== 'none' ? 'border-primary/50 rotate-90' : 'border-zinc-200 dark:border-zinc-800'
           )}>
              <IconRotateClockwise2 
                size={32} 
                className={cn('transition-all', current.checking !== 'none' ? 'text-primary animate-spin' : 'text-zinc-300')} 
              />
              <div className='absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap'>
                <span className='text-[10px] font-bold uppercase tracking-widest text-zinc-400'>Event Loop</span>
              </div>
           </div>
        </div>

        {/* Right: Queues & Console (Col 7-12) */}
        <div className='md:col-span-6 grid grid-rows-3 gap-px bg-zinc-200 dark:bg-zinc-800/50'>
           {/* Microtask Queue */}
           <div className={cn('bg-white dark:bg-zinc-950/40 p-5 flex flex-col transition-colors', current.checking === 'micro' ? 'bg-pink-500/[0.02]' : '')}>
             <span className={cn('text-xs font-bold transition-colors mb-3', current.checking === 'micro' ? 'text-pink-500 animate-pulse' : 'text-zinc-400')}>Microtask Queue</span>
             <div className='flex items-center gap-2 overflow-x-auto h-full px-2'>
               {current.microQueue.map((task, i) => (
                 <div key={i} className='px-3 py-2 bg-pink-50 dark:bg-pink-500/5 border border-pink-200 dark:border-pink-500/20 rounded-lg text-xs font-medium text-pink-600 dark:text-pink-400 min-w-[100px] text-center'>
                   {task}
                 </div>
               ))}
               {current.microQueue.length === 0 && <span className='text-[10px] text-zinc-200 dark:text-zinc-800 italic'>Empty</span>}
             </div>
           </div>

           {/* Task Queue */}
           <div className={cn('bg-white dark:bg-zinc-950/40 p-5 flex flex-col transition-colors', current.checking === 'task' ? 'bg-amber-500/[0.02]' : '')}>
             <span className={cn('text-xs font-bold transition-colors mb-3', current.checking === 'task' ? 'text-amber-500 animate-pulse' : 'text-zinc-400')}>Task Queue</span>
             <div className='flex items-center gap-2 overflow-x-auto h-full px-2'>
               {current.taskQueue.map((task, i) => (
                 <div key={i} className='px-3 py-2 bg-amber-50 dark:bg-amber-500/5 border border-amber-200 dark:border-amber-500/20 rounded-lg text-xs font-medium text-amber-600 dark:text-amber-400 min-w-[100px] text-center'>
                   {task}
                 </div>
               ))}
               {current.taskQueue.length === 0 && <span className='text-[10px] text-zinc-200 dark:text-zinc-800 italic'>Empty</span>}
             </div>
           </div>

           {/* Console */}
           <div className='bg-zinc-900 dark:bg-zinc-950 p-5 flex flex-col'>
             <span className='text-xs font-bold text-zinc-500 mb-3'>Console</span>
             <div className='flex-1 font-mono text-xs space-y-1 overflow-auto custom-scrollbar'>
               {current.output.map((line, i) => (
                 <div key={i} className='flex gap-2 text-zinc-400'>
                   <span className='text-zinc-700 font-bold'>&gt;</span>
                   <span className='text-emerald-400'>{line}</span>
                 </div>
               ))}
             </div>
           </div>
        </div>

      </div>
    </div>
  )
}
