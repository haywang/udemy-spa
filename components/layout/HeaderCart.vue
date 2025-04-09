<template>
  <button
    type="button"
    class="relative flex h-16 items-center px-3 text-gray-400 hover:text-gray-600"
  >
    <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
      />
    </svg>
    <span
      v-if="count > 0"
      class="bg-primary-500 absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full text-xs text-white"
    >
      {{ count }}
    </span>
  </button>
</template>

<script setup>
defineProps({
  count: {
    type: Number,
    default: 0
  }
})
</script>
