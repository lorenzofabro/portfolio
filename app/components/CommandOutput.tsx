"use client"

interface CommandOutputProps {
  output: string
}

export default function CommandOutput({ output }: CommandOutputProps) {
  return <div>{output}</div>
}

