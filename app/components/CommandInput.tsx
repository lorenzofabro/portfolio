"use client"

import { useState, type KeyboardEvent, type RefObject } from "react"

interface CommandInputProps {
  onSubmit: (command: string) => void
  inputRef: RefObject<HTMLInputElement>
}

export default function CommandInput({ onSubmit, inputRef }: CommandInputProps) {
  const [input, setInput] = useState("")

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && input.trim()) {
      onSubmit(input.trim())
      setInput("")
    }
  }

  return (
    <div className="flex items-center">
      <span className="mr-2">$</span>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        className="bg-transparent outline-none flex-grow"
        ref={inputRef}
      />
    </div>
  )
}

