"use client"

import { useState, useRef, useEffect } from "react"
import CommandInput from "./CommandInput"
import { useCommands } from "../hooks/useCommands"

export default function Terminal() {
  const [history, setHistory] = useState<string[]>([])
  const { executeCommand } = useCommands()
  const terminalRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null) as React.RefObject<HTMLInputElement>

  const scrollToBottom = () => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }

  useEffect(() => {
    scrollToBottom()
    inputRef.current?.focus()
  }, [history, scrollToBottom]) // Added scrollToBottom to dependencies

  const handleCommand = async (command: string) => {
    if (command.toLowerCase() === "clear") {
      setHistory([])
    } else {
      const output = await executeCommand(command)
      setHistory((prev) => [...prev, `$ ${command}`, output])
    }
  }

  return (
    <div className="bg-[#0d1117] text-green-400 p-4 font-mono h-screen overflow-auto" ref={terminalRef}>
      <div className="mb-4 space-y-2">
        <div className="text-xl font-bold mb-2">Lorenzo Fabro - Terminal Portfolio</div>
        <div>Welcome! I'm a Senior Fullstack Developer based in Copenhagen, Denmark.</div>
        <div>Type 'help' to see available commands.</div>
      </div>
      {history.map((item, index) => (
        <div key={index} className="whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: item }} />
      ))}
      <CommandInput onSubmit={handleCommand} inputRef={inputRef} />
    </div>
  )
}

