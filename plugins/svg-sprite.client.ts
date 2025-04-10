export default defineNuxtPlugin(() => {
  // Use relative path for GitHub Pages compatibility
  fetch('./icons/sprite.svg')
    .then((res) => {
      if (!res.ok) {
        throw new Error(
          `Failed to load SVG sprite: ${res.status} ${res.statusText}`
        )
      }
      return res.text()
    })
    .then((svg) => {
      const div = document.createElement('div')
      div.style.display = 'none'
      div.innerHTML = svg
      document.body.insertBefore(div, document.body.firstChild)
    })
    .catch((error) => {
      console.error('Error loading SVG sprite:', error)
    })
})
