<template>
  <div class="mb-8 rounded-lg bg-white p-6 shadow-sm">
    <h2 class="mb-4 text-2xl font-bold">What you'll learn</h2>
    <div class="what-you-will-learn--content-spacing--6eP1j">
      <ul class="grid grid-cols-1 gap-4 md:grid-cols-2">
        <li v-for="(objective, index) in objectives" :key="index">
          <div class="flex items-start space-x-2">
            <svg
              aria-hidden="true"
              focusable="false"
              class="h-5 w-5 text-gray-600"
            >
              <use xlink:href="#icon-tick"></use>
            </svg>
            <span class="text-gray-700">{{ objective }}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
// Course objectives data from original HTML
const objectives = [
  'Guadagnare 10$ (circa 8€) di Benvenuto GRATIS',
  'Come Funziona Coinbase Per Comprare BITCOIN',
  'Come Funziona Coinbase Per Comprare Altre Criptovalute'
]
</script>
