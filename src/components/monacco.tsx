import { useState } from "react"
import { Button } from "./ui/button"
import { IconPlayerPlay, IconRotate } from "@tabler/icons-react"
import { Editor } from "@monaco-editor/react"

export function Monaco({ initialCode }: { initialCode: string }) {
  const [code, setCode] = useState(initialCode)
  const [output, setOutput] = useState<string[]>([])
  const [editorHeight, setEditorHeight] = useState(100)

  const runCode = () => {
    const logs: string[] = []
    const originalLog = console.log
    console.log = (...args) => {
      logs.push(args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' '))
    }
    
    try {
      new Function(code)()
    } catch (err: any) {
      logs.push(`Error: ${err.message}`)
    } finally {
      console.log = originalLog
    }
    setOutput(logs)
  }

  const handleEditorDidMount = (editor: any) => {
    const updateHeight = () => {
      const contentHeight = editor.getContentHeight()
      setEditorHeight(contentHeight + 10)
    }
    editor.onDidContentSizeChange(updateHeight)
    updateHeight()
  }

  return (
    <div className="my-4 border rounded-xl overflow-hidden bg-background">
      <div className="flex items-center justify-end px-2 py-2 border-b bg-muted/40 font-mono">
        <div className="flex items-center gap-2">
           <Button 
             onClick={() => { setCode(initialCode); setOutput([]) }}
             variant="outline"
             size="sm"
           >
             <IconRotate size={12} /> Reset
           </Button>
           <Button 
             onClick={runCode}
             size="sm"
           >
             <IconPlayerPlay size={12} fill="currentColor" /> Run
           </Button>
        </div>
      </div>
      <Editor
        height={editorHeight}
        defaultLanguage="javascript"
        value={code}
        onMount={handleEditorDidMount}
        onChange={(val) => setCode(val || "")}
        theme="vs-dark"
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          lineNumbersMinChars: 3,
          scrollBeyondLastLine: false,
          automaticLayout: true,
          padding: { top: 10, bottom: 10 },
          scrollbar: {
            vertical: 'hidden',
            horizontal: 'auto',
            handleMouseWheel: false
          }
        }}
      />
      <div className="border-t bg-muted/10 p-2 font-mono text-sm min-h-[70px] whitespace-pre-wrap">
        <div className="text-sm font-bold tracking-tight text-muted-foreground mb-2">Console</div>
        {output.length > 0 ? (
          output.map((line, i) => (
            <div key={i} className={line.startsWith('Error') ? 'text-destructive' : ''}>
              {"> "}{line}
            </div>
          ))
        ) : (
          <span className="opacity-30 italic">Click Run to see output...</span>
        )}
      </div>
    </div>
  )
}
