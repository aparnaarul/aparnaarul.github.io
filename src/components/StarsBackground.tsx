import { useEffect } from 'react'

export default function StarsBackground() {
  useEffect(() => {
    const canvas = document.getElementById('stars') as HTMLCanvasElement
    const ctx = canvas.getContext('2d')

    function resize() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', resize)
    resize()

    const stars = Array.from({ length: 300 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      radius: Math.random() * 1.5,
      opacity: Math.random(),
      speed: Math.random() * 0.005 + 0.002 // how fast they twinkle
    }))

    function drawStars() {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      stars.forEach(star => {
        star.opacity += star.speed
        if (star.opacity >= 1 || star.opacity <= 0) {
          star.speed = -star.speed
        }
      
        star.x += 0.05
        if (star.x > window.innerWidth) {
          star.x = 0
        }
      
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`
        ctx.fill()
      })
      
      requestAnimationFrame(drawStars)
    }

    drawStars()
  }, [])

  return (
    <canvas
      id="stars"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
        backgroundColor: 'black',
      }}
    />
  )
}
