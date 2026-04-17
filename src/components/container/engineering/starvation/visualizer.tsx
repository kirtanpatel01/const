import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { IconAlertTriangle, IconRotate } from "@tabler/icons-react"

export interface StarveStep {
  message: string
  isStuck: boolean
  microTasks: string[]
  taskQueue: string[]
  output: string[]
}

interface StarvationVisualizerProps {
  steps: StarveStep[]
}

export function StarvationVisualizer({ steps }: StarvationVisualizerProps) {
  const [step, setStep] = useState(0)
  const current = steps[step]

  const next = () => setStep((s) => Math.min(steps.length - 1, s + 1))
  const prev = () => setStep((s) => Math.max(0, s - 1))

  return (
    <div className='w-full border rounded-2xl my-6 overflow-hidden bg-zinc-50 dark:bg-zinc-950/50 flex flex-col h-187.5 shadow-sm'>
      {/* Header Controller */}
      <div className='border-b p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-white dark:bg-zinc-900/50'>
        <div className='flex flex-col gap-1'>
          <span className='text-sm font-semibold text-zinc-500'>Starvation Simulation</span>
          <div className='flex items-center gap-3'>
            <div className='flex gap-1'>
              <Button size="sm" variant="secondary" onClick={prev} disabled={step === 0} className="h-8">Previous</Button>
              <Button size="sm" variant="secondary" onClick={next} disabled={step === steps.length - 1} className="h-8">Next</Button>
            </div>
            <span className='text-xs font-medium text-zinc-400'>Step {step + 1} of {steps.length}</span>
          </div>
        </div>
        <div className='flex-1 md:text-right'>
           <p className={cn('text-sm font-medium leading-relaxed max-w-xl md:ml-auto transition-colors', current.isStuck ? 'text-red-500' : 'text-primary')}>
             {current.message}
           </p>
        </div>
      </div>

      <div className='flex-1 grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-200 dark:bg-zinc-800/50 overflow-hidden relative'>
        
        {/* Warning Overlay */}
        {current.isStuck && (
          <div className='absolute inset-0 z-10 bg-red-500/5 backdrop-blur-[1px] flex items-center justify-center pointer-events-none'>
            <div className='bg-red-500 text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-2xl transition-all animate-bounce'>
              <IconAlertTriangle size={16} />
              <span className='text-xs font-bold uppercase tracking-widest'>Main Thread Frozen</span>
            </div>
          </div>
        )}

        {/* 1. Microtask Queue (The Devourer) */}
        <div className='bg-white dark:bg-zinc-950/40 p-6 flex flex-col'>
          <div className='flex items-center justify-between mb-6'>
            <span className='text-xs font-bold text-pink-500'>Microtask Queue (Recursive)</span>
            <div className='px-2 py-0.5 rounded bg-pink-500/10 text-pink-500 text-[10px] font-bold uppercase'>Draining...</div>
          </div>
          
          <div className='flex-1 flex flex-col gap-2 overflow-y-auto custom-scrollbar p-1'>
            {current.microTasks.map((task, i) => (
              <div 
                key={`${task}-${i}`} 
                className='w-full py-3 px-4 bg-pink-50 dark:bg-pink-500/5 border border-pink-200 dark:border-pink-500/20 rounded-lg text-sm font-medium text-pink-600 dark:text-pink-400 shadow-sm animate-in slide-in-from-top-2 duration-300'
              >
                {task}
              </div>
            ))}
            {current.microTasks.length === 0 && (
              <span className='text-xs text-zinc-300 italic text-center mt-10'>No tasks.</span>
            )}
          </div>
        </div>

        {/* 2. Task Queue (The Starved) */}
        <div className='bg-white dark:bg-zinc-950/40 p-6 flex flex-col border-l border-zinc-200 dark:border-zinc-800'>
          <div className='flex items-center justify-between mb-6'>
            <span className='text-xs font-bold text-amber-500'>Task Queue</span>
            <div className='px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-400 text-[10px] font-bold uppercase'>Waiting...</div>
          </div>
          
          <div className='flex-1 flex flex-col gap-2 p-1'>
            {current.taskQueue.map((task, i) => (
              <div 
                key={`${task}-${i}`} 
                className='w-full py-3 px-4 bg-zinc-50 dark:bg-zinc-800/20 border border-zinc-200 dark:border-zinc-800/40 rounded-lg text-sm font-medium text-zinc-400 opacity-60'
              >
                {task}
              </div>
            ))}
            {current.taskQueue.length === 0 && (
              <span className='text-xs text-zinc-300 italic text-center mt-10'>Waiting for tasks...</span>
            )}
          </div>

          {/* Console Preview */}
          <div className='h-40 mt-6 bg-zinc-950 rounded-xl border border-zinc-800 p-4 flex flex-col'>
            <span className='text-[10px] font-bold text-zinc-600 mb-2 uppercase tracking-widest'>Console Output</span>
            <div className='flex-1 overflow-y-auto font-mono text-xs space-y-1 custom-scrollbar'>
              {current.output.map((line, i) => (
                <div key={i} className='text-emerald-500/80'>
                   <span className='text-zinc-700 mr-2'>&gt;</span>
                   {line}
                </div>
              ))}
              {current.output.length > 5 && <div className='text-[10px] text-zinc-600 italic'>... (repeating infinitely)</div>}
            </div>
          </div>
        </div>

      </div>

      <div className='p-4 border-t bg-white dark:bg-zinc-900 flex items-center justify-between'>
         <div className='flex items-center gap-2 text-xs text-zinc-400 italic'>
           <IconAlertTriangle size={14} className='text-amber-500' />
           The browser won&apos;t even let you click the close button if this happens in real life.
         </div>
         <Button variant='ghost' size='sm' onClick={() => setStep(0)} className='h-8 text-xs'>
           <IconRotate size={12} className='mr-1' /> Reset Simulation
         </Button>
      </div>
    </div>
  )
}
