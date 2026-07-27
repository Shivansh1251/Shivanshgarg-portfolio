import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

export default function HackerMode() {
    const [isActive, setIsActive] = useState(false)
    const [showToast, setShowToast] = useState(false)
    const lastTapRef = useRef(0)

    useEffect(() => {
        const handleKeyDown = (e) => {
            // Ignore if typing in input
            if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return

            if (e.key.toLowerCase() === 'h') {
                const now = Date.now()
                // Double tap within 400ms
                if (now - lastTapRef.current < 400) {
                    setIsActive((prev) => {
                        const next = !prev
                        if (next) {
                            setShowToast(true)
                            setTimeout(() => setShowToast(false), 3000)
                        }
                        return next
                    })
                    lastTapRef.current = 0
                } else {
                    lastTapRef.current = now
                }
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [])

    useEffect(() => {
        if (isActive) {
            document.body.classList.add('hacker-theme')
        } else {
            document.body.classList.remove('hacker-theme')
        }
        return () => document.body.classList.remove('hacker-theme')
    }, [isActive])

    return (
        <>
            {isActive && createPortal(
                <>
                    <div className="fixed inset-0 z-[-1] pointer-events-none opacity-40">
                        <MatrixRain />
                    </div>
                    {/* CRT scanline overly */}
                    <div className="hacker-overlay" />
                </>,
                document.body
            )}

            {showToast && createPortal(
                <div className="fixed top-20 left-1/2 -translate-x-1/2 z-[9999] bg-black border border-green-500 text-green-500 px-6 py-3 font-mono text-sm sm:text-base">
                    <span className="animate-pulse">SYSTEM COMPROMISED // HACKER MODE INITIATED</span>
                </div>,
                document.body
            )}
        </>
    )
}

function MatrixRain() {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')

        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }
        resize()
        window.addEventListener('resize', resize)

        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%""\'#&_(),.;:?!\\|{}<>[]^~あいうえおかきくけこ'.split('')
        const fontSize = 16
        const columns = Math.ceil(canvas.width / fontSize)

        // Randomize initial drops so they don't fall in a straight line
        const drops = Array(columns).fill(0).map(() => Math.floor(Math.random() * -100))

        const draw = () => {
            // Semi-transparent black to create trailing effect
            ctx.fillStyle = 'rgba(0, 0, 0, 0.08)'
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            ctx.font = fontSize + 'px monospace'

            for (let i = 0; i < drops.length; i++) {
                const text = chars[Math.floor(Math.random() * chars.length)]

                // Randomly make some leading characters white/brighter green
                const isLeader = Math.random() > 0.85
                ctx.fillStyle = isLeader ? '#ffffff' : '#4af626'

                // Only render if on screen
                if (drops[i] * fontSize >= 0) {
                    ctx.fillText(text, i * fontSize, drops[i] * fontSize)
                }

                // Reset drop to top with slight random offset if it's offscreen
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
                    drops[i] = Math.floor(Math.random() * -10)
                }

                drops[i]++
            }
        }

        const interval = setInterval(draw, 33)
        return () => {
            clearInterval(interval)
            window.removeEventListener('resize', resize)
        }
    }, [])

    return <canvas ref={canvasRef} className="w-full h-full" />
}
