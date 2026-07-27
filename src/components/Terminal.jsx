import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

export default function Terminal() {
    const [isOpen, setIsOpen] = useState(false)
    const [input, setInput] = useState('')
    const [history, setHistory] = useState([
        { type: 'system', text: 'ShivanshOS v1.0.0 (tty1)' },
        { type: 'system', text: 'Type "help" to see available commands.' }
    ])

    const endRef = useRef(null)
    const inputRef = useRef(null)

    // Toggle terminal with Ctrl+` or Ctrl+~
    useEffect(() => {
        const handleKeyDown = (e) => {
            // Allow Ctrl+` or Ctrl+T (fallback) to open terminal
            if ((e.ctrlKey || e.metaKey) && (e.key === '`' || e.key === '~' || e.key.toLowerCase() === 'k')) {
                e.preventDefault()
                setIsOpen(prev => !prev)
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [])

    // Auto focus input when opened
    useEffect(() => {
        if (isOpen) {
            setTimeout(() => inputRef.current?.focus(), 100)
        }
    }, [isOpen])

    // Scroll to bottom on history change
    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [history, isOpen])

    const processCommand = (cmdText) => {
        const args = cmdText.trim().split(/\s+/)
        const cmd = args[0].toLowerCase()

        switch (cmd) {
            case 'help':
                return [
                    'Available commands:',
                    '  whoami          - display current user identity',
                    '  ls              - list directory contents',
                    '  ls projects     - list all featured projects',
                    '  cat <file>      - print file contents (e.g. cat resume.txt)',
                    '  echo <text>     - print text to terminal',
                    '  clear           - clear terminal output',
                    '  sudo            - execute a command as superuser',
                    '  exit            - close the terminal'
                ].join('\n')
            case 'whoami':
                return 'Shivansh Garg\nFull-Stack Developer, Innovator, Problem Solver.\n"Crafting digital experiences with modern technologies."'
            case 'ls':
                if (args[1] === 'projects') {
                    return 'DoodleSync\nGitMate-AIAgent\nDreamscape\nOasisReserve'
                }
                return 'projects/\nskills/\nabout.txt\ncontact.txt\nresume.txt\nsecrets.md'
            case 'cat':
                if (!args[1]) return 'cat: missing file operand'

                switch (args[1].toLowerCase()) {
                    case 'resume.txt':
                        return '[Fetching Data...]\nName: Shivansh Garg\nRole: Full-Stack Dev / Open Source Contributor\nStatus: Available for new opportunities\nDownload PDF: shivanshgarg.me/resume.pdf'
                    case 'about.txt':
                        return 'Passionate about creating scalable web applications that make a difference.\nBridging the gap between design and functionality.'
                    case 'contact.txt':
                        return 'Email: shivanshgarg2005@gmail.com\nGitHub: github.com/Shivansh1251\nLinkedIn: linkedin.com/in/shivansh-garg-22113a294'
                    case 'secrets.md':
                        return 'Permission denied. You do not have the required clearance.'
                    default:
                        return `cat: ${args[1]}: No such file or directory`
                }
            case 'echo':
                return args.slice(1).join(' ') || '\n'
            case 'clear':
                return 'CLEAR_CMD' // Special flag
            case 'sudo':
                return 'guest is not in the sudoers file. This incident will be reported to Shivansh.'
            case 'exit':
                return 'EXIT_CMD'
            case '':
                return null
            default:
                return `bash: ${cmd}: command not found`
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        // Add user input to history
        const userPrompt = `guest@shivansh:~$ ${input}`
        const newHistory = [...history, { type: 'input', text: userPrompt }]

        const output = processCommand(input)

        if (output === 'CLEAR_CMD') {
            setHistory([])
        } else if (output === 'EXIT_CMD') {
            setIsOpen(false)
            setHistory([...newHistory, { type: 'system', text: 'logout' }])
        } else if (output !== null) {
            setHistory([...newHistory, { type: 'output', text: output }])
        } else {
            setHistory(newHistory)
        }

        setInput('')
    }

    // Allow clicking anywhere on the terminal body to focus the input
    const handleTerminalClick = () => {
        inputRef.current?.focus()
    }

    if (!isOpen) return null

    return createPortal(
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6 pointer-events-auto">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/40 backdrop-blur-sm cursor-pointer"
                onClick={() => setIsOpen(false)}
            />

            {/* Terminal Window */}
            <div
                className="relative w-full max-w-3xl h-[60vh] sm:h-[70vh] bg-gray-950/95 border border-gray-700/60 shadow-2xl shadow-purple-500/10 rounded-xl flex flex-col overflow-hidden backdrop-blur-xl animate-scale-in"
                onClick={handleTerminalClick}
            >
                {/* Header Bar */}
                <div className="bg-gray-900/80 px-4 py-3 flex items-center justify-between border-b border-gray-800 shrink-0">
                    <div className="flex gap-2">
                        <button onClick={() => setIsOpen(false)} className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors" />
                        <button className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors" />
                        <button className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors" />
                    </div>
                    <div className="text-gray-400 text-xs font-mono select-none">
                        guest@shivansh: ~
                    </div>
                    <div className="w-10"></div> {/* Spacer for centering */}
                </div>

                {/* Terminal Body */}
                <div className="flex-1 overflow-y-auto p-4 sm:p-5 font-mono text-sm sm:text-base scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
                    <div className="space-y-3">
                        {history.map((line, i) => (
                            <div
                                key={i}
                                className={`whitespace-pre-wrap word-break ${line.type === 'system' ? 'text-cyan-400 opacity-90' :
                                        line.type === 'input' ? 'text-gray-300' : 'text-green-400'
                                    }`}
                            >
                                {line.text}
                            </div>
                        ))}
                    </div>

                    {/* Active Input Line */}
                    <form onSubmit={handleSubmit} className="mt-3 flex items-start">
                        <span className="text-gray-300 mr-2 shrink-0">guest@shivansh:~$</span>
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="flex-1 bg-transparent border-none outline-none text-gray-100 placeholder-transparent focus:ring-0 p-0 font-mono"
                            autoComplete="off"
                            spellCheck="false"
                            autoFocus
                        />
                    </form>
                    <div ref={endRef} className="h-4" />
                </div>
            </div>
        </div>,
        document.body
    )
}
