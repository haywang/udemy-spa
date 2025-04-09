<template>
  <ul class="space-y-2">
    <li v-for="link in links" :key="link.url">
      <a
        :href="link.url"
        class="text-sm text-gray-300 transition-colors hover:text-white"
        :target="link.url.startsWith('http') ? '_blank' : undefined"
        :rel="link.url.startsWith('http') ? 'noopener' : undefined"
      >
        {{ link.text }}
      </a>
    </li>
  </ul>
</template>

<script setup>
defineProps({
  links: {
    type: Array,
    required: true
    // 每个link对象应该包含 text 和 url
  }
})
</script>
