import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

const RING_SIZE = 120 // px
const DOT_SIZE = 12  // px

export default function Cursor() {
    const dotRef = useRef(null)
    const ringRef = useRef(null)
    const rafRef = useRef(null)
    const pos = useRef({ x: 0, y: 0 })
    const target = useRef({ x: 0, y: 0 })
    const ringScale = useRef(1)

    // Detect coarse pointer (touch) — must come after all hooks
    const isCoarse =
        typeof window !== 'undefined' &&
        window.matchMedia &&
        window.matchMedia('(pointer: coarse)').matches

    useEffect(() => {
        if (isCoarse) return // skip on touch devices

        const dot = dotRef.current
        const ring = ringRef.current
        if (!dot || !ring) return

        // Position dot immediately on mouse move
        const onMove = (e) => {
            target.current.x = e.clientX
            target.current.y = e.clientY
            dot.style.transform = `translate3d(${e.clientX - DOT_SIZE / 2}px, ${e.clientY - DOT_SIZE / 2}px, 0)`
        }

        // Scale ring when hovering interactive elements
        const onEnter = () => {
            ringScale.current = 1.25
        }
        const onLeave = () => {
            ringScale.current = 1
        }

        const addListeners = () => {
            document.querySelectorAll('a, button, input, textarea, .interactive').forEach(el => {
                el.addEventListener('mouseenter', onEnter)
                el.addEventListener('mouseleave', onLeave)
            })
        }
        const removeListeners = () => {
            document.querySelectorAll('a, button, input, textarea, .interactive').forEach(el => {
                el.removeEventListener('mouseenter', onEnter)
                el.removeEventListener('mouseleave', onLeave)
            })
        }

        document.addEventListener('mousemove', onMove)
        addListeners()

        // Smooth ring follow via lerp + rAF
        const lerp = (a, b, n) => (1 - n) * a + n * b
        const loop = () => {
            pos.current.x = lerp(pos.current.x, target.current.x, 0.2)
            pos.current.y = lerp(pos.current.y, target.current.y, 0.2)
            ring.style.transform = `translate3d(${pos.current.x - RING_SIZE / 2}px, ${pos.current.y - RING_SIZE / 2}px, 0) scale(${ringScale.current})`
            rafRef.current = requestAnimationFrame(loop)
        }
        rafRef.current = requestAnimationFrame(loop)

        return () => {
            document.removeEventListener('mousemove', onMove)
            removeListeners()
            cancelAnimationFrame(rafRef.current)
        }
    }, [isCoarse])

    // Don't render on touch devices or SSR
    if (isCoarse || typeof document === 'undefined') return null

    return createPortal(
        <>
            <div
                ref={ringRef}
                className="cursor-ring"
                aria-hidden="true"
                style={{ width: RING_SIZE, height: RING_SIZE }}
            />
            <div
                ref={dotRef}
                className="cursor-dot"
                aria-hidden="true"
                style={{ width: DOT_SIZE, height: DOT_SIZE }}
            />
        </>,
        document.body
    )
}
