'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const commands = {
  help: 'Available commands: help, about, skills, contact',
  about: 'I am a fullstack developer passionate about creating efficient and user-friendly applications.',
  skills: 'My skills include: JavaScript, React, Node.js, Python, SQL, and more.',
  contact: 'You can reach me at: your.email@example.com',
}

const InteractiveTerminal = () => {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState<string[]>(['Welcome! Type "help" to see available commands.'])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const trimmedInput = input.trim().toLowerCase()
    setOutput(prev => [...prev, `$ ${input}`, commands[trimmedInput] || 'Command not found. Type "help" for available commands.'])
    setInput('')
  }

  useEffect(() => {
    const terminal = document.getElementById('terminal-output')
    if (terminal) {
      terminal.scrollTop = terminal.scrollHeight
    }
  }, [output])

  return (
    <div className="bg-gray-900 text-green-500 p-4 rounded-lg shadow-lg font-mono">
      <div id="terminal-output" className="h-40 overflow-y-auto mb-4">
        <AnimatePresence>
          {output.map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {line}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <form onSubmit={handleSubmit} className="flex">
        <span className="mr-2">$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow bg-transparent outline-none"
          autoFocus
        />
      </form>
    </div>
  )
}

export default InteractiveTerminal

