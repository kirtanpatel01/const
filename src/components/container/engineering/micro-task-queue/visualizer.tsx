import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useState } from "react"

export interface MicroStep {
  message: string
  stack: string[]
  webApis: string[]
  microQueue: string[]
  taskQueue: string[]
  output: string[]
}

interface MicroVisualizerProps {
  steps: MicroStep[]
}

export function MicroVisualizer({ steps }: MicroVisualizerProps) {
  const [step, setStep] = useState(0)
  const current = steps[step]

  const next = () => setStep((s) => Math.min(steps.length - 1, s + 1))
  const prev = () => setStep((s) => Math.max(0, s - 1))

  return (
    <div className='w-full border rounded-2xl my-6 overflow-hidden bg-zinc-50 dark:bg-zinc-950/50 flex flex-col h-[900px] md:h-[650px] shadow-sm'>
      {/* Header Controller */}
      <div className='border-b p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-white dark:bg-zinc-900/50'>
        <div className='flex flex-col gap-1'>
          <span className='text-sm font-semibold text-zinc-500'>Priority Execution</span>
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
      <div className='flex-1 grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-200 dark:bg-zinc-800/50 overflow-hidden'>
        
        {/* 1. Call Stack (Full Height) */}
        <div className='bg-white dark:bg-zinc-950/40 p-5 flex flex-col'>
          <span className='text-xs font-bold text-zinc-400 mb-4'>Call Stack</span>
          <div className='flex-1 flex flex-col-reverse justify-start items-center gap-2 border-x-2 border-b-2 border-dashed border-zinc-200 dark:border-zinc-800 rounded-b-xl p-3 relative mt-auto'>
            {current.stack.map((item, i) => (
              <div 
                key={`${item}-${i}`} 
                className={cn(
                  "w-full max-w-[160px] py-2.5 px-4 rounded-lg text-sm font-medium border shadow-sm transition-all animate-in fade-in slide-in-from-bottom-2 duration-300",
                  item === "GEC" 
                    ? "bg-zinc-100 dark:bg-zinc-800 border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100" 
                    : "bg-primary/10 border-primary/20 text-primary"
                )}
              >
                {item}
              </div>
            ))}
            {current.stack.length === 0 && (
              <span className='text-[10px] text-zinc-300 dark:text-zinc-700 font-medium italic'>Stack is empty</span>
            )}
          </div>
        </div>

        {/* 2. Middle Column: Web APIs & Console */}
        <div className='grid grid-rows-2 gap-px bg-zinc-200 dark:bg-zinc-800/50'>
           {/* Web APIs */}
           <div className='bg-white dark:bg-zinc-950/40 p-5 flex flex-col'>
             <span className='text-xs font-bold text-zinc-400 mb-4'>Web APIs</span>
             <div className='flex-1 flex flex-wrap content-center justify-center gap-2'>
               {current.webApis.map((api, i) => (
                 <div key={i} className='px-3 py-2 bg-blue-50 dark:bg-blue-500/5 border border-blue-200 dark:border-blue-500/20 rounded-lg text-xs font-medium text-blue-600 dark:text-blue-400 animate-in zoom-in duration-300'>
                   {api}
                 </div>
               ))}
               {current.webApis.length === 0 && <span className='text-[10px] text-zinc-300 dark:text-zinc-700 italic'>None</span>}
             </div>
           </div>
           {/* Console */}
           <div className='bg-zinc-900 dark:bg-zinc-950 p-5 flex flex-col'>
             <span className='text-xs font-bold text-zinc-500 mb-4'>Console</span>
             <div className='flex-1 font-mono text-sm space-y-1 overflow-auto custom-scrollbar'>
               {current.output.map((line, i) => (
                 <div key={i} className='flex gap-2 text-zinc-300'>
                   <span className='text-zinc-600 font-bold'>&gt;</span>
                   <span className='text-emerald-400'>{line}</span>
                 </div>
               ))}
             </div>
           </div>
        </div>

        {/* 3. Right Column: The Queues */}
        <div className='grid grid-rows-2 gap-px bg-zinc-200 dark:bg-zinc-800/50'>
           {/* Microtask Queue */}
           <div className='bg-white dark:bg-zinc-950/40 p-5 flex flex-col'>
             <span className='text-xs font-bold text-pink-500/70 mb-4'>Microtask Queue (High Priority)</span>
             <div className='flex-1 flex flex-col justify-center gap-2'>
               {current.microQueue.map((task, i) => (
                 <div key={i} className='p-2 bg-pink-50 dark:bg-pink-500/5 border border-pink-200 dark:border-pink-500/20 rounded text-xs font-medium text-pink-600 dark:text-pink-400 animate-in slide-in-from-right-4 duration-300'>
                   {task}
                 </div>
               ))}
               {current.microQueue.length === 0 && <span className='text-[10px] text-zinc-300 dark:text-zinc-700 italic text-center'>Queue empty</span>}
             </div>
           </div>
           {/* Task Queue */}
           <div className='bg-white dark:bg-zinc-950/40 p-5 flex flex-col'>
             <span className='text-xs font-bold text-amber-500/70 mb-4'>Task Queue (Low Priority)</span>
             <div className='flex-1 flex flex-col justify-center gap-2'>
               {current.taskQueue.map((task, i) => (
                 <div key={i} className='p-2 bg-amber-50 dark:bg-amber-500/5 border border-amber-200 dark:border-amber-500/20 rounded text-xs font-medium text-amber-600 dark:text-amber-400 animate-in slide-in-from-right-4 duration-300'>
                   {task}
                 </div>
               ))}
               {current.taskQueue.length === 0 && <span className='text-[10px] text-zinc-300 dark:text-zinc-700 italic text-center'>Queue empty</span>}
             </div>
           </div>
        </div>

      </div>
    </div>
  )
}
