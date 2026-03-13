const el = document.getElementById('clover')
const speed = 0.0008          // how fast it traces the clover
const spinSpeed = 0.003       // how fast it rotates on its own
const radius = Math.min(window.innerWidth, window.innerHeight) * 0.3

let t = 0

function animate(ts) {
  t = ts

  // four-leaf clover: r = cos(2θ)
  const theta = t * speed
  const r = Math.cos(2 * theta) * radius

  const x = r * Math.cos(theta)
  const y = r * Math.sin(theta)

  const centerX = window.innerWidth / 2
  const centerY = window.innerHeight / 2

  const rotation = t * spinSpeed * (180 / Math.PI)

  el.style.left = `${centerX + x}px`
  el.style.top = `${centerY + y}px`
  el.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`

  requestAnimationFrame(animate)
}

requestAnimationFrame(animate)
