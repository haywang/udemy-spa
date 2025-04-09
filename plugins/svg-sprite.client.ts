export default defineNuxtPlugin(() => {
  fetch('/icons/sprite.svg')
    .then((res) => res.text())
    .then((svg) => {
      const div = document.createElement('div')
      div.style.display = 'none'
      div.innerHTML = svg
      document.body.insertBefore(div, document.body.firstChild)
    })
})
