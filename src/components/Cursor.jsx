import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

export default function Cursor() {
  // Disable on touch / coarse pointer devices
  if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(pointer: coarse)').matches) {
    return null
  }

  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const rafRef = useRef(null)
  // Make striker large like a carrom striker
  const RING_SIZE = 120 // px
  const DOT_SIZE = 12 // px (keep a small center dot)
  const pos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 })
  const target = useRef({ x: pos.current.x, y: pos.current.y })
  const ringScale = useRef(1)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    const onMove = (e) => {
      const x = e.clientX
      const y = e.clientY
      target.current.x = x
      target.current.y = y
      // move dot instantly
      dot.style.transform = `translate3d(${x - DOT_SIZE / 2}px, ${y - DOT_SIZE / 2}px, 0)`
    }

    // scale ring when hovering interactive elements
    const handleInteractiveEnter = () => {
      ringScale.current = 1.25
      ring.style.transition = 'transform 160ms cubic-bezier(.2,.8,.2,1)'
      ring.style.transform = `translate3d(${target.current.x - (RING_SIZE / 2)}px, ${target.current.y - (RING_SIZE / 2)}px, 0) scale(${ringScale.current})`
    }

    const handleInteractiveLeave = () => {
      ringScale.current = 1
      ring.style.transform = `translate3d(${target.current.x - (RING_SIZE / 2)}px, ${target.current.y - (RING_SIZE / 2)}px, 0) scale(${ringScale.current})`
    }

    const addHoverListeners = () => {
      document.querySelectorAll('a, button, input, textarea, .interactive').forEach((el) => {
        el.addEventListener('mouseenter', handleInteractiveEnter)
        el.addEventListener('mouseleave', handleInteractiveLeave)
      })
    }

    const removeHoverListeners = () => {
      document.querySelectorAll('a, button, input, textarea, .interactive').forEach((el) => {
        el.removeEventListener('mouseenter', handleInteractiveEnter)
        el.removeEventListener('mouseleave', handleInteractiveLeave)
      })
    }

  document.addEventListener('mousemove', onMove)
  // Also listen on window to ensure tracking across entire page
  window.addEventListener('mousemove', onMove)
    addHoverListeners()

    // Smooth ring follow using requestAnimationFrame and lerp
    const lerp = (a, b, n) => (1 - n) * a + n * b

    const loop = () => {
      pos.current.x = lerp(pos.current.x, target.current.x, 0.2)
      pos.current.y = lerp(pos.current.y, target.current.y, 0.2)
      ring.style.transform = `translate3d(${pos.current.x - (RING_SIZE / 2)}px, ${pos.current.y - (RING_SIZE / 2)}px, 0) scale(${ringScale.current})`
      rafRef.current = requestAnimationFrame(loop)
    }

    rafRef.current = requestAnimationFrame(loop)

    return () => {
      document.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousemove', onMove)
      removeHoverListeners()
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  // Render at document.body to avoid clipping by transformed/overflow containers
  if (typeof document === 'undefined') return null

  return createPortal(
    <>
      {/* Large striker circle that inverts colors beneath using mix-blend-difference */}
      <div
        ref={ringRef}
        className="cursor-ring"
        aria-hidden
        style={{ width: RING_SIZE, height: RING_SIZE }}
      />
      <div
        ref={dotRef}
        className="cursor-dot"
        aria-hidden
        style={{ width: DOT_SIZE, height: DOT_SIZE }}
      />
    </>,
    document.body
  )
}
